"use client";

import {
  FacebookFilled,
  LinkedinFilled,
  MailOutlined,
  PhoneFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { PrimaryButton, PrimaryText, StyledRow } from "@styles/globals";
import { Divider, Layout, Row, Space } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Header } = Layout;

const Nav = () => {
  return (
    <Header
      style={{
        backgroundColor: "#eeeae4",
      }}
    >
      <StyledRow align={"middle"} justify={"space-between"}>
        <Space>
          <a
            href="https://www.facebook.com/profile.php?id=100066929614602"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookFilled style={{ fontSize: "20px", color: "#a37e34" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/amir-rafiq-khan-663a0850/?originalSubdomain=pk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinFilled style={{ fontSize: "20px", color: "#a37e34" }} />
          </a>
          <a
            href="https://wa.me/+923339853797"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppOutlined style={{ fontSize: "20px", color: "#a37e34" }} />
          </a>
        </Space>
        <Space size={20} direction="horizontal">
          <PhoneFilled style={{ fontSize: "20px", color: "#a9814a" }} />
          <PrimaryText style={{ color: "#a9814a" }}>03339853797</PrimaryText>
          <MailOutlined style={{ fontSize: "20px", color: "#a9814a" }} />
          <PrimaryText style={{ color: "#a9814a" }}>
            amirpukhtoon70@gmail.com
          </PrimaryText>
        </Space>
        <Divider
          style={{
            display: "inline-block",
            borderColor: "#a37e34",
            margin: 0,
            padding: 0,
          }}
        />
      </StyledRow>

      <Row
        tyle={{ backgroundColor: "#eeeae4" }}
        align={"middle"}
        justify={"space-between"}
      >
        <Image
          alt="ark logo"
          width={100}
          height={100}
          src={"/images/logo.png"}
          style={{ marginLeft: "2%" }}
        />
        <Link href={"#contact"} passHref>
          <PrimaryButton>FREE CONSULTATION</PrimaryButton>
        </Link>
      </Row>
    </Header>
  );
};

export default Nav;
