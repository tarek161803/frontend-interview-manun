import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Mission = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div>
                            <p className="font-36 font-poppins fw-bold">Why do we <span className="middle_text_color"> exist?</span></p>
                            <p className="exit_title">Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills</p>
                        </div>
                        <div className="d-flex align-items-center mt-5 ">
                            <img src="/person2.jpeg" alt="" className="person2" />
                            <div className="ps-3">
                                <p className="name font-16 m-0">Jerony Pulquosta</p>
                                <p className="desination font-12"> CEO Skill Shoot</p>
                            </div>
                        </div>
                        <div className="border"></div>
                        <div className="d-flex align-items-center mt-5">
                            <div className="pe-5">
                                <p className="font-36 fw-bold m-0 font-poppin ">100+</p>
                                <p className="font-12 font-poppin ">Updated Material</p>
                            </div>
                            <div>
                                <p className="font-36 fw-bold m-0 font-poppin ">15k</p>
                                <p className="font-12 font-poppin ">Member Join</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Col lg={6}>
                                <div className="px-3">
                                    <img src="/cube.png" alt="" className="exist_img1" />
                                    <p className="font-24 font-poppin fw-semibold">Material Limitations</p>
                                    <p className="font-16 font-poppin exist_details pb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="px-3">
                                    <img src="/tri.png" alt="" className="exist_img1" />
                                    <p className="font-24 font-poppin fw-semibold">Unprofessional Mentor</p>
                                    <p className="font-16 font-poppin exist_details pb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="px-3">
                                    <img src="/3sk.png" alt="" className="exist_img1" />
                                    <p className="font-24 font-poppin fw-semibold">Video Quality</p>
                                    <p className="font-16 font-poppin exist_details pb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="px-3">
                                    <img src="/4sk.png" alt="" className="exist_img1" />
                                    <p className="font-24 font-poppin fw-semibold">High Price</p>
                                    <p className="font-16 font-poppin exist_details pb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Mission;
