import { Button } from "@material-ui/core";
import styled from "styled-components";
import { __primary_color, __white_color } from "../../../styles/values";

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