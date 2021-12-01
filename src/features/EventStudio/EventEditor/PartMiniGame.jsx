import React from "react";
import PropTypes from "prop-types";
import ScrollContainer from "react-indiana-drag-scroll";

PartMiniGame.propTypes = {};

function PartMiniGame(props) {
  return (
    <div className="part part-mini-game">
      <p>Chọn Minigame muốn thêm vào sự kiện của bạn</p>
      <ScrollContainer className="scroll-horizontal-mini-game">
        <div
          className="mini-game-box active"
          style={{ backgroundImage: 'url("images/minigame-ochu.jpg")' }}
        />
        <div
          className="mini-game-box"
          style={{ backgroundImage: 'url("images/minigame-ghep-hinh.jpg")' }}
        >
          <p>Chưa có sẳn để sử dụng</p>
        </div>
        <div
          className="mini-game-box"
          style={{ backgroundImage: 'url("images/minigame-khac.jpg")' }}
        >
          <p>Chưa có sẳn để sử dụng</p>
        </div>
        <div
          className="mini-game-box"
          style={{ backgroundImage: 'url("images/minigame-ghep-hinh.jpg")' }}
        >
          <p>Chưa có sẳn để sử dụng</p>
        </div>
      </ScrollContainer>
    </div>
  );
}

export default PartMiniGame;
