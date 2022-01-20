import AddIcon from "@mui/icons-material/Add";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import BarChartIcon from "@mui/icons-material/BarChart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExtensionIcon from "@mui/icons-material/Extension";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import EventBox from "../../components/EventBox";
import { dialogActions } from "../../redux/actions/dialogActions";
import { snackBarActions } from "../../redux/actions/snackBarActions";
import Report from "./Report";
import "./style.scss";

HostFeature.propTypes = {};

function HostFeature(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [state, setState] = useState({ active: "myEvent" });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [eventActive, setEventActive] = useState();
  const handleModifyClick = (_id) => {
    history.push("/event-studio/" + _id);
  };
  const handleRemoveClick = (_id) => {
    const acceptRemove = async () => {
      setLoading(true);
      const url = "/event/" + _id;
      await axiosClient
        .delete(url)
        .then(async (res) => {
          await fetchMyEvent(search);
          setLoading(false);
          dispatch(
            snackBarActions.open({
              variant: "success",
              message: "Xóa thành công sự kiện: " + res.name,
            })
          );
        })
        .catch((e) => setLoading(false));
    };
    dispatch(
      dialogActions.open({
        title: "Xác nhận xóa ?",
        content: "Xóa sự kiện này sẽ bao gồm minigame và các dự liệu kèm theo!",
        callbacks: [
          { callback: () => {}, content: "Hủy" },
          { callback: acceptRemove, content: "Tiếp tục" },
        ],
      })
    );
  };
  const handleModifyMiniGameClick = (miniGameId) => {
    history.push("/game-studio/" + miniGameId);
  };
  const handleReportClick = (_id) => {
    setState({ ...state, active: "report" });
    setEventActive(_id);
  };
  const fetchMyEvent = async (_search) => {
    setLoading(true);
    const url = "/event/myEvent";
    axiosClient
      .post(url, { search: _search })
      .then((res) => {
        setData(res);
        setLoading(false);
        setEventActive(res[0]?._id);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };
  useEffect(() => {
    fetchMyEvent(search);
  }, [search]);
  const handleLinkClick = (_id) => {
    const el = document.createElement("textarea");
    el.value = "localhost:3000/event/" + _id;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    dispatch(
      snackBarActions.open({
        message: "Đã sao chép vào bộ nhớ tạm :>",
        variant: "success",
      })
    );
    document.body.removeChild(el);
  };
  const handleSearchOnChange = (e) => {
    if (e.key == "Enter") {
      setSearch(e.target.value);
    }
  };
  return (
    <div className="host-feature">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="side-bar">
        <p className="title">TỔ CHỨC SỰ KIỆN</p>
        <ul>
          <Link to="#">
            <li
              className={classNames({
                active: state.active === "myEvent",
              })}
              onClick={() => {
                setState({ ...state, active: "myEvent" });
              }}
            >
              Sự kiện của tôi
            </li>
          </Link>
          <Link to="#">
            <li
              className={classNames({
                active: state.active === "report",
              })}
              onClick={() => {
                setState({ ...state, active: "report" });
              }}
            >
              Báo cáo Sự kiện
            </li>
          </Link>
        </ul>
      </div>
      <div className="container">
        {state.active === "report" ? (
          <Report data={data} eventActive={eventActive} />
        ) : (
          <>
            <div className="my-event">
              <div className="header">
                <p className="title">
                  Sự kiện của tôi
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => {
                      history.push("/event-studio/new");
                    }}
                  >
                    <AddIcon sx={{ color: "#FFFFFF" }} fontSize="medium" />
                  </IconButton>
                </p>
                <div className="actions">
                  <IconButton aria-label="delete" size="small">
                    <DeleteForeverIcon
                      sx={{ color: "#FFFFFF" }}
                      fontSize="medium"
                    />
                  </IconButton>
                  <div className="line" />
                  <input
                    className="search"
                    placeholder="search"
                    onKeyPress={handleSearchOnChange}
                  ></input>
                </div>
              </div>
              <div className="body">
                <div className="title-name">
                  <p>Sự kiện</p>
                  <p>Hành động</p>
                </div>
                <div className="my-event-list">
                  {data &&
                    data.map((item, index) => {
                      return (
                        <>
                          <div className="event-row">
                            <EventBox data={item} />
                            <div className="event-actions">
                              <IconButton
                                aria-label="delete"
                                size="small"
                                onClick={() => handleModifyClick(item._id)}
                              >
                                <AutoFixHighIcon
                                  sx={{ color: "#348b9c" }}
                                  fontSize="medium"
                                />
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                size="small"
                                onClick={() => handleRemoveClick(item._id)}
                              >
                                <DeleteForeverIcon
                                  sx={{ color: "#348b9c" }}
                                  fontSize="medium"
                                />
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                size="small"
                                onClick={() => {
                                  handleModifyMiniGameClick(item.minigameId);
                                }}
                              >
                                <ExtensionIcon
                                  sx={{ color: "#348b9c" }}
                                  fontSize="medium"
                                />
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                size="small"
                                onClick={() => handleLinkClick(item._id)}
                              >
                                <InsertLinkIcon
                                  sx={{ color: "#348b9c" }}
                                  fontSize="medium"
                                />
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                size="small"
                                onClick={() => {
                                  handleReportClick(item._id);
                                }}
                              >
                                <BarChartIcon
                                  sx={{ color: "#348b9c" }}
                                  fontSize="medium"
                                />
                              </IconButton>
                            </div>
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HostFeature;
