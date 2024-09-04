"use client";

import { Layout, Row, Col, Image } from "antd";

import {
  PrimaryButton,
  PrimaryHeading,
  PrimaryText,
  StyledImage,
} from "@styles/globals";
import Contact from "../Containers/contact/Contact";

const { Content } = Layout;

const Homepage = () => {
  return (
    <Content>
      <Content
        style={{
          overflow: "hidden",
          width: "100%",
          backgroundColor: "#eeeae4",
          minHeight: "60vh",
        }}
      >
        <Row justify={"center"}>
          <Col style={{ marginRight: "5%", marginTop: "7%" }}>
            <StyledImage
              alt="man writing"
              preview={false}
              width={600}
              height={390}
              src={"/images/writing.png"}
              style={{ borderRadius: "8px" }}
            />
          </Col>
          <Col style={{ marginTop: "7%" }}>
            <PrimaryHeading className="effect">
              ARK LEGAL SOLUTIONS
            </PrimaryHeading>
            <PrimaryText className="ease">
              Straightforward | Trustworthy Litigation | Know-How to win
            </PrimaryText>
            <a
              href="https://wa.me/+923339853797"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryButton
                className="easeb"
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
            </a>
          </Col>
        </Row>
      </Content>
      <Content
        style={{
          padding: "20px 80px",
          minHeight: "50vh",
        }}
      >
        <Row
          // style={{ height: "350px" }}
          style={{
            minHeight: "50vh",
          }}
          align={"middle"}
          justify={"space-evenly"}
        >
          <Col style={{ width: "300px" }}>
            <Image
              width={80}
              height={70}
              src="/images/L1.png"
              alt=""
              preview={false}
            />
            <PrimaryHeading style={{ fontSize: "18px", letterSpacing: 1.2 }}>
              LAW FIRM
            </PrimaryHeading>
            <PrimaryText style={{ fontSize: "17px", lineHeight: 1.7 }}>
              As your attorney I will act as both legal advisor and advocate,
              guiding individuals and businesses through intricate legal
              processes.
            </PrimaryText>
          </Col>
          <Col style={{ width: "300px" }}>
            <Image
              width={79}
              height={70}
              src="/images/L2.png"
              alt=""
              preview={false}
            />
            <PrimaryHeading style={{ fontSize: "18px", letterSpacing: 1.2 }}>
              CONFIDENTIAL
            </PrimaryHeading>
            <PrimaryText style={{ fontSize: "17px", lineHeight: 1.7 }}>
              Your information is held in strict confidence with us.We
              prioritize safeguarding your sensitive data.Rest assured, your
              case details remain private.
            </PrimaryText>
          </Col>
          <Col style={{ width: "300px" }}>
            <Image
              width={79}
              height={70}
              src="/images/L3.png"
              alt=""
              preview={false}
            />
            <PrimaryHeading style={{ fontSize: "18px", letterSpacing: 1.2 }}>
              LEGAL PROTECTION
            </PrimaryHeading>
            <PrimaryText style={{ fontSize: "17px", lineHeight: 1.7 }}>
              We provide robust legal protection for our clients.Your rights and
              interests are our top priority.Rest assured for safeguarding your
              legal rights.
            </PrimaryText>
          </Col>
        </Row>
      </Content>
      <Content
        style={{
          backgroundColor: "#eeeae4",
          padding: "20px 80px",
          minHeight: "50vh",
        }}
      >
        <Row justify={"center"}>
          <PrimaryHeading style={{ fontWeight: "normal" }}>
            Legal Practice Areas
          </PrimaryHeading>
        </Row>
        <Row
          style={{ marginTop: "3%" }}
          align={"bottom"}
          justify={"space-evenly"}
        >
          <Col style={{ width: "300px" }}>
            <Image
              alt=""
              src="/images/real.png"
              width={"300px"}
              height={"190px"}
              preview={false}
              style={{ borderRadius: "5px" }}
            />
            <PrimaryText
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                letterSpacing: 1,
              }}
            >
              CIVIL LAW
              <br />
            </PrimaryText>
            <PrimaryText style={{ color: "#a9814a", fontSize: "12px" }}>
              LEARN MORE →
            </PrimaryText>
          </Col>
          <Col style={{ width: "300px" }}>
            <Image
              alt=""
              src="/images/criminal.png"
              width={"300px"}
              height={"190px"}
              preview={false}
              style={{ borderRadius: "5px" }}
            />
            <PrimaryText
              style={{ fontSize: "15px", fontWeight: "bold", letterSpacing: 1 }}
            >
              CRIMINAL LAW <br />
            </PrimaryText>
            <PrimaryText style={{ color: "#a9814a", fontSize: "12px" }}>
              LEARN MORE →
            </PrimaryText>
          </Col>
          <Col style={{ width: "300px" }}>
            <Image
              alt=""
              src="/images/cyber.png"
              width={"300px"}
              height={"190px"}
              preview={false}
              style={{ borderRadius: "5px" }}
            />
            <PrimaryText
              style={{ fontSize: "15px", fontWeight: "bold", letterSpacing: 1 }}
            >
              CYBER CRIME <br />
            </PrimaryText>
            <PrimaryText style={{ color: "#a9814a", fontSize: "12px" }}>
              LEARN MORE →
            </PrimaryText>
          </Col>
        </Row>
      </Content>
      <Contact />
    </Content>
  );
};

export default Homepage;
