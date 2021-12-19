import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import EventEditor from "./EventEditor";
import EventViewDemo from "./EventViewDemo";
import axiosClient from "../../api/axiosClient";
import { useDispatch } from "react-redux";
import { snackBarActions } from "../../redux/actions/snackBarActions";
import { useHistory } from "react-router";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { _id } = props.match.params;
    if (_id === "new") {
    } else {
      setLoading(true);
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
              fanpage: data.link,
            },
            file: {
              ...state.file,
              background: { ...state.file.background, url: data.background },
              standee: { ...state.file.standee, url: data.standee },
            },
          });
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          dispatch(
            snackBarActions.open({
              message: "Có lỗi sảy ra :(",
              variant: "error",
            })
          );
        });
    }
  }, []);

  const fetchPostAPI = async (background, standee) => {
    setLoading(true);
    const data = {
      _id: state.data._id,
      name: state.data.name,
      description: state.data.description,
      standee: standee,
      timeBegin: state.data.dayBegin + ":00.001Z",
      timeEnd: state.data.dayEnd + ":00.001Z",
      fanpage: state.data.fanpage,
      background: background,
    };
    console.log({ data });
    if (state.data._id === "new") {
      const url = "/event/create";
      axiosClient
        .post(url, data)
        .then((data) => {
          setLoading(false);
          dispatch(
            snackBarActions.open({
              message: "Lưu các thay đổi thành công",
              variant: "success",
            })
          );
          history.push("/game-studio/" + data.minigameId);
        })
        .catch((e) => {
          setLoading(false);
          dispatch(
            snackBarActions.open({
              message: "Có lỗi sảy ra :(",
              variant: "error",
            })
          );
        });
    } else {
      const url = "/event/update/" + state.data._id;
      axiosClient
        .post(url, data)
        .then((data) => {
          setLoading(false);
          dispatch(
            snackBarActions.open({
              message: "Lưu các thay đổi thành công",
              variant: "success",
            })
          );
          history.push("/game-studio/" + data.minigameId);
        })
        .catch((e) => {
          setLoading(false);
          dispatch(
            snackBarActions.open({
              message: "Có lỗi sảy ra :(",
              variant: "error",
            })
          );
        });
    }
  };

  return (
    <div className="event-studio">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
          setLoading={setLoading}
        />
        <EventViewDemo state={state} />
      </div>
    </div>
  );
}

export default EventStudio;
