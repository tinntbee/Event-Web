import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Contents.propTypes = {};

function Contents(props) {
  const { rowFocus, listQA, state, setStateParent } = props;
  return (
    <div className="contents">
      <div className="header">
        <p>
          <b>Gợi ý cho hàng ngang số {rowFocus + 1} </b>
        </p>
        <p>Có {listQA[rowFocus].aEnd - listQA[rowFocus].aBegin + 1} chữ cái</p>
      </div>
      <div className="body">
        <div className="content">
          <textarea value={listQA[rowFocus].questionContent} disabled />
        </div>
        <div
          className="image"
          style={{ backgroundImage: `url(${listQA[rowFocus].questionImageUrl})` }}
        />
      </div>
    </div>
  );
}

export default Contents;
