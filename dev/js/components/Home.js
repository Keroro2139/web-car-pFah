import React from 'react';

import Navigation from '../containers/Navigation';
import CarFilter from '../containers/Car-filter';
import CarList from '../containers/Car-List';
import Contact from './Contact';

import { Button, Row, Col } from 'antd';

const Home = (props) => {
    return (
        <div>
            <Navigation />

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
                    }}>Rent car</h1>
                    <CarFilter />
                </Col>
            </Row>
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

            <Contact></Contact>



        </div>
    )
}

const styles = {
    bgPresent: {
        textAlign: 'center',
    }
}

export default Home;