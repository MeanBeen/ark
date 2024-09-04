"use client";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Button, Input, Select, Typography, Image } from "antd";

const { Text, Title } = Typography;
const { TextArea } = Input;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lora', sans-serif;
   
  }
`;

const easeInBottom = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const PrimaryButton = styled(Button)`
  color: white;
  letter-spacing: 0.9px;

  font-size: 12px;
  font-weight: 500;
  background-color: #ab9169;
  padding: 20px 20px;
  margin-right: 5%;
  &:where(.css-dev-only-do-not-override-1gwfwyx).ant-btn-default:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: white;
    border-color: #ab9169;
    background: #a37e34;
  }
  &.easeb {
    animation: ${easeInBottom} 1s ease-in-out forwards;
  }
`;

const easeInTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const PrimaryHeading = styled(Title)`
  &:where(.css-dev-only-do-not-override-1gwfwyx).ant-typography,
  div:where(.css-dev-only-do-not-override-1gwfwyx).ant-typography-h1,
  div:where(.css-dev-only-do-not-override-1gwfwyx).ant-typography-h1 > textarea,
  :where(.css-dev-only-do-not-override-1gwfwyx).ant-typography h1 {
    font-size: 50px;
    font-family: "Lora";
    color: rgb(55, 45, 31);
  }
  &.effect {
    animation: ${easeInTop} 1s ease-in-out forwards;
  }
`;

const easeIn = keyframes`
  0% {
    
    opacity: 0;
  }
  100% {
    
    opacity: 1;
  }
`;

const PrimaryText = styled(Text)`
  font-family: Jost;

  color: rgb(61, 53, 43);
  text-decoration: none;
  white-space: normal;

  min-height: 0px;
  min-width: 0px;
  max-height: none;
  max-width: none;
  text-align: left;
  line-height: 29px;
  letter-spacing: 0px;
  font-weight: 400;
  font-size: 22px;
  backdrop-filter: none;
  filter: none;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(0px, 0px);
  visibility: visible;
  &.ease {
    animation: ${easeIn} 2s ease-in-out forwards;
  }
`;

const PrimaryInput = styled(Input)`
  &:where(.css-dev-only-do-not-override-1gwfwyx).ant-input-outlined {
    background: #eeeae4;
    border-width: 0px;
    border-style: solid;
    border-color: #d9d9d9;
    padding: 18px 12px;
    font-size: 16px;
    line-height: 1.5;
    border-radius: 0px;
    width: 100%;
  }
`;

const StyledSelector = styled(Select)`
  &:where(.css-dev-only-do-not-override-1gwfwyx).ant-select-outlined:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    border-radius: 0;
    background: #eeeae4;

    padding: 30px 12px;
  }
  margin-top: 10px;

  width: 69%;
`;

const StyledMessage = styled(TextArea)`
  &:where(.css-dev-only-do-not-override-1gwfwyx).ant-input-outlined {
    background: #eeeae4;
    border-radius: 0;
  }
  margin-top: 30px;
  width: 69%;
`;

const easeInLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledImage = styled(Image)`
  animation: ${easeInLeft} 1s ease-in-out forwards;
  border-radius: 8px;
`;

export {
  GlobalStyle,
  PrimaryButton,
  PrimaryHeading,
  PrimaryText,
  PrimaryInput,
  StyledSelector,
  StyledMessage,
  StyledImage,
};

// font family and primary button primary color = #e1d8cb
