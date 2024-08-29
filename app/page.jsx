"use client";
import React from "react";
import { Layout, Typography, Row, Col, Image } from "antd";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import { PrimaryButton, PrimaryHeading, PrimaryText } from "@styles/globals";

const { Content } = Layout;
const { Text, Title } = Typography;

const Homepage = () => {
  return (
    <Content>
      <Content
        style={{
          height: "70vh",
          width: "100%",
          backgroundColor: "#e1d8cb",
        }}
      >
        <Row justify={"center"}>
          <Col style={{ marginRight: "5%", marginTop: "5%" }}>
            <Image
              alt="man writing"
              preview={false}
              width={600}
              height={390}
              src={"/images/writing.png"}
              style={{ borderRadius: "8px" }}
            />
          </Col>
          <Col style={{ marginTop: "5%" }}>
            <PrimaryHeading>ARK LEGAL SOLUTIONS</PrimaryHeading>
            <PrimaryText>
              Straightforward | Trustworthy Litigation | Know-How to win
            </PrimaryText>
            <PrimaryButton
              style={{
                marginTop: "15%",
                fontSize: "15px",
                padding: "25px 25px",
                background:
                  "linear-gradient(rgba(131, 102, 62) 0%, rgb(176, 150, 106) 100%)",
              }}
            >
              Contact Now →
            </PrimaryButton>
          </Col>
        </Row>
      </Content>
    </Content>
  );
};

export default Homepage;
