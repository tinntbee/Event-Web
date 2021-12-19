import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ChartCustom from "./ChartCustom";
import GridDataCustom from "./GridDataCustom";
import { reportAPI } from "../../../api/reportAPI";

Report.propTypes = {};

function Report(props) {
  const { data, eventActive } = props;
  const [event, setEvent] = useState(eventActive);
  const [chart, setChart] = useState({displayedDate: [], participantsPerDay: [], totalFromFirstDay: []});
  const [participantsInfo, setParticipantsInfo] = useState([])
  const fetchData = async (_id) => {
    reportAPI
      .getChart(_id)
      .then((res) => {
        setChart(res)
      })
      .catch((e) => {
        console.log(e);
      });
    reportAPI
      .getTable(_id)
      .then((res) => {
        setParticipantsInfo(res)
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchData(event);
  }, [event]);
  return (
    <>
      <div className="chart">
        <div className="header">
          <p className="title">Biểu đồ thống kê</p>
          <div className="actions">
            <select
              className="event-name"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
            >
              {data &&
                data.map((item, index) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="body">
          <ChartCustom data={chart}/>
        </div>
      </div>
      <div className="players-list">
        <div className="header">
          <p className="title">Danh sách tham gia</p>
          <div className="actions"></div>
        </div>
        <div className="body">
          <GridDataCustom data={participantsInfo}/>
        </div>
      </div>
    </>
  );
}

export default Report;
