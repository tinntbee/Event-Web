import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { userAPI } from "../../api/userAPI";
import { homeActions } from "../../redux/actions/homeActions";
import { snackBarActions } from "../../redux/actions/snackBarActions";
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
      dispatch(homeActions.getEvents({ search: event.target.value }));
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
    setLocationActive(window.location.pathname);
  });

  useEffect(() => {
    setLocationActive(window.location.pathname);
    const fetchAccountInfo = async () => {
      if (user) {
      } else {
        await userAPI
          .getAccountInfo()
          .then((data) => {
            if (data) {
              dispatch(
                userAction.Login({
                  nickname: data.nickname,
                  fullName: data.fullName,
                  gender: data.gender,
                  university: data.university,
                  faculty: data.faculty,
                  studentClass: data.studentClass,
                  email: data.email,
                  phone: data.phone,
                  dob: data.dob.substring(0, 10),
                  avatar: data.avatar,
                })
              );
            }
          })
          .catch((e) => {
            dispatch(
              snackBarActions.open({
                message: "Bạn chưa đăng nhập đó ^^!",
                variant: "error",
              })
            );
            dispatch(userAction.Logout());
          });
      }
    };
    fetchAccountInfo();
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
          {user && (
            <Link
              to="/host"
              className={classNames({
                active: state.active === "host",
              })}
            >
              Tổ chức sự kiện
            </Link>
          )}
          {user ? (
            <>
              <Link to="#" onClick={handleLogout}>
                Đăng xuất
              </Link>
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
