import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { storage } from "../../../services/firebase";
import "./style.scss";
import GroupFileInput from "../../../components/GroupFileInput";
import PartUpLoadFile from "./PartUpLoadFile";
import PartDescription from "./PartDescription";
import PartMiniGame from "./PartMiniGame";

EventEditor.propTypes = {};

function EventEditor(props) {
  const submitFormRef = useRef();
  const [data, setData] = useState({ name: "", background: "", standee: "" });
  const [state, setState] = useState({
    data: {
      background:
        "https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/257531046_3108924536004680_2313253056931116257_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=gzZRSlPJDWEAX_BQdA5&_nc_ht=scontent.fvca1-3.fna&oh=b68aa1081a8bd0780daa1c29801c1db1&oe=61A50C2C",
      standee:
        "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/257464339_3109708449259622_2410193694200403801_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=WXUGwhTu01MAX-NKfJN&tn=j7LpXkDUmE8O4tks&_nc_ht=scontent.fvca1-4.fna&oh=9b37e6213e7086ee6e5aeb72135cf73c&oe=61A6AFB1",
      name: "event-name",
      participant: "HCMUTE",
      dayBegin: "2021-10-24T10:30",
      dayEnd: "2021-10-24T10:30",
      link: "",
      description: "hello",
    },
    part: 0,
  });
  const handleNextClick = () => {
    setState({ ...state, part: state.part - 1 });
  };
  const handleSubmitForm = () => {
    submitFormRef.current.click();
  };
  const handleFormSubmit = (values) => {
    setState({
      ...state,
      part: state.part - 1,
      data: { ...state.data, ...values },
    });
    setData({ ...data, ...values });
  };
  const handlePreviousClick = () => {
    setState({ ...state, part: state.part + 1 });
  };

  const handleSubmit = async () => {
    async function uploadTaskPromise(path, file) {
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
            uploadTask.snapshot.ref
              .getDownloadURL()
              .then(function (downloadURL) {
                resolve(downloadURL);
              });
          }
        );
      });
    }

    //upload background
    const backgroundUrl = await uploadTaskPromise(
      `events/backgrounds/${
        data.name + "." + state.data.backgroundFile.name.split(".").pop()
      }`,
      state.data.backgroundFile
    );
    setData({ ...data, background: backgroundUrl });

    //upload standee
    const standeeUrl = await uploadTaskPromise(
      `events/standees/${
        data.name + "." + state.data.standeeFile.name.split(".").pop()
      }`,
      state.data.standeeFile
    );
    setData({ ...data, standee: standeeUrl });

    alert(JSON.stringify(data, null, 2));
  };

  const handleBackgroundOnChange = (file) => {
    console.log({ file });
    setState({
      ...state,
      data: {
        ...state.data,
        backgroundFile: file.file,
        background: file.url,
      },
    });
  };

  const handleStandeeOnChange = (file) => {
    setState({
      ...state,
      data: { ...state.data, standeeFile: file.file, standee: file.url },
    });
  };

  const renderActionButton = () => {
    switch (state.part) {
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
    setData({ ...data, name: e.target.value });
    setState({ ...state, data: { ...state.data, name: e.target.value } });
  };

  const handleUpdateDescription = (model) => {
    setState({ ...state, data: { ...state.data, description: model } });
  };

  useEffect(() => {
    props.setStateParent({ ...state.data });
  }, [state]);

  return (
    <div className="event-editor">
      <div className="event-editor__title">
        <input
          type="text"
          placeholder="Event's name"
          onChange={handleEventNameOnChange}
          value={data.name}
        />
      </div>
      <div className="event-editor__content">
        <div
          className="progress"
          style={{ "--value": ((1 - state.part) / 3) * 100 + "%" }}
        >
          <p>{state.part === 0 ? <b>1. Tải lên file</b> : "1. Tải lên file"}</p>
          <p>
            {state.part === -1 ? (
              <b>2. Thông tin chi tiết</b>
            ) : (
              "2. Thông tin chi tiết"
            )}
          </p>
          <p>
            {state.part === -2 ? <b>3. Thêm Minigame</b> : "3. Thêm Minigame"}
          </p>
        </div>
        <div className="main-content">
          <div className="editor-content" style={{ "--position": state.part }}>
            <PartUpLoadFile
              data={state.data}
              handleBackgroundOnChange={handleBackgroundOnChange}
              handleStandeeOnChange={handleStandeeOnChange}
            />
            <PartDescription
              submitFormRef={submitFormRef}
              handleFormSubmit={handleFormSubmit}
              handleUpdateDescription={handleUpdateDescription}
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
