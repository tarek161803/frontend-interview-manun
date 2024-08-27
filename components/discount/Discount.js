import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Discount = () => {
    return (
        <>
            <section className="discount_top mb-5">
                <Container className="discount_bg position-relative">
                    <Row>
                        <Col lg={6} className="p-5">
                            <div className=" course_details">
                                <p className="font-32 font-poppin fw-semibold">Happy <span className="middle_text_color"> Chinese New Year </span> , 20% discount for you today</p>
                                <button className="subs_course font-20 text-capitalize font-poppin">subscribe course</button>

                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="">
                                <img src="/child.png" alt="" className="discount_img" />
                                <img src="/course1.png" alt="" className="course1" />
                                <img src="/course2.png" alt="" className="course2" />
                                <img src="/course3.png" alt="" className="course3" />
                                <img src="/course4.png" alt="" className="course4" />
                                <img src="/course5.png" alt="" className="course5" />
                                <img src="/course5.png" alt="" className="course6" />
                            </div>
                            {/* <div></div> */}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Discount;
