"use client";

import { PrimaryButton } from "@styles/globals";
import { Layout, Row, Button } from "antd";
import Image from "next/image";

const { Content } = Layout;

const Nav = () => {
  return (
    <Content style={{ width: "100%" }}>
      <Row
        align={"middle"}
        justify={"space-between"}
        style={{ backgroundColor: "#e1d8cb" }}
      >
        <Image
          alt="ark logo"
          width={100}
          height={100}
          src={"/images/logob.png"}
          style={{ marginLeft: "2%" }}
        />
        <PrimaryButton>FREE CONSULTATION</PrimaryButton>
      </Row>
    </Content>
  );
};

export default Nav;
