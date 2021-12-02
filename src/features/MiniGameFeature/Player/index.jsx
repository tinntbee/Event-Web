import React from "react";
import PropTypes from "prop-types";

Player.propTypes = {};

function Player(props) {
  return (
    <div className="player">
      <div className="avatar" style={{ backgroundImage: `url(${""})` }} />
      <div className="information">
        <div className="detail">
          <p className="name">
            <b>Nguyễn Trung Tín</b>
          </p>
          <p className="email">18110381@student.hcmute.edu.vn</p>
        </div>
        <div>
          <p className="score">
            SCORE: <b>0</b>
          </p>
          <p className="rank">
            Rank: <b>-</b>
          </p>
        </div>
      </div>
      <div className="actions">
        <button className="btn-outline clear">Xóa hết</button>
        <button className="btn-contained submit">Nộp</button>
      </div>
    </div>
  );
}

export default Player;
