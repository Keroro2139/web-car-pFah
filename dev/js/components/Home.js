import React from 'react';

import Navigation from '../containers/Navigation';
import CarFilter from '../containers/Car-filter';
import CarList from '../containers/Car-List';

import { Button, Row, Col } from 'antd';

const Home = (props) => {
    return (
        <div>
            <Navigation />
            <Row style={{ paddingTop: 100 }}>
                <Col md={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} xs={{ span: 20, offset: 2 }} style={styles.bgPresent}>
                    <img id='bg-present' src="../../images/bg-present.jpg" alt="bg-present" />
                    <hr/>
                </Col>
            </Row>
            <Row style={{ paddingTop: 100 }}>
                <Col md={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} xs={{ span: 20, offset: 2 }}>
                    <h1 style={{
                        marginBottom: 15,
                        marginLeft: 10,
                        color: '#29437C',
                    }}>Car</h1>
                    <CarFilter />
                </Col>
            </Row>
            <Row style={{ paddingBottom: 100 }}>
                <Col md={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} xs={{ span: 20, offset: 2 }}>
                    <CarList />
                </Col>
            </Row>

        </div>
    )
}

const styles = {
    bgPresent: {
        textAlign: 'center',
    }
}

export default Home;