import Link from "next/link";
import React from "react";
import { Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FiUser } from "react-icons/fi";

const Blogs = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="popular_course">
        <Container>
          <div className="py-5">
            <div className="">
              <div className="d-flex justify-content-center">
                <div>
                  <p className="font-36 font-poppin text-white fw-semibold">Popular courses of the week</p>
                  <p className="font-16 font-poppin course_week text-center">List of the most popular lists that are often studied by our members</p>
                </div>
              </div>
              <div className="row">
                <Slider {...settings}>
                  <Col lg={4}>
                    <Card className="mx-3">
                      <Card.Img variant="top" src="/slider1.jpeg" className="slider_img1" />
                      <Card.Body>
                        <Card.Title className="font-24 font-poppin ">Basics of learning team management</Card.Title>
                        {/* <Card.Text> */}
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center mt-4 ">
                              <img src="/person2.jpeg" alt="" className="slider_person2" />
                              <div className="ps-3">
                                <p className="name font-14 m-0 fw-semibold font-poppin">Jerony Pulquosta</p>
                                <p className="desination font-10"> CEO Skill Shoot</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mt-4 ">
                              <FiUser size={"30px"} className="slider_icon" />
                              <div className="ps-3">
                                <p className="name font-14 m-0 fw-semibold">120</p>
                                <p className="desination font-10"> Participant</p>
                              </div>
                            </div>
                          </div>
                        {/* </Card.Text> */}
                        <div className="d-flex justify-content-between align-items-center mt-4">

                          <Button variant="primary" className="text-capitalize slider_button">buy now</Button>
                          <p><span className="font-24 fw-bold">$120</span>/25 video</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4}>
                    <Card className="mx-3">
                      <Card.Img variant="top" src="/slider1.jpeg" className="slider_img1" />
                      <Card.Body>
                        <Card.Title className="font-24 font-poppin ">Learn basic database structure</Card.Title>
                        {/* <Card.Text> */}
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center mt-4 ">
                              <img src="/person2.jpeg" alt="" className="slider_person2" />
                              <div className="ps-3">
                                <p className="name font-14 m-0 fw-semibold font-poppin">Roynaldo Jr</p>
                                <p className="desination font-10"> Data Science</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mt-4 ">
                              <FiUser size={"30px"} className="slider_icon" />
                              <div className="ps-3">
                                <p className="name font-14 m-0 fw-semibold">55</p>
                                <p className="desination font-10"> Participant</p>
                              </div>
                            </div>
                          </div>
                        {/* </Card.Text> */}
                        <div className="d-flex justify-content-between align-items-center mt-4">

                          <Button variant="primary" className="text-capitalize slider_button">buy now</Button>
                          <p><span className="font-24 fw-bold">$180</span>/25 video</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4}>
                    <Card className="mx-3">
                      <Card.Img variant="top" src="/slider1.jpeg" className="slider_img1" />
                      <Card.Body>
                        <Card.Title className="font-24 font-poppin ">Create dynamic website with basic php</Card.Title>
                        {/* <Card.Text> */}
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center mt-4 ">
                              <img src="/person2.jpeg" alt="" className="slider_person2" />
                              <div className="ps-3">
                                <p className="name font-14 m-0 fw-semibold font-poppin">Markus Low</p>
                                <p className="desination font-10">Programer</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mt-4 ">
                              <FiUser size={"30px"} className="slider_icon" />
                              <div className="ps-3">
                                <p className="name font-14 m-0 fw-semibold">120</p>
                                <p className="desination font-10"> Participant</p>
                              </div>
                            </div>
                          </div>
                        {/* </Card.Text> */}
                        <div className="d-flex justify-content-between align-items-center mt-4">

                          <Button variant="primary" className="text-capitalize slider_button">buy now</Button>
                        
                            <p>
                              <span className="font-24 fw-bold">$120</span>/25 video
                            </p>
                          
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4}>
                    <Card className="mx-3">
                      <Card.Img variant="top" src="/slider1.jpeg" className="slider_img1" />
                      <Card.Body>
                        <Card.Title className="font-24 font-poppin ">Basics of learning team management</Card.Title>
                        {/* <Card.Text> */}
                          <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center mt-4 ">
                              <img src="/person2.jpeg" alt="" className="slider_person2" />
                              <div className="ps-3">
                                <p className="name font-14 m-0 fw-semibold font-poppin">Jerony Pulquosta</p>
                                <p className="desination font-10"> CEO Skill Shoot</p>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mt-4 ">
                              <FiUser size={"30px"} className="slider_icon" />
                              <div className="ps-3">
                                <p className="name font-14 m-0 fw-semibold">120</p>
                                <p className="desination font-10"> Participant</p>
                              </div>
                            </div>
                          </div>
                        {/* </Card.Text> */}
                        <div className="d-flex justify-content-between align-items-center mt-4">

                          <Button variant="primary" className="text-capitalize slider_button">buy now</Button>
                          <p><span className="font-24 fw-bold">$120</span>/25 video</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>



                </Slider>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blogs;
