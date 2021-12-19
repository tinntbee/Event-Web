import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import EventBox from "../../components/EventBox";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../../redux/actions/homeActions";
import EventBoxLoading from "../../components/EventBox/EventBoxLoading";
import { facultyOptions } from "../../utils/facultyList";

Home.propTypes = {};

function Home(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  //search, status, faculty, page, size, events
  const homeRedux = useSelector((state) => state.home);
  const [home, setHome] = useState(homeRedux);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const url = "/event/search";
    const { search, status, faculty, page, size, events } = home;
    axiosClient
      .post(url, { search, status, faculty, page: 1, size })
      .then((res) => {
        setData(res.events);
        dispatch(homeActions.getEvents(res));
        setHome({ ...home, limit: res.limit });
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [home.search, home.status, home.faculty]);
  const facultyOnChange = (e) => {
    setHome({ ...home, faculty: e.target.value });
  };
  const statusOnChange = (e) => {
    setHome({ ...home, status: e.target.value });
  };
  useEffect(() => {
    setHome(homeRedux);
  }, [homeRedux]);
  const loadMoreClick = async () => {
    setLoading(true);
    if (data.length < home.limit) {
      const url = "/event/search";
      const { search, status, faculty, page, size, events } = home;
      axiosClient
        .post(url, { search, status, faculty, page: page + 1, size })
        .then((res) => {
          setData([...data, ...res.events]);
          dispatch(homeActions.getEvents([...data, ...res.events]));
          setHome({ ...home, limit: res.limit, page: res.page });
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    }
  };
  return (
    <div className="home">
      <div className="home__header">
        <p>Kết quả tìm kiếm</p>
        <div className="actions">
          <select className="status" onChange={statusOnChange}>
            <option value="-1">Tất cả</option>
            <option value="1">Sắp diễn ra</option>
            <option value="2">Đang diễn ra</option>
            <option value="3">Đã diễn ra</option>
          </select>
          <select className="faculty" onChange={facultyOnChange}>
            <option value={"all"}>Tất cả</option>
            {facultyOptions.map((item, index) => {
              return (
                <option value={item.value} key={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="home__body">
        {loading ? (
          <div className="home__body__event-box">
            <EventBoxLoading />
          </div>
        ) : (
          data &&
          data.map((item, index) => {
            return (
              <div key={index} className="home__body__event-box">
                <EventBox data={item} />
              </div>
            );
          })
        )}
      </div>
      {data && data.length < home.limit && (
        <button className="more" onClick={loadMoreClick}>
          Xem thêm
        </button>
      )}
    </div>
  );
}

export default Home;
