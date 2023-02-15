import React from "react";
import { Breadcrumb, Col, Container, Row } from "../../Components/Common";
import ContactFromLeft from "./ContactForm/ContactFromLeft";
import ContactFromRight from "./ContactForm/ContactFromRight";
import SliderForm from "./Slider/SliderForm";
import './style.css';
const index = () => {
    return (
        <div className="list-none">
            <Breadcrumb />
            <div className="max-w-[1200px] ml-auto mr-auto relative">
                <Row className={'w-full mx-0 my-0'}>
                    <Col className={'w-1/3'}>
                        <ContactFromLeft />
                    </Col>
                    <Col className={'w-2/3'}>
                        <ContactFromRight />
                    </Col>
                </Row>
            </div>

            <iframe style={{ width: '100%', height: '750px' }}
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Ho%C3%A0ng%20Gia%20Thai%20Nguyen+(Ng%C3%A3%20ba%20%C4%91i%E1%BB%83m%20h%E1%BA%B9n)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

            </iframe>
            <SliderForm />
        </div>
    );
};
export default index;