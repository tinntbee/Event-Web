import React from "react";
import PropTypes from "prop-types";
import { Header } from "./style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeColumnKey, modifyGridColumns } from "../../../redux/actions/miniGame";

HeaderContainer.propTypes = {};

function HeaderContainer(props) {
  const grid = useSelector((state) => state.miniGame.miniGame.grid);
  const columnKey = useSelector((state) => state.miniGame.miniGame.columnKey);
  const dispatch = useDispatch();
  const handleColumnOnChange = (e) => {
    dispatch(modifyGridColumns({ columns: e.target.value }));
  };
  const handleKeyChange = (e) => {
    dispatch(changeColumnKey(e.target.value))
  };
  return (
    <Header>
      <p>Grid:</p>
      <input type="number" min="1" max="15" value={grid.rows} disabled />
      <p>x</p>
      <input
        type="number"
        min="1"
        max="15"
        value={grid.columns}
        onChange={handleColumnOnChange}
      />
      <p>| Key: </p>
      <input
        type="number"
        min="1"
        max="15"
        value={columnKey}
        onChange={handleKeyChange}
      />
    </Header>
  );
}

export default HeaderContainer;
