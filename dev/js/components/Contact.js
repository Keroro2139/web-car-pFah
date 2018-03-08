import React from 'react';

import { FaFacebook } from 'react-icons/lib/fa';
import { Row, Col } from 'antd';

const Contact = (props) => {
    return (
        <div style={styles.contactContainer}>
            <Row>
                <Col
                    md={{ span: 16, offset: 4 }}
                >
                    <h1 style={styles.headerContact}>Contact</h1>
                    <div id='fb-icon'>
                        <FaFacebook style={styles.facebookStyle} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const styles = {
    contactContainer: {
        marginTop: 100,
        background: '#202020',
        height: '200px',
        width: '100%',
    },
    headerContact: {
        letterSpacing: '1px',
        textAlign: 'center',
        color: '#fff',
        lineHeight: '80px',
        fontSize: '32px',
    },
    facebookStyle: {
        color: '#fff',
        fontSize: '20px',
    }

}

export default Contact;