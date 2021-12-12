import React from "react";
import PropTypes from "prop-types";
import { answerSetParse, getKey } from "../../../utils/miniGame";
import axiosClient from "../../../api/axiosClient";

Player.propTypes = {};

function Player(props) {
  const {
    data,
    state,
    setStateParent,
    setLoading,
    setPlayerState,
    fetchTopPlayer,
  } = props;
  const handleSubmitClick = async () => {
    setLoading(true);
    const req = {
      answers: answerSetParse(state.listQA),
      key: getKey(state.listQA, state.columnKey),
    };
    console.log({ req });

    //NOTE: post answer
    const url = "/minigame/submitMinigameAnswer/" + state._id;
    await axiosClient
      .post(url, req)
      .then((res) => {
        setLoading(false);
        setPlayerState({ ...data, rank: res.rank, score: res.score });
        fetchTopPlayer();
      })
      .catch((error) => {
        setLoading(false);
        console.log({ error });
      });
  };
  return (
    <div className="player">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${data.avatar})` }}
      />
      <div className="information">
        <div className="detail">
          <p className="name">
            <b>{data.nickname}</b>
          </p>
          <p className="email">{data.email}</p>
        </div>
        <div>
          <p className="score">
            SCORE: <b>{data.score}</b>
          </p>
          <p className="rank">
            Rank: <b>{data.rank}</b>
          </p>
        </div>
      </div>
      <div className="actions">
        {data.score != "-" ? (
          <p>Bạn chỉ có thể tham gia 1 lần</p>
        ) : (
          <>
            <button className="btn-outline clear">Xóa hết</button>
            <button
              className="btn-contained submit"
              onClick={handleSubmitClick}
            >
              Nộp
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Player;
