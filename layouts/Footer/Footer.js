import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <>
      {/* copy right part */}
      <section className="copyright">
        <Container>
          <div className="d-flex justify-content-center footer_top_bottom">
            <div className="position-relative">
              <h2 className="font-32 font-poppin text-light fw-light text-center">Subscribe to get notified about update</h2>
              <p className="font-16 text-center font-poppin pb-5">By subscribing with your mail, you will accept our privacy policy</p>
              <div>
                <form className="d-flex justify-content-center">
                  <input type="search" className="form_width m-0 me-2 ps-5" placeholder="Enter your mail"/>
                  <button className="search_btn text-capitalize font-poppin">subscribe us</button>
                  
                </form>
              </div>
              <img src="/sad.png" className="sad_arrow"/>
              <img src="/circle.png" className="circle"/>
            </div>
          </div>



          <div className="d-flex justify-content-between align-items-center main-manu-item">
            <div className="py-2 ">
              <Link href="/" className="text-decoration-none my-3">
                <p className="text-capitalize font-poppin fw-semibold font-24 text-white pt-2">skill<span className="logo_color"> shoot</span></p>
              </Link>
            </div>
            <Nav className="ms-auto pt-2 font-lato manu-font manu-items ">
              <Nav.Link
                as={Link}
                href="/"
                className="d-flex align-items-center text-light font-16 my-2 font-poppins"
              >
                <span className="position-relative after_border pb-2 text-capitalize sticky_text_color">
                  home
                </span>
              </Nav.Link>

              <Nav.Link
                as={Link}
                href="#about_me"
                className="d-flex align-items-center font-16 my-2 text-light font-poppins"
                scroll={false}

              >
                <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                  course
                </span>
              </Nav.Link>

              <Nav.Link
                as={Link}
                href="#gallery"
                scroll={false}
                className="d-flex align-items-center font-16 my-2 text-light font-poppins"
              >
                <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                  subscribe                  </span>
              </Nav.Link>

              <Nav.Link
                as={Link}
                href="/#blog"
                className="d-flex align-items-center font-16 my-2 text-light font-poppins"
                scroll={false}
              >
                <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                  about
                </span>
              </Nav.Link>
              <Nav.Link
                as={Link}
                scroll={false}
                href="#contact"
                className="d-flex align-items-center font-16 my-2 text-light font-poppins"
              >
                <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                  testimoni
                </span>
              </Nav.Link>
            </Nav>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
