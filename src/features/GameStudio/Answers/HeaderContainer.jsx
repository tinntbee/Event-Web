import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Header } from "./style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  changeColumnKey,
  modifyGridColumns,
} from "../../../redux/actions/miniGame";

HeaderContainer.propTypes = {};

function HeaderContainer(props) {
  const grid = useSelector((state) => state.miniGame.miniGame.grid);
  const columnRef = useRef();
  const keyRef = useRef();
  const columnKey = useSelector((state) => state.miniGame.miniGame.columnKey);
  const dispatch = useDispatch();
  const handleColumnOnChange = (e) => {
    if (e.target.value) {
      dispatch(modifyGridColumns({ columns: e.target.value }));
    }
  };
  const handleKeyChange = (e) => {
    if (e.target.value) {
      dispatch(changeColumnKey(e.target.value));
    }
  };
  const handleColumnClick = () => {
    columnRef.current.select();
  };
  const handleKeyClick = () => {
    keyRef.current.select();
  };
  return (
    <Header>
      <p>Grid:</p>
      <input type="number" min="1" max="15" value={grid.rows} disabled />
      <p>x</p>
      <input
        ref={columnRef}
        type="number"
        min="1"
        max="15"
        value={grid.columns}
        onChange={handleColumnOnChange}
        onClick={handleColumnClick}
      />
      <p>| Key: </p>
      <input
        ref={keyRef}
        type="number"
        min="0"
        max={grid.columns - 1}
        value={columnKey}
        onChange={handleKeyChange}
        onClick={handleKeyClick}
      />
    </Header>
  );
}

export default HeaderContainer;
