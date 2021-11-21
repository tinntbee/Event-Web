import { Button } from "@material-ui/core";
import styled from "styled-components";
import { __primary_color, __white_color } from "../../styles/values";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const IconGameStudio = styled.div`
  display: block;
  content: "";
  background-image: url("");
  height: 37px;
  width: 37px;
  min-width: 37px;
  background: ${__primary_color};
  border-radius: 10px;
  background-image: url("/icons/game-studio.svg");
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
`;

export const Title = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;

  & > h1 {
    width: fit-content;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    color: ${__primary_color};
    line-height: 37px;
  }
`;

export const Header = styled.div`
  height: 73px;
  min-height: 73px;
  width: 100%;
  background: ${__white_color};
  border-radius: 10px;
  box-shadow: 0px 3px 6px #888888;
  margin: 10px 0;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > div > h1 {
    width: fit-content;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    color: ${__primary_color};
    line-height: 30px;
  }
`;

export const CustomButton = styled(Button)`
  && {
    background: ${(props) => props.color && __primary_color};
    margin: 5px;
    color: ${(props) =>
      props.variant === "contained" ? __white_color : __primary_color};

    &:hover {
      background: ${(props) => props.color && __primary_color};
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    height: 5px;
    width: 5px;
    background: ${__primary_color};
    border-radius: 50%;
    margin: 0 10px;
  }

  & > span {
    font-size: 16px;
    color: ${__primary_color};
    font-weight: 600;
    opacity: 0.7;
    line-height: 17px;
  }
`;

export const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`