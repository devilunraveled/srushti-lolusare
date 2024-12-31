import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import projectInformation from "../info/projects.json";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
    const ProjectList = projectInformation.projectList;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ 
                    ...style, 
                    display: "block",
                    background: "rgba(255,255,255,0.2)", 
                    borderRadius: "50%",
                    width: "50px",  // Increased width
                    height: "50px", // Increased height
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onClick={onClick}
            >
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ 
                    ...style, 
                    display: "block",
                    background: "rgba(255,255,255,0.2)", 
                    borderRadius: "50%",
                    width: "50px",  // Increased width
                    height: "50px", // Increased height
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onClick={onClick}
            >
            </div>
        );
    }

    const personalProjects = ProjectList.filter(project => project.type === "personal");
    const professionalProjects = ProjectList.filter(project => project.type !== "personal");

    return (
        <section className="project" id="projects">
            <h2>Projects</h2>
            <p>{projectInformation.overallDescription}</p>


            <Container>
                <Row size = {20}>
                    <Col size={12}>
                        <Tab.Container id="projects-tabs" defaultActiveKey="second">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Professional</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Personal</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {ProjectList.map((project, index) => (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Slider {...settings} 
                                        justifyContent="center"

                                    >
                                        {ProjectList.map((project, index) => (
                                            <div 
                                                key={index} 
                                                style={{
                                                    display: 'flex', 
                                                    justifyContent: 'center', 
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <ProjectCard
                                                    {...project}
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
