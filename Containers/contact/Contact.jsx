import { Layout, Row, Col, Alert } from "antd";
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
  const [alertVisible, setAlertVisible] = useState(false); // State for managing alert visibility
  const [alertMessage, setAlertMessage] = useState(""); // State for managing alert message
  const [alertType, setAlertType] = useState(""); // State for managing alert type (success or error)

  const [selectedService, setIsSelected] = useState();
  const handleChange = (value) => {
    setIsSelected(value);
  };

  const formRef = useRef(); // Use ref for the form

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        "service_atye1fd", // Replace with your actual service ID
        "template_w3x6bhs", // Replace with your actual template ID
        formRef.current,
        "AB3k61oF9v947YbKN"
        // Reference to the form
      )
      .then(
        () => {
          setAlertMessage("Message sent successfully!");
          setAlertType("success");
          setAlertVisible(true);
        },
        (error) => {
          setAlertMessage(`Failed to send message: ${error.text}`);
          setAlertType("error");
          setAlertVisible(true);
        }
      );
  };

  return (
    <Content
      id="contact"
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
          {alertVisible && (
            <Alert
              message={alertMessage}
              type={alertType}
              showIcon
              closable
              afterClose={() => setAlertVisible(false)}
              style={{ marginTop: "20px" }}
            />
          )}
        </Col>
      </Row>
    </Content>
  );
};

export default Contact;
