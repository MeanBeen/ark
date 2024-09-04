// import { Layout, Row, Col } from "antd";
// import {
//   PrimaryHeading,
//   PrimaryButton,
//   PrimaryInput,
//   PrimaryText,
//   StyledSelector,
//   StyledMessage,
// } from "@styles/globals";
// import { useState } from "react";
// import emailjs from "@emailjs/browser";

// const { Content } = Layout;

// const Contact = () => {
//   const handleChange = (value) => {
//     console.log(`selected ${value}`);
//   };
//   return (
//     // <Content
//     //   style={{
//     //     padding: "20px 80px",
//     //   }}
//     // >
//     //   <Row
//     //     align={"middle"}
//     //     justify={"space-evenly"}
//     //     style={{ minHeight: "50vh" }}
//     //   >
//     //     <Col>
//     //       <PrimaryHeading style={{ fontWeight: "normal" }}>
//     //         Free Consultation
//     //         <br />
//     //       </PrimaryHeading>
//     //       <PrimaryText
//     //         style={{ display: "block", width: "420px", fontSize: "20px" }}
//     //       >
//     //         Law is a complex matter that can lead to significant problems if
//     //         disregarded. Allow us to assist you!
//     //       </PrimaryText>
//     //     </Col>

//     //     <Col>
//     //       <Row align={"bottom"} gutter={[8, 8]} style={{ width: "70%" }}>
//     //         <Col span={12}>
//     //           <PrimaryInput size="middle" placeholder="First name*" />
//     //         </Col>
//     //         <Col span={12}>
//     //           <PrimaryInput size="middle" placeholder="Last name*" />
//     //         </Col>
//     //         <Col span={12}>
//     //           <PrimaryInput size="middle" placeholder="Email*" />
//     //         </Col>
//     //         <Col span={12}>
//     //           <PrimaryInput size="middle" placeholder="Phone*" />
//     //         </Col>
//     //       </Row>
//     //       <StyledSelector
//     //         defaultValue="Please Choose One Option"
//     //         onChange={handleChange}
//     //         options={[
//     //           {
//     //             value: "jack",
//     //             label: "Civil Law",
//     //           },
//     //           {
//     //             value: "lucy",
//     //             label: "Criminal Law",
//     //           },
//     //           {
//     //             value: "Yiminghe",
//     //             label: "CyberCrime Law",
//     //           },
//     //         ]}
//     //       />
//     //       <StyledMessage rows={4} placeholder="Message*" />
//     //       <PrimaryButton style={{ width: "69%", borderRadius: "0px" }}>
//     //         SUBMIT NOW
//     //       </PrimaryButton>
//     //     </Col>
//     //   </Row>
//     // </Content>

//   );
// };

// export default Contact;

import { Layout, Row, Col } from "antd";
import {
  PrimaryHeading,
  PrimaryButton,
  PrimaryInput,
  PrimaryText,
  StyledSelector,
  StyledMessage,
} from "@styles/globals";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const { Content } = Layout;

const Contact = () => {
  const [selectedService, setIsSelected] = useState();
  const handleChange = (value) => {
    setIsSelected(value);
  };

  const formRef = useRef(); // Use ref for the form

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        "service_geytxia", // Replace with your actual service ID
        "template_gk2emc5", // Replace with your actual template ID
        formRef.current,
        "uCFsvllmdFctNCYrL"
        // Reference to the form
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Content
      style={{
        padding: "20px 80px",
      }}
    >
      <Row
        align={"middle"}
        justify={"space-evenly"}
        style={{ minHeight: "50vh" }}
      >
        <Col>
          <PrimaryHeading style={{ fontWeight: "normal" }}>
            Free Consultation
            <br />
          </PrimaryHeading>
          <PrimaryText
            style={{ display: "block", width: "420px", fontSize: "20px" }}
          >
            Law is a complex matter that can lead to significant problems if
            disregarded. Allow us to assist you!
          </PrimaryText>
        </Col>

        <Col>
          <form ref={formRef}>
            <Row align={"bottom"} gutter={[8, 8]} style={{ width: "70%" }}>
              <Col span={12}>
                <PrimaryInput
                  name="from_name"
                  size="middle"
                  placeholder="First name*"
                />
              </Col>
              <Col span={12}>
                <PrimaryInput
                  name="last_name"
                  size="middle"
                  placeholder="Last name*"
                />
              </Col>
              <Col span={12}>
                <PrimaryInput
                  name="user_email"
                  size="middle"
                  placeholder="Email*"
                />
              </Col>
              <Col span={12}>
                <PrimaryInput name="phone" size="middle" placeholder="Phone*" />
              </Col>
            </Row>
            <StyledSelector
              defaultValue="Please Choose One Option"
              onChange={handleChange}
              name="service_type"
              options={[
                {
                  value: "civil_law",
                  label: "Civil Law",
                },
                {
                  value: "criminal_law",
                  label: "Criminal Law",
                },
                {
                  value: "cybercrime_law",
                  label: "CyberCrime Law",
                },
              ]}
              required
            />
            <input type="hidden" name="service_type" value={selectedService} />
            <StyledMessage name="message" rows={4} placeholder="Message*" />
            <PrimaryButton
              type="submit"
              onClick={sendEmail}
              style={{ width: "69%", borderRadius: "0px" }}
            >
              SUBMIT NOW
            </PrimaryButton>
          </form>
        </Col>
      </Row>
    </Content>
  );
};

export default Contact;
