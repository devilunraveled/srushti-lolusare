import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import linkedIn from "../assets/img/linkedIn.svg";
import instagram from "../assets/img/instagram.svg";
import behance from "../assets/img/behance.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/srushti-lolusare-b196712aa/"><img src={linkedIn} alt="linkedIn Icon" /></a>
              <a href="https://www.instagram.com/into_the_hues_/"><img src={instagram} alt="Instagram Icon" /></a>
              <a href="https://www.behance.net/srushti_lolusare"><img src={behance} alt="Behance Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
