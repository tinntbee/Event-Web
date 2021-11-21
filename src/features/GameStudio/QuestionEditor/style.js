import styled from "styled-components";
import {
  __box_shadow_036,
  __primary_color,
  __primary_color_20,
  __primary_color_50,
  __white_color,
} from "../../../styles/values";

export const QuestionEditorContainer = styled.div`
  flex-grow: 1;
  height: fit-content;
  max-width: 500px;
  margin-left: auto;
  margin-right: 0;
  margin-top: 60px;
  border-radius: 10px;
  box-shadow: ${__box_shadow_036};
`;

export const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  background: ${__primary_color};
  padding: 0 10px;
  color: ${__white_color};
`;

export const Body = styled.div`
  border-radius: 0 0 10px 10px;
  background: ${__white_color};
  padding: 10px;
`;

export const Content = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;

  & > textarea {
    width: 100%;
    height: 100%;
    resize: none;
    outline: none;
    border: 2px solid ${__primary_color_20};
    border-radius: 10px;
    font-size: 20px;
    padding: 5px;

    &:focus {
      border-color: ${__primary_color_50};
    }
  }
`;

export const ImportFile = styled.div`
  width: 100%;
  height: 200px;
  padding: 20px;
  background-image: url("icons/add-new-file.svg");
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    background-image: url(${(props) => props.questionImageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
  }

  & > input {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
  }
`;
