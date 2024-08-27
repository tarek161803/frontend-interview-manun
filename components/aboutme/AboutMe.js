import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaUnsplash } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { SiDiscord } from "react-icons/si";


const AboutMe = () => {
  return (
    <>
      <section id="about_me" className="pt-5 about_me">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="mt-5">
                <div>
                  <h1 className=" about_title font-poppin">
                    There is always something new for us to learn
                  </h1>
                  <p className="pe-5 font-poppin banner_slo">
                    we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.
                  </p>
                </div>
                <div className="d-flex align-items-center social_height">
                  <div className="d-flex justify-content-center btn_padd">
                    <Link href="/" className="start_journey text-decoration-none font-poppin">
                      start journey
                      <MdArrowOutward size={"20px"} className="ms-2" />
                    </Link>
                  </div>
                  <div className="ps-3">
                    <Link
                      data-aos="fade-up"
                      data-aos-duration="500"
                      href="#"
                      className="me-3 mn_ho"
                    >

                      <RiInstagramFill size={"25px"} className="social_icons" />

                    </Link>
                    <Link
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      href="#"
                      className="me-3"
                    >

                      <IoLogoTwitter size={"25px"} className="social_icons" />

                    </Link>
                    <Link
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      href="#"
                      className="me-3"
                    >

                      <SiDiscord size={"25px"} className="social_icons" />

                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} className="pt-5">
              <div className="about_thumbnail position-relative">
                <div className="inner_img d-flex justify-content-center">
                  <img
                    src="/about/banner.png"
                    alt=""
                    className="about_me_img "
                  />
                </div>


                <div className="join_now d-flex ">
                  <div>
                    <img src="/person.jpeg" alt="" className="rounded-pill join_now_img" />
                  </div>
                  <div>
                    <p className="font-12 fw-semibold ps-3 m-0">Learn basic ui ux design</p>
                    <p className="font-10 ps-3 m-0">Today at 12 PM</p>
                    <div className="ps-3 pt-2">
                      <Link href="/" className="text-decoration-none text-capitalize font-12 text-white join_btn">join now</Link>
                    </div>
                  </div>
                </div>
                <img
                  src="/banner1.png"
                  alt=""
                  className="position-absolute banner_edit"
                />
                <img
                  src="/banner2.png"
                  alt=""
                  className="position-absolute banner_edit2"
                />
                <img
                  src="/banner3.png"
                  alt=""
                  className="position-absolute banner_edit3"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutMe;
