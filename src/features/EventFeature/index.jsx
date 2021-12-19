import React, { useEffect, useState } from "react";
import { FacebookProvider, Page } from "react-facebook";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import axiosClient from "../../api/axiosClient";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "./style.scss";

EventFeature.propTypes = {};

function EventFeature(props) {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const [data, setData] = useState({
    _id: "",
    background: "",
    standee: "",
    name: "",
    dayBegin: "",
    dayEnd: "",
    description: "",
    _idMiniGame: "1",
  });
  const [statusString, setStatusString] = useState("");
  const statusParse = () => {
    const timeBegin = Date.parse(data.dayBegin);
    const timeEnd = Date.parse(data.dayEnd);
    const timeNow = Date.now();
    if (timeBegin > timeNow) {
      setStatusString("Sắp diễn ra");
      return;
    }
    if (timeEnd < timeNow) {
      setStatusString("Đã diễn ra");
      return;
    }
    if (timeBegin <= timeNow && timeNow <= timeEnd) {
      setStatusString("Đang diễn ra");
      return;
    }
  };
  const [loading, setLoading] = useState(false);
  const [topPlayerState, setTopPlayerState] = useState();
  const fetchTopPlayer = async (minigameId) => {
    setLoading(true);
    const url = "/minigame/getTop10Player/" + minigameId;
    await axiosClient
      .get(url)
      .then((res) => setTopPlayerState(res))
      .catch((e) => console.log({ e }));
    setLoading(false);
  };
  const handlePlayNowClick = () => {
    history.push("/mini-game/" + data._idMiniGame);
  };
  const fetchData = async () => {
    const { _id } = props.match.params;
    if (_id === "new") {
    } else {
      const url = "/event/detail/" + _id;
      await axiosClient
        .get(url)
        .then((data) => {
          console.log({ data });
          setData({
            ...data,
            _id: data._id,
            name: data.name,
            background: data.background,
            standee: data.standee,
            dayBegin: data.timeBegin.substring(0, 16),
            dayEnd: data.timeEnd.substring(0, 16),
            description: data.description,
            linkFanpage: data.link,
            isFavorites: data.isFavorites,
            _idMiniGame: data.minigameId,
          });

          fetchTopPlayer(data.minigameId);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    statusParse();
  }, [data]);
  const handleUnRegister = async () => {
    const url = "event/unRegisterEvent/" + data._id;
    await axiosClient
      .post(url)
      .then((res) => setData({ ...data, isFavorites: res.isFavorites }));
  };
  const handleRegister = async () => {
    const url = "event/registerEvent/" + data._id;
    await axiosClient
      .post(url)
      .then((res) => setData({ ...data, isFavorites: res.isFavorites }));
  };
  return (
    <div className="event">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="event__title">
        <p>EVENT DETAIL</p>
      </div>
      <div className="event__content">
        <div className="left">
          <div
            className="background"
            style={{ backgroundImage: `url(${data && data.background})` }}
          />
          <div className="name">
            <p>{data && data.name}</p>
            {user &&
              statusString !== "Đã diễn ra" &&
              (data.isFavorites ? (
                <button onClick={handleUnRegister}>Hủy đăng kí</button>
              ) : (
                <button onClick={handleRegister}>Đăng kí</button>
              ))}
          </div>
          <div className="information">
            <p>{statusString}</p>
            <div />
            <p>
              {data &&
                data.dayBegin.replaceAll("-", "/").replaceAll("T", " ") +
                  " - " +
                  data.dayEnd.replaceAll("-", "/").replaceAll("T", " ")}
            </p>
            <div />
            <p>Sinh viên trường Đại học Sư phạm Kỹ thuật Tp.HCM</p>
          </div>
          <div className="description">
            <FroalaEditorView model={data && data.description} />
          </div>
        </div>
        <div className="right">
          <div
            className="standee"
            style={{ backgroundImage: `url(${data && data.standee})` }}
          />
          <div className="mini-game">
            <div className="header">
              <p>MINIGAME</p>
              {user ? (
                statusString === "Sắp diễn ra" ? (
                  <p>Sự kiện chưa diễn ra</p>
                ) : statusString === "Đã diễn ra" ? (
                  <button onClick={handlePlayNowClick}>Xem kết quả</button>
                ) : (
                  <button onClick={handlePlayNowClick}>Chơi ngay</button>
                )
              ) : (
                <p>Cần phải đăng nhập để chơi</p>
              )}
            </div>
            {topPlayerState && (
              <div className="content">
                <div className="top3">
                  <div className="no2">
                    <div
                      className="avatar"
                      style={{
                        backgroundImage: `url(${
                          topPlayerState[1] && topPlayerState[1].user.avatar
                        })`,
                      }}
                    />
                    <p className="name">
                      {topPlayerState[1]
                        ? topPlayerState[1].user.nickname
                          ? topPlayerState[1].user.nickname
                          : topPlayerState[1].user.fullName
                        : "-"}
                    </p>
                    <p className="point">
                      {topPlayerState[1] ? topPlayerState[1].point : "-"}
                    </p>
                  </div>
                  <div className="no1">
                    <div
                      className="avatar"
                      style={{
                        backgroundImage: `url(${
                          topPlayerState[0] && topPlayerState[0].user.avatar
                        })`,
                      }}
                    />
                    <p className="name">
                      {topPlayerState[0]
                        ? topPlayerState[0].user.nickname
                          ? topPlayerState[0].user.nickname
                          : topPlayerState[0].user.fullName
                        : "-"}
                    </p>
                    <p className="point">
                      {topPlayerState[0] ? topPlayerState[0].point : "-"}
                    </p>
                  </div>
                  <div className="no3">
                    <div
                      className="avatar"
                      style={{
                        backgroundImage: `url(${
                          topPlayerState[2] && topPlayerState[2].user.avatar
                        })`,
                      }}
                    />
                    <p className="name">
                      {topPlayerState[2]
                        ? topPlayerState[2].user.nickname
                          ? topPlayerState[2].user.nickname
                          : topPlayerState[2].user.fullName
                        : "-"}
                    </p>
                    <p className="point">
                      {topPlayerState[2] ? topPlayerState[2].point : "-"}
                    </p>
                  </div>
                </div>
                <div className="player">
                  {topPlayerState &&
                    topPlayerState.map((item, index) => {
                      if (index > 2) {
                        return (
                          <div
                            key={index}
                            className={classNames({
                              row: true,
                              highline: index % 2 !== 0,
                            })}
                          >
                            <p className="stt">{index + 1 + "th"}</p>
                            <p className="name">
                              {item.user.nickname
                                ? item.user.nickname
                                : item.user.fullName}
                            </p>
                            <p className="point">{item.point}</p>
                          </div>
                        );
                      }
                      return <></>;
                    })}
                </div>
              </div>
            )}
          </div>
          <FacebookProvider appId="1463441184039187">
            <Page
              width="456px"
              height="709px"
              href={
                data.linkFanpage
                  ? data.linkFanpage
                  : "https://www.facebook.com/DoanHoiITUTE"
              }
              tabs="timeline"
            />
          </FacebookProvider>
        </div>
      </div>
    </div>
  );
}

export default EventFeature;
