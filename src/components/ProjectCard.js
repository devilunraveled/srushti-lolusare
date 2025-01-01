import React from "react";

export const ProjectCard = ({ title, link, description, imgPath }) => {
  return (
    <div
        className="project-card"
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
    </div>
  );
};
