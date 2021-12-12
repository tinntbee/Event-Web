import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { storage } from "../../../services/firebase";
import "./style.scss";
import GroupFileInput from "../../../components/GroupFileInput";
import PartUpLoadFile from "./PartUpLoadFile";
import PartDescription from "./PartDescription";
import PartMiniGame from "./PartMiniGame";
import axiosClient from "../../../api/axiosClient";

EventEditor.propTypes = {};

function EventEditor(props) {
  const { state, setStateParent, fetchPostAPI, setLoading } = props;
  const submitFormRef = useRef();
  const [part, setPart] = useState(0);
  const handleNextClick = () => {
    setPart(part - 1);
  };
  const handleSubmitForm = () => {
    submitFormRef.current.click();
  };
  const handlePreviousClick = () => {
    setPart(part + 1);
  };

  const uploadTaskPromise = async (path, file) => {
    return new Promise(function (resolve, reject) {
      const storageRef = storage.ref(path);
      const uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        function (snapshot) {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        function error(err) {
          console.log("error", err);
          reject();
        },
        function complete() {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  useEffect(() => {
    setStateParent({
      ...state,
      data: { ...state.data, background: "hello" },
    });
    console.log({ before: state });
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    let background = undefined;
    let standee = undefined;
    if (state.data.name) {
      if (state.file.background.file) {
        //upload background
        background = await uploadTaskPromise(
          `events/backgrounds/${state.data.name + "." + Date.now()}`,
          state.file.background.file
        );
      }

      if (state.file.standee.file) {
        //upload standee
        standee = await uploadTaskPromise(
          `events/standees/${state.data.name + "." + Date.now()}`,
          state.file.standee.file
        );
      }

      if (!background) {
        background = state.data.background;
      }
      if (!standee) {
        standee = state.data.standee;
      }
      setLoading(false);
      await fetchPostAPI(background, standee);
    }
  };

  const renderActionButton = () => {
    switch (part) {
      case -1:
        return (
          <>
            <button className="btn" onClick={handlePreviousClick}>
              Phía trước
            </button>
            <button className="btn" onClick={handleSubmitForm}>
              Tiếp theo
            </button>
          </>
        );

      case -2:
        return (
          <>
            <button className="btn" onClick={handlePreviousClick}>
              Phía trước
            </button>
            <button className="btn" onClick={handleSubmit}>
              Lưu và chuyển đển Game Studio
            </button>
          </>
        );

      default:
        return (
          <button className="btn" onClick={handleNextClick}>
            Tiếp theo
          </button>
        );
    }
  };

  const handleEventNameOnChange = (e) => {
    setStateParent({
      ...state,
      data: { ...state.data, name: e.target.value },
    });
  };

  return (
    <div className="event-editor">
      <div className="event-editor__title">
        <input
          type="text"
          placeholder="Event's name"
          onChange={handleEventNameOnChange}
          value={state.data.name}
        />
      </div>
      <div className="event-editor__content">
        <div
          className="progress"
          style={{ "--value": ((1 - part) / 3) * 100 + "%" }}
        >
          <p>{part === 0 ? <b>1. Tải lên file</b> : "1. Tải lên file"}</p>
          <p>
            {part === -1 ? (
              <b>2. Thông tin chi tiết</b>
            ) : (
              "2. Thông tin chi tiết"
            )}
          </p>
          <p>{part === -2 ? <b>3. Thêm Minigame</b> : "3. Thêm Minigame"}</p>
        </div>
        <div className="main-content">
          <div className="editor-content" style={{ "--position": part }}>
            <PartUpLoadFile setStateParent={setStateParent} state={state} />
            <PartDescription
              submitFormRef={submitFormRef}
              setStateParent={setStateParent}
              state={state}
              handleNextClick={handleNextClick}
            />
            <PartMiniGame />
          </div>
        </div>
        <div className="control-footer">{renderActionButton()}</div>
      </div>
    </div>
  );
}

export default EventEditor;
