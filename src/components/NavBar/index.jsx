import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { userAction } from "../../redux/actions/usersActions";
import "./style.scss";

NavBar.propTypes = {};

function NavBar(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const search = useSelector((state) => state.home.search);
  const history = useHistory();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      alert(event.target.value);
      history.push("/home");
    }
  };
  const [state, setState] = useState({ active: "" });

  const setLocationActive = (pathname) => {
    if (pathname.includes("home")) {
      setState({ ...state, active: "home" });
      return;
    }
    if (pathname.includes("host")) {
      setState({ ...state, active: "host" });
      return;
    }
    if (pathname.includes("account-detail")) {
      setState({ ...state, active: "account-detail" });
      return;
    } else {
      setState({ ...state, active: "different" });
      return;
    }
  };

  history.listen(function (location) {
    setLocationActive(location.pathname);
  });

  useEffect(() => {
    setLocationActive(window.location.pathname);
    if (user) {
    } else {
      const getUser = localStorage.getItem("user");
      if (getUser) {
        dispatch(userAction.Login(JSON.parse(getUser)));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(userAction.Logout());
    history.push("/home");
  };
  return (
    <div className="nav-bar">
      <div>
        <input className="search-bar" onKeyPress={handleKeyPress} />
        <div className="actions">
          <Link
            to="/home"
            className={classNames({
              active: state.active === "home",
            })}
          >
            Trang chủ
          </Link>
          <Link
            to="/host"
            className={classNames({
              active: state.active === "host",
            })}
          >
            Tổ chức sự kiện
          </Link>
          {user ? (
            <>
              <Link onClick={handleLogout}>Đăng xuất</Link>
              <Link to="/account-detail">
                <div
                  className="avatar"
                  style={{ backgroundImage: `url(${user.avatar})` }}
                />
              </Link>
            </>
          ) : (
            <Link to="/login">
              <button className="login">Đăng nhập</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
