import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  changeQuestionContent,
  changeQuestionImageUrl,
} from "../../../redux/actions/miniGame";
import { storage } from "../../../services/firebase";
import {
  Content,
  Header,
  QuestionEditorContainer,
  Body,
  ImportFile,
} from "./style";

QuestionEditor.propTypes = {};

function QuestionEditor(props) {
  const rowFocus = useSelector((state) => state.miniGame.miniGame.rowFocus);
  const dispatch = useDispatch();
  const contentQA = useSelector(
    (state) => state.miniGame.miniGame.listQA[rowFocus]
  );
  const handleOnChange = (e) => {
    const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (acceptedImageTypes.includes(e.target.files[0].type)) {
      const uploadTask = storage
        .ref(`imageQuestions/demo_question_${rowFocus}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("imageQuestions")
            .child(`demo_question_${rowFocus}`)
            .getDownloadURL()
            .then((url) => {
              dispatch(changeQuestionImageUrl(url));
            });
        }
      );
    }
  };

  const handleContentOnChange = (e) => {
    dispatch(changeQuestionContent(e.target.value));
  };

  return (
    <>
      {rowFocus !== -1 && (
        <QuestionEditorContainer>
          <Header>
            <p>
              <b>Suggestions for question {rowFocus + 1} </b>
            </p>
            <p>{contentQA.aEnd - contentQA.aBegin + 1} chữ cái</p>
          </Header>
          <Body>
            <Content>
              <textarea
                value={contentQA.questionContent}
                onChange={handleContentOnChange}
              />
            </Content>
            <ImportFile questionImageUrl={contentQA.questionImageUrl}>
              <input type="file" onChange={handleOnChange} />
            </ImportFile>
          </Body>
        </QuestionEditorContainer>
      )}
    </>
  );
}

export default QuestionEditor;
