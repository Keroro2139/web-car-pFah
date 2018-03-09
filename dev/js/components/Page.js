import React from 'react';
import animateScrollTo from 'animated-scroll-to';

import Navigation from '../containers/Navigation';
import CarFilter from '../containers/Car-filter';
import CarList from '../containers/Car-List';
import Contact from './Contact';

import { FaClose, FaArrowCircleOUp } from 'react-icons/lib/fa';
import { Button, Row, Col } from 'antd';

function closeContact() {
    document.querySelector('#image-contact').classList.remove('active');
    document.querySelector('.bg-image-contact').classList.remove('active');
    document.querySelector('#close-image-contact').classList.remove('active');
    document.querySelector('#view').classList.remove('active');
    document.querySelector('#overlay').classList.remove('active');
}
function goToTop() {
    animateScrollTo(0, { speed: 100 })
}


const Home = (props) => {
    return (
        <div>

            <Navigation />

            <div className="home">
                <h1>HOME</h1>
            </div>

            <div >
                <Row>
                    <Col
                        md={{ span: 20, offset: 2 }}
                        sm={{ span: 20, offset: 2 }}
                        xs={{ span: 20, offset: 2 }}
                        lg={{ span: 16, offset: 4 }}
                    >
                        <h1 style={{
                            margin: '20px 5px',
                            letterSpacing: '1px',
                            color: '#C62525',
                        }}
                            className="car">Rent car</h1>
                        <CarFilter />
                    </Col>
                </Row>
            </div>

            <FaClose onClick={closeContact} id='close-image-contact' />

            <div onClick={closeContact} className="bg-image-contact">
            </div>
            <Row>
                <Col
                    md={{ span: 20, offset: 2 }}
                    sm={{ span: 24, offset: 0 }}
                    xs={{ span: 24, offset: 0 }}
                    lg={{ span: 16, offset: 4 }}
                >
                    <CarList />
                </Col>
            </Row>
            <div className="contact">
                <Contact />
            </div>
            <div id='scrollToTop' onClick={goToTop}>
                <FaArrowCircleOUp />
            </div>


        </div>
    )
}

const styles = {
    bgPresent: {
        textAlign: 'center',
    },
}

export default Home;