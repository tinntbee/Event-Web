import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import EventEditor from "./EventEditor";
import EventViewDemo from "./EventViewDemo";
import axiosClient from "../../api/axiosClient";
import { useDispatch } from "react-redux";
import { snackBarActions } from "../../redux/actions/snackBarActions";
import { useHistory } from "react-router";

EventStudio.propTypes = {};

function EventStudio(props) {
  const [state, setState] = useState({
    data: {
      _id: "new",
      background: "",
      standee: "",
      name: "event-name",
      participant: "HCMUTE",
      dayBegin: "2021-10-24T10:30",
      dayEnd: "2021-10-24T10:30",
      link: "",
      description: "hello",
    },
    file: {
      background: {
        file: null,
        url: "",
      },
      standee: {
        file: null,
        url: "",
      },
    },
  });
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const { _id } = props.match.params;
    if (_id === "new") {
    } else {
      const url = "/event/detail/" + _id;
      axiosClient
        .get(url)
        .then((data) => {
          console.log({ data });
          setState({
            ...state,
            data: {
              ...state.data,
              _id: data._id,
              name: data.name,
              background: data.background,
              standee: data.standee,
              dayBegin: data.timeBegin.substring(0, 16),
              dayEnd: data.timeEnd.substring(0, 16),
              description: data.description,
            },
            file: {
              ...state.file,
              background: { ...state.file.background, url: data.background },
              standee: { ...state.file.standee, url: data.standee },
            },
          });

          console.log(state);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  const fetchPostAPI = async (background, standee) => {
    const data = {
      _id: state.data._id,
      name: state.data.name,
      description: state.data.description,
      standee: standee,
      beginTime: state.data.dayBegin + ":00.000Z",
      endTime: state.data.dayEnd + ":00.000Z",
      fanpage: "https://www.facebook.com/gdsc.hcmute",
      background: background,
    };
    console.log({ data });
    if (state.data._id === "new") {
      const url = "/event/create";
      axiosClient
        .post(url, data)
        .then((data) => {
          console.log(data);
          history.push("/game-studio/" + data.minigameId);
          dispatch(
            snackBarActions.open({
              message: "Lưu các thay đổi thành công",
              variant: "success",
            })
          );
        })
        .catch((e) => {
          console.log(e);
          dispatch(
            snackBarActions.open({
              message: "Something lỗi",
              variant: "error",
            })
          );
        });
    } else {
      const url = "/event/update/" + state.data._id;
      axiosClient
        .post(url, data)
        .then((data) => {
          console.log(data);
          history.push("/game-studio");
          dispatch(
            snackBarActions.open({
              message: "Lưu các thay đổi thành công",
              variant: "success",
            })
          );
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="event-studio">
      <div className="event-studio__title">
        <div
          className="event-studio-icon"
          style={{ backgroundImage: `url(${"/icons/event-studio.svg"})` }}
        ></div>
        <h1>event studio</h1>
      </div>
      <div className="event-studio__content">
        <EventEditor
          setStateParent={setState}
          state={state}
          fetchPostAPI={fetchPostAPI}
        />
        <EventViewDemo state={state} />
      </div>
    </div>
  );
}

export default EventStudio;
