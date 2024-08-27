import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const HeaderOld = () => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
    let scrollPosition = 20;
    if (scrollY > scrollPosition) {
      document.getElementById("Top").classList.add("sticky2");
    } else {
      document.getElementById("Top").classList.remove("sticky2");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  const [navShow, setNavShow] = useState(false);
  const [drop, setDrop] = useState("dropdown_items");
  const [showItems, setShowItems] = useState(false);
  const [showItems2, setShowItems2] = useState(false);

  const handleMouseEnter = () => {
    setShowItems(true);
    setDrop(drop);
  };

  const handleMouseLeave = () => {
    setShowItems(false);
  };

  const handleClickService = () => {
    setShowItems(false);
    // router.push("/");
  };

  // second
  const handleMouseEnter2 = () => {
    setShowItems2(true);
  };

  const handleMouseLeave2 = () => {
    setShowItems2(false);
  };

  const handleClickService2 = () => {
    setShowItems2(false);
    // router.push("/");
  };

  return (
    <>
      <header>
        {/*Logo & manu*/}
        <section id="Top" className="overbanner2">
          <Container className="px-0">
            <div className="d-flex justify-content-between align-items-center main-manu-item">
              <div className="">
                <Link href="/" className="text-decoration-none m-0">
                  <p className="text-capitalize font-poppin fw-semibold font-24 text-white m-0">
                    skill<span className="logo_color"> shoot</span>
                  </p>
                </Link>
              </div>
              <Nav className="mx-auto pt-2 font-lato manu-font manu-items ">
                <Nav.Link as={Link} href="/" className="d-flex align-items-center text-light font-16 my-2 font-poppins">
                  <span className="position-relative after_border pb-2 text-capitalize sticky_text_color">home</span>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  href="#"
                  className="d-flex align-items-center font-16 my-2 text-light font-poppins"
                  scroll={false}>
                  <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">course</span>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  href="#"
                  scroll={false}
                  className="d-flex align-items-center font-16 my-2 text-light font-poppins">
                  <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                    subscribe{" "}
                  </span>
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  href="#"
                  className="d-flex align-items-center font-16 my-2 text-light font-poppins"
                  scroll={false}>
                  <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">about</span>
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  scroll={false}
                  href="#"
                  className="d-flex align-items-center font-16 my-2 text-light font-poppins">
                  <span className="text-capitalize position-relative after_border pb-2 sticky_text_color">
                    testimoni
                  </span>
                </Nav.Link>
              </Nav>
            </div>
          </Container>
        </section>
      </header>
    </>
  );
};
export default HeaderOld;
