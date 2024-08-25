"use client";

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
        <Button
          style={{
            color: "white",
            letterSpacing: 0.9,
            fontSize: "12px",
            fontWeight: 500,
            backgroundColor: "#ab9169",
            padding: "20px 20px",
            marginRight: "5%",
          }}
        >
          FREE CONSULTATION
        </Button>
      </Row>
    </Content>
  );
};

export default Nav;
