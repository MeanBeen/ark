"use client";
import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import Image from "next/image";
import { PrimaryText } from "@styles/globals";
import {
  ClockCircleOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  PushpinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title } = Typography;

const Foot = () => {
  return (
    <Footer style={{ backgroundColor: "#1a1a1a" }}>
      <Row justify={"space-evenly"}>
        <Col>
          <Image width={100} height={100} alt="logo" src={"/images/logo.png"} />
        </Col>
        <Col style={{ width: "350px" }}>
          <Title style={{ color: "white" }} level={3}>
            Conatct Info
          </Title>
          <Space direction="vertical">
            <PrimaryText style={{ color: "#a37e34" }}>
              <PhoneOutlined style={{ marginRight: "3%" }} />
              03339853797
            </PrimaryText>
            <PrimaryText style={{ color: "#a37e34" }}>
              <MailOutlined style={{ marginRight: "3%" }} />
              amirpukhtoon70@gmail.com
            </PrimaryText>
            <PrimaryText style={{ color: "#a37e34" }}>
              <ClockCircleOutlined style={{ marginRight: "3%" }} /> Mon - Fri
              9.00-2.00
            </PrimaryText>
            <PrimaryText style={{ color: "#a37e34" }}>
              <PushpinOutlined style={{ marginRight: "3%" }} /> Off # 1,Ground
              Floor,Yousaf Ali Shah Shaheed block,District & Session Courts
              Mardan.
            </PrimaryText>
          </Space>
        </Col>
        <Col>
          <Title style={{ color: "white" }} level={3}>
            Socials
          </Title>
          <Space>
            <a
              href="https://www.facebook.com/profile.php?id=100066929614602"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined
                style={{ fontSize: "25px", color: "#a37e34" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/amir-rafiq-khan-663a0850/?originalSubdomain=pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined
                style={{ fontSize: "25px", color: "#a37e34" }}
              />
            </a>
            <a
              href="https://wa.me/+923339853797"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppOutlined
                style={{ fontSize: "25px", color: "#a37e34" }}
              />
            </a>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default Foot;
