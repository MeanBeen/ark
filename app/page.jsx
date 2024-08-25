"use client";
import React from "react";
import { Layout, Typography, Row, Col, Image } from "antd";
import { NodeNextRequest } from "next/dist/server/base-http/node";

const { Content } = Layout;
const { Text, Title } = Typography;

const Homepage = () => {
  return (
    <Content>
      <Content
        style={{
          height: "50vh",
          width: "100%",
          backgroundColor: "#e1d8cb",
        }}
      >
        <Row justify={"center"}>
          <Col style={{ marginRight: "5%", marginTop: "5%" }}>
            <Image
              alt="man writing"
              preview={false}
              width={500}
              height={300}
              src={"/images/writing.png"}
              style={{ borderRadius: "5px" }}
            />
          </Col>
          <Col style={{ marginTop: "5%" }}>
            <Title level={2}>ARK LEGAL SOLUTIONS</Title>
            <Text>
              Straightforward I Trustworthy Litigation Know-how to win
            </Text>
          </Col>
        </Row>
      </Content>
    </Content>
  );
};

export default Homepage;
