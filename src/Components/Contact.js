import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.css";

emailjs.init("kv_hjmKeSvAUvjrAV");

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: "sithuminalanka4@gmail.com",
    };

    emailjs
      .send(
        "service_412azgc",
        "template_rutg9lg",
        templateParams
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          alert("Thank you for your message! I'll get back to you soon.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">Let's discuss your project</p>
            </div>
          </Col>
        </Row>
        <Row className="contact-row">
          <Col lg={8} className="mx-auto">
            <Form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
