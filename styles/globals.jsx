"use client";
import styled, { createGlobalStyle } from "styled-components";
import { Button, Typography } from "antd";

const { Text, Title } = Typography;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lora', sans-serif;
   
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
`;
export { GlobalStyle, PrimaryButton, PrimaryHeading, PrimaryText };

// font family and primary button primary color = #e1d8cb
