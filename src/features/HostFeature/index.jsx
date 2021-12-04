import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ChartCustom from "./ChartCustom";
import GridDataCustom from "./GridDataCustom";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import "./style.scss";
import EventBox from "../../components/EventBox";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import BarChartIcon from "@mui/icons-material/BarChart";
import axiosClient from "../../api/axiosClient";
import { useDispatch } from "react-redux";

HostFeature.propTypes = {};

function HostFeature(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [state, setState] = useState({ active: "myEvent" });
  const [data, setData] = useState();
  const handleModifyClick = (_id) => {
    history.replace("/event-studio/" + _id);
  };

  const handleRemoveClick = (_id) => {};
  const handleStopClick = (_id) => {};
  const handleLinkClick = (_id) => {};
  const handleReportClick = (_id) => {};
  useEffect(() => {
    const url = "/event/myEvent";
    axiosClient
      .post(url, { search: search })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="host-feature">
      <div className="side-bar">
        <p className="title">TỔ CHỨC SỰ KIỆN</p>
        <ul>
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
        </ul>
      </div>
      <div className="container">
        {state.active === "report" ? (
          <>
            <div className="chart">
              <div className="header">
                <p className="title">Biểu đồ thống kê</p>
                <div className="actions">
                  <select className="event-name">
                    <option>becod3r</option>
                    <option>Chào mừng nhà giáo việt nam 20/11</option>
                  </select>
                </div>
              </div>
              <div className="body">
                <ChartCustom />
              </div>
            </div>
            <div className="players-list">
              <div className="header">
                <p className="title">Danh sách tham gia</p>
                <div className="actions"></div>
              </div>
              <div className="body">
                <GridDataCustom />
              </div>
            </div>
          </>
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
                  <input className="search" placeholder="search"></input>
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
                                  handleStopClick(item._id);
                                }}
                              >
                                <DoDisturbIcon
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
