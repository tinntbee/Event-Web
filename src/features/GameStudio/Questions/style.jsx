import { Button } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import {
  __box_shadow_036,
  __white_color,
  __primary_color,
} from "../../../styles/values";

const popup = keyframes`
  from {
    top: 60%;
    opacity: 1;
  }

  to {
    top: 50%;
    opacity: 1;
  }
`;

export const Questions = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.p`
  height: 50px;
  width: 120px;
  background: ${__white_color};
  box-shadow: ${__box_shadow_036};
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 50px;
`;

export const Body = styled.div`
  width: 120px;
  background: ${__white_color};
  box-shadow: ${__box_shadow_036};
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  position: relative;
  width: 100%;

  &:hover {
    & > div {
      top: 50%;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const CustomButton = styled(Button)`
  && {
    width: calc(100% - 10px);
    height: 42px;
    background: ${(props) => props.color && __primary_color};
    margin: 5px;
    color: ${(props) =>
      props.variant === "contained" ? __white_color : __primary_color};

    &:hover {
      background: ${(props) => props.color && __primary_color};
    }
  }
`;

export const AddButton = styled(CustomButton)`
  && {
    background-image: url("icons/add_circle_outline.svg");
    background-position: center;
    background-repeat: no-repeat;
    height: 30px;
  }
`;

export const MoveUpButton = styled(AddButton)`
  && {
    background-image: url("icons/ic_arrow_upward_18_fill.svg");
    box-sizing: border-box;
    max-width: 34px;
    max-height: 34px;
    min-width: 34px;
    min-height: 34px;
  }
`;

export const MoveDownButton = styled(MoveUpButton)`
  && {
    background-image: url("icons/ic_arrow_downward_18_fill.svg");
  }
`;

export const AddNewUpButton = styled(MoveUpButton)`
  && {
    background-image: url("icons/ic_add_circle_outline_18_fill.svg");
  }
`;

export const RemoveButton = styled(MoveUpButton)`
  && {
    background-image: url("icons/ic_remove_circle_outline_18_fill.svg");
  }
`;

export const ActionQuestionButton = styled.div`
  position: absolute;
  background: ${__white_color};
  border-radius: 10px;
  box-shadow: ${__box_shadow_036};
  top: 60%;
  transform: translateY(-50%);
  left: calc(100% + 5px);
  opacity: 0;
  transition: all 0.2s linear;
  animation: ${popup} 0.2s linear;
  visibility: hidden;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 10px solid ${__white_color};
    border-bottom: 5px solid transparent;
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
