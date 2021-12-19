import React from "react";
import PropTypes from "prop-types";
import { answerSetParse, getKey } from "../../../utils/miniGame";
import axiosClient from "../../../api/axiosClient";
import { snackBarActions } from "../../../redux/actions/snackBarActions";
import { useDispatch } from "react-redux";

Player.propTypes = {};

function Player(props) {
  const dispatch = useDispatch();
  const {
    data,
    state,
    setStateParent,
    setLoading,
    setPlayerState,
    fetchTopPlayer,
    statusString,
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
        if (error.response.status == 430) {
          dispatch(
            snackBarActions.open({
              message: "Quá hạn thời gian sự kiện :(",
              variant: "error",
            })
          );
        }
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
        {statusString === "Đã diễn ra" ? (
          <p>Hết hạn nộp</p>
        ) : statusString === "Sắp diễn ra" ? (
          <p>Sự kiện chưa bắt đầu</p>
        ) : data.score != "-" ? (
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
