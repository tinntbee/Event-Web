import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";
import EventBox from "../../components/EventBox";
import ListEventsHorizontal from "../../components/ListEventsHorizontal";
import axiosClient from "../../api/axiosClient";

RegisteredEvent.propTypes = {};

function RegisteredEvent(props) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const url = "/event/getRegisteredEvents/";
    await axiosClient
      .get(url)
      .then((res) => {
        setData(res);
        console.log({ res });
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log({ e });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="registered-event Account-detail">
      <div className="Sidebar">
        <h2 className="Title">My Account</h2>
        <ul>
          <Link to="/account-detail/information">
            <li>
              <button>Account Information</button>
            </li>
          </Link>
          <Link to="/account-detail/registered-event">
            <li className="active">
              <button>Registered Events</button>
            </li>
          </Link>
        </ul>
      </div>
      <div className="Container">
        <div className="Container__header">
          <h3 className="Title">Registered Events</h3>
        </div>
        <div className="Container__body">
          <ListEventsHorizontal loading={loading} data={data} />
        </div>
        <div className="Container__footer"></div>
      </div>
    </div>
  );
}

export default RegisteredEvent;
