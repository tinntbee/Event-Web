import React from "react";
import { Link } from "react-router-dom";
import ChartCustom from "./ChartCustom";
import GridDataCustom from "./GridDataCustom";
import "./style.scss";

HostFeature.propTypes = {};

function HostFeature(props) {
  return (
    <div className="host-feature">
      <div className="side-bar">
        <p className="title">TỔ CHỨC SỰ KIỆN</p>
        <ul>
          <Link to="/host/report">
            <li className="active">Báo cáo Sự kiện</li>
          </Link>
        </ul>
      </div>
      <div className="container">
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
      </div>
    </div>
  );
}

export default HostFeature;
