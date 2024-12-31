import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, link, description, imgPath, type }) => {
    console.log(process.env.PUBLIC_URL + "/" + imgPath);
  return (
    <Col size={12} sm={6} md={4}
        style={{ 
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          }}
        >
      <a 
        href={link}
        target="_blank" 
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
      <div className="proj-imgbx">
        <img src={process.env.PUBLIC_URL + "/" + imgPath} alt="Project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
