import { Button, Fab, InputBase } from "@material-ui/core";
import styled from "styled-components";
import {
  __primary_color,
  __primary_color_20,
  __white_color,
  __primary_color_10,
  __box_shadow_016,
  __error_color,
  __primary_color_50,
  __box_shadow_026,
} from "../../../styles/values";

export const AnswersContainer = styled.div`
  height: fit-content;
  width: fit-content;
  margin-left: 60px;
  margin-right: 20px;
`;

export const AnswerBox = styled.div`
  height: 42px;
  width: 42px;
  margin: 5px;
  position: relative;
  border-radius: 10px;
  background: ${(props) =>
    props.disabled ? __primary_color_10 : __white_color};
  box-shadow: ${(props) => (props.isFocus && !props.disabled ? __box_shadow_016 : !props.disabled ? __box_shadow_016 : "unset")};
  transition: all 0.2s linear;
  display: inline-block;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.isFocus && !props.disabled ? __primary_color : __primary_color_10)};

  &:focus-within::before {
    background-size: 100% 100%;
  }

  &::before {
    display: ${(props) => (props.isFocus && !props.disabled ? "block" : "none")};
    position: absolute;
    content: "";
    height: 2px;
    width: 20px;
    background: ${__primary_color_20};
    background-image: linear-gradient(${__primary_color}, ${__primary_color});
    background-size: 0% 100%;
    background-position: center;
    background-repeat: no-repeat;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    transition: all 0.1s linear;
  }
`;

export const Answer = styled.input`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  text-align: center;
  border: none;
  outline: none;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => (props.disabled ? __primary_color_10 : __primary_color)};
  cursor: pointer;
`;

export const AnswersRowContainer = styled.div`
`;

export const RemoveButton = styled(Fab)`
  && {
    min-height: 20px;
    min-width: 20px;
    max-height: 20px;
    max-width: 20px;
    border-radius: 50%;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    opacity: 0;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  height: 50px;
  width: 250px;
  background: ${__white_color};
  box-shadow: ${__box_shadow_016};
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  color: ${__primary_color};

  & > input {
    height: 32px;
    width: 32px;
    border-radius: 10px;
    background: ${__primary_color_20};
    outline: none;
    border: 1px solid ${__primary_color_20};
    transition: border 0.2s linear;
    color: ${__primary_color};
    text-align: center;
    font-weight: 600;

    &:focus {
      outline: none;
      border-color: ${__primary_color};
    }

    &:disabled {
      color: ${__primary_color_50};
    }

    &[type="input"] {
      -moz-appearance: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
