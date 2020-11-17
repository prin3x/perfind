import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';

const Setfooter = styled.div`
z-index:33;
background:linear-gradient(to right, #b8956c, #e3d5b0);
height:21vh;
width:100%;
bottom: 0;
padding-top: 1rem;
`;
function Footer() {
    return (
        <Setfooter>
            <Row justify="space-around"  >
                <Col>
                    <h3>Contact Us</h3>
                    <div>9999 fdfdfs gsdgdsg</div>
                    <div>sfsfs 41000</div>
                    <div>Thailand</div>
                </Col>
                <Col>
                    <br></br>
                    <div>99999@gmail.com</div>
                    <div>+88 956421486</div>
                </Col>
                <Col>
                    <h3>Useful Links</h3>
                    <div>site map</div>
                    <div>Store Location</div>
                    <div>My Account</div>
                    <div>Orders Tracking</div>
                </Col>
                <Col>
                    <h3>Services</h3>
                    <div>International Shipping</div>
                    <div>Term and Conditions</div>
                    <div>Orders and Returns</div>
                    <div>Shipping Rates and Palicies</div>
                    <div>FAQs</div>
                </Col>
                <Col>
                    <h4>LOGO</h4>
                    <Button type="text">FB</Button>
                    <Button type="text">TW</Button>
                    <Button type="text">IG</Button>
                    <Button type="text">G+</Button>
                </Col>
            </Row>
        </Setfooter>
    );
}

export default Footer;
