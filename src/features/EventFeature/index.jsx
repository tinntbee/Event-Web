import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { FacebookProvider, Page } from "react-facebook";
import { classNames } from "classnames";
import { useHistory } from "react-router-dom";

EventFeature.propTypes = {};

function EventFeature(props) {
  const history = useHistory();
  const data = {
    _id: "",
    background: "",
    standee: "",
    name: "",
    dayBegin: "",
    dayEnd: "",
    description: "",
    _idMiniGame: "1",
  };
  const miniGameData = {
    player: [
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
  const handlePlayNowClick = () => {
    history.push("/mini-game/" + data._idMiniGame);
  };
  return (
    <div className="event">
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
            <button>Register</button>
          </div>
          <div className="information">
            <p>Đang diễn ra</p>
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
          <FacebookProvider appId="1463441184039187">
            <Page
              width="456px"
              height="709px"
              href="https://www.facebook.com/DoanHoiITUTE"
              tabs="timeline"
            />
          </FacebookProvider>
          <div className="mini-game">
            <div className="header">
              <p>MINIGAME</p>
              <button onClick={handlePlayNowClick}>Chơi ngay</button>
            </div>
            <div className="content">
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
                          className={index % 2 !== 0 ? "row highline" : "row"}
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
        </div>
      </div>
    </div>
  );
}

export default EventFeature;