import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import EventBox from "../../components/EventBox";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../../redux/actions/homeActions";

Home.propTypes = {};

function Home(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { search, status, faculty, page, size, events } = useSelector(
    (state) => state.home
  );
  const [data, setData] = useState();
  useEffect(() => {
    const url = "/event/search";
    axiosClient
      .post(url, { search, status, faculty, page, size })
      .then((data) => {
        setData(data.events);
        console.log({ data });
        dispatch(homeActions.getEvents(data));
      })
      .catch((e) => console.log(e));
  }, [search]);
  return (
    <div className="home">
      <div className="home__header">
        <p>Kết quả tìm kiếm</p>
        <div className="actions">
          <select className="status">
            <option value="all">Tất cả</option>
            <option value="up-coming">Sắp diễn ra</option>
            <option value="on-going">Đang diễn ra</option>
          </select>
          <select className="faculty">
            <option value="all">Tất cả</option>
            <option value="FIT">FIT</option>
          </select>
        </div>
      </div>
      <div className="home__body">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="home__body__event-box"
                onClick={() => {
                  history.push("/event/" + item._id);
                }}
              >
                <EventBox data={item} />
              </div>
            );
          })}
      </div>
      <button className="more">Xem thêm</button>
    </div>
  );
}

export default Home;
