import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { FacebookProvider, Page } from "react-facebook";
import { Link } from "react-router-dom";
import Questions from "./Questions";
import Answers from "./Answers";
import Contents from "./Contents";
import Player from "./Player";
import classNames from "classnames";

MiniGameFeature.propTypes = {};

function MiniGameFeature(props) {
  const data = {
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
  };
  const event = {
    _id: "1",
    name: "cuộc thi học thuật Becod3r",
    dayBegin: "2021-09-27T08:00",
    dayEnd: "2021-09-27T08:00",
    status: "đang diễn ra",
  };
  const miniGameData = {
    player: [
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "2", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
      { _id: "", name: "Nguyen Tin", avatar: "", point: 2000 },
    ],
  };
  const _idUser = "2";
  const [state, setState] = useState({ ...data, rowFocus: 0 });
  return (
    <div className="mini-game">
      <div className="mini-game__header">
        <div>
          <h1>MINIGAME: {event.name.toUpperCase()}</h1>
          <div className="information">
            <span>{event.status}</span>
            <div />
            <span>
              {event &&
                event.dayBegin.replaceAll("-", "/").replaceAll("T", " ") +
                  " - " +
                  event.dayEnd.replaceAll("-", "/").replaceAll("T", " ")}
            </span>
            <div />
            <span>
              Sinh viên Khoa Công nghệ Thông tin - Đại học Sư phạm Kỹ thuật
              TP.HCM
            </span>
          </div>
        </div>
        <div>
          <Link to={`/event/${event._id}`}>Trở về trang sự kiện</Link>
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
        <Player />
        <div className="event-detail">
          <div className="top-player">
            <div className="header">
              <p>
                <b>BẢN TỔNG SẮC</b>
              </p>
            </div>
            <div className="body">
              <div className="top3">
                <div className="no2">
                  <div
                    className="avatar"
                    style={{
                      backgroundImage: `url(${miniGameData.player[1].avatar})`,
                    }}
                  />
                  <p className="name">{miniGameData.player[1].name}</p>
                  <p className="point">{miniGameData.player[1].point}</p>
                </div>
                <div className="no1">
                  <div
                    className="avatar"
                    style={{
                      backgroundImage: `url(${miniGameData.player[0].avatar})`,
                    }}
                  />
                  <p className="name">{miniGameData.player[0].name}</p>
                  <p className="point">{miniGameData.player[0].point}</p>
                </div>
                <div className="no3">
                  <div
                    className="avatar"
                    style={{
                      backgroundImage: `url(${miniGameData.player[2].avatar})`,
                    }}
                  />
                  <p className="name">{miniGameData.player[2].name}</p>
                  <p className="point">{miniGameData.player[2].point}</p>
                </div>
              </div>
              <div className="player">
                {miniGameData &&
                  miniGameData.player.map((item, index) => {
                    if (index > 2) {
                      return (
                        <div
                          key="index"
                          className={classNames({
                            row: true,
                            highline: index % 2 !== 0,
                            me: item._id === _idUser,
                          })}
                        >
                          <p className="stt">{index + 1 + "th"}</p>
                          <p className="name">{item.name}</p>
                          <p className="point">{item.point}</p>
                        </div>
                      );
                    }
                    return <></>;
                  })}
              </div>
            </div>
          </div>
          <FacebookProvider appId="1463441184039187">
            <Page
              width="678px"
              height="920px"
              href="https://www.facebook.com/DoanHoiITUTE"
              tabs="timeline"
            />
          </FacebookProvider>
        </div>
      </div>
    </div>
  );
}

export default MiniGameFeature;
