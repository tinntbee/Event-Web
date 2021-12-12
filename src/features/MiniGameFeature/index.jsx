import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FacebookProvider, Page } from "react-facebook";
import { Link } from "react-router-dom";
import Questions from "./Questions";
import Answers from "./Answers";
import Contents from "./Contents";
import Player from "./Player";
import classNames from "classnames";
import axiosClient from "../../api/axiosClient";
import { answerInitialization } from "../../utils/miniGame";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

MiniGameFeature.propTypes = {};

function MiniGameFeature(props) {
  const [data, setData] = useState({
    grid: { rows: 8, columns: 8 },
    listQA: [
      {
        questionContent: "something",
        questionImageUrl: "url",
        aBegin: 0,
        aEnd: 7,
        answers: ["", "", "", "", "", "", "", ""],
      },
      {
        questionContent: "something",
        questionImageUrl: "url",
        aBegin: 1,
        aEnd: 4,
        answers: ["", "", "", "", "", "", "", ""],
      },
      {
        questionContent: "something",
        questionImageUrl: "url",
        aBegin: 3,
        aEnd: 5,
        answers: ["", "", "", "", "", "", "", ""],
      },
      {
        questionContent: "something",
        questionImageUrl: "url",
        aBegin: 4,
        aEnd: 7,
        answers: ["", "", "", "", "", "", "", ""],
      },
      {
        questionContent: "something",
        questionImageUrl: "url",
        aBegin: 1,
        aEnd: 4,
        answers: ["", "", "", "", "", "", "", ""],
      },
      {
        questionContent: "something",
        questionImageUrl: "url",
        aBegin: 4,
        aEnd: 8,
        answers: ["", "", "", "", "", "", "", ""],
      },
      {
        questionContent: "something",
        questionImageUrl: "url",
        aBegin: 2,
        aEnd: 5,
        answers: ["", "", "", "", "", "", "", ""],
      },
      {
        questionContent: "something",
        questionImageUrl: "url",
        aBegin: 1,
        aEnd: 5,
        answers: ["", "", "", "", "", "", "", ""],
      },
    ],
    columnKey: 4,
  });
  const _idUser = "2";
  const [state, setState] = useState({ ...data, rowFocus: 0 });
  const [eventState, setEventState] = useState({
    _id: "",
    name: "",
    timeBegin: "-",
    timeEnd: "-",
    link: "",
  });
  const [playerState, setPlayerState] = useState({
    _id: "",
    nickname: "",
    score: "",
    rank: "",
    email: "",
    avatar: "",
  });
  const [topPlayerState, setTopPlayerState] = useState();
  const [loading, setLoading] = useState(false);
  let idEvent = "";

  const fetchDataMiniGame = async () => {
    setLoading(true);
    const { _id } = props.match.params;
    const url = "/minigame/" + _id;
    await axiosClient.get(url).then((res) => {
      const listQA = [];
      for (const qa of res.listQA) {
        listQA.push({
          questionContent: qa.questionContent,
          questionImageUrl: qa.questionImageUrl,
          aBegin: qa.aBegin,
          aEnd: qa.aEnd,
          answers: answerInitialization(res.gridColumn),
        });
      }
      idEvent = res.idEvent;
      setData({
        _id: res._id,
        idEvent: res.idEvent,
        grid: { rows: res.gridRow, columns: res.gridColumn },
        listQA: listQA,
        columnKey: res.columnKey,
        played: res.played,
      });
      setState({
        ...{
          _id: res._id,
          idEvent: res.idEvent,
          grid: { rows: res.gridRow, columns: res.gridColumn },
          listQA: listQA,
          played: res.played,
          columnKey: res.columnKey,
        },
        rowFocus: 0,
      });
    });
    setLoading(false);
  };
  const fetchDataEvent = async () => {
    setLoading(true);
    const url = "/event/detail/" + idEvent;
    axiosClient
      .get(url)
      .then((data) => {
        setEventState({
          _id: data._id,
          name: data.name,
          timeBegin: data.timeBegin,
          timeEnd: data.timeEnd,
          link: data.link,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    setLoading(false);
  };
  const fetchDataPlayer = async () => {
    setLoading(true);
    const { _id } = props.match.params;
    const url = "/minigame/player/" + _id;
    axiosClient
      .get(url)
      .then((data) => {
        setPlayerState({
          _id: data._id,
          nickname: data.nickname,
          score: data.score,
          rank: data.rank,
          email: data.email,
          avatar: data.avatar,
        });
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
  };
  const fetchTopPlayer = async () => {
    setLoading(true);
    const { _id } = props.match.params;
    const url = "/minigame/getTop20Player/" + _id;
    await axiosClient
      .get(url)
      .then((res) => setTopPlayerState(res))
      .catch((e) => console.log({ e }));
    setLoading(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      await fetchDataMiniGame();
      await fetchDataEvent();
      await fetchDataPlayer();
      await fetchTopPlayer();
    };
    fetchData();
  }, []);
  return (
    <div className="mini-game">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="mini-game__header">
        <div>
          <h1>MINIGAME: {eventState.name.toUpperCase()}</h1>
          <div className="information">
            <span>Đang diễn ra</span>
            <div />
            <span>
              {eventState &&
                eventState.timeBegin
                  .substr(0, 16)
                  .replaceAll("-", "/")
                  .replaceAll("T", " ") +
                  " - " +
                  eventState.timeEnd
                    .substr(0, 16)
                    .replaceAll("-", "/")
                    .replaceAll("T", " ")}
            </span>
            <div />
            <span>
              Sinh viên Khoa Công nghệ Thông tin - Đại học Sư phạm Kỹ thuật
              TP.HCM
            </span>
          </div>
        </div>
        <div>
          <Link to={`/event/${eventState._id}`}>Trở về trang sự kiện</Link>
        </div>
      </div>
      <div className="mini-game__content">
        <Questions
          listQA={state.listQA}
          setStateParent={setState}
          state={state}
        />
        <Answers
          listQA={state.listQA}
          grid={state.grid}
          state={state}
          setStateParent={setState}
        />
        <Contents
          listQA={state.listQA}
          state={state}
          setStateParent={setState}
          rowFocus={state.rowFocus}
        />
      </div>
      <div className="mini-game__footer">
        <Player
          state={state}
          setStateParent={setState}
          data={playerState}
          setLoading={setLoading}
          setPlayerState={setPlayerState}
          fetchTopPlayer={fetchTopPlayer}
        />
        <div className="event-detail">
          <div className="top-player">
            <div className="header">
              <p>
                <b>BẢN TỔNG SẮC</b>
              </p>
            </div>
            {topPlayerState && (
              <div className="body">
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
                              me: item.user._id === _idUser,
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
              width="678px"
              height="920px"
              href={eventState.link}
              tabs="timeline"
            />
          </FacebookProvider>
        </div>
      </div>
    </div>
  );
}

export default MiniGameFeature;
