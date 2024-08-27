import React from "react";
import { Col, Container } from "react-bootstrap";

const Trusted = () => {
    return (
        <>
            <section>
                <Container>
                    <div className="py-5 d-flex justify-content-center">
                        <div>
                            <h3 className="text-center font-poppin font-32">Trusted more than <span>100+</span> in the world</h3>
                            <p className="text-center font-16 trust_slo">they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
                        </div>
                    </div>
                    {/* <Col lg={8}> */}
                        <div className="d-flex justify-content-between align-items-center mb-5">
                            <img src="/1.png" className="img-fluid brand_name1"/>
                            <img src="/2.png" className="img-fluid brand_name"/>
                            <img src="/3.png" className="img-fluid brand_name"/>
                            <img src="/4.png" className="img-fluid brand_name"/>
                            <img src="/5.png" className="img-fluid brand_name"/>
                        </div>
                    {/* </Col> */}
                </Container>
            </section>
        </>
    );
};

export default Trusted;