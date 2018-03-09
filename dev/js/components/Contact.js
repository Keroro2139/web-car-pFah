import React from 'react';

import { FaFacebook, FaPhone, FaHome } from 'react-icons/lib/fa';
import { Row, Col } from 'antd';

const Contact = (props) => {
    const {
        columnDetailContact,
        contactContainer,
        headerContact,
        leftColumnContact
    } = styles;
    return (
        <div id='contact'>
            <Row>
                <Col
                    md={{ span: 16, offset: 4 }}
                    sm={{ span: 16, offset: 4 }}
                    xs={{ span: 16, offset: 4 }}
                    lg={{ span: 16, offset: 4 }}
                >
                    <h1 style={headerContact}>Contact</h1>
                    {/* <div id='fb-icon'>
                        <FaFacebook style={styles.facebookStyle} />
                    </div> */}
                    <Row>
                        <Col
                            md={{ span: 12 }}
                            sm={{ span: 16 }}
                            xs={{ span: 24 }}
                            style={leftColumnContact}>
                            <h1><FaHome />&nbsp;&nbsp;CAPTAIN CAR RENTAL CO.,LTD.</h1>
                            <p>653/2 หมู่ 5 ต.รอบเวียง</p>
                            <p>อ.เมือง จ.เชียงราย 57000</p>
                        </Col>

                        <Col
                            md={{ span: 12 }}
                            sm={{ span: 8 }}
                            xs={{ span: 24 }}
                            className='rightColumnContact'>
                            <p><FaPhone />&nbsp;&nbsp;088-294-4457</p>
                            <p><FaPhone />&nbsp;&nbsp;088-261-6129</p>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    )
}

const styles = {
    headerContact: {
        letterSpacing: '1px',
        textAlign: 'center',
        color: '#FFF300',
        lineHeight: '80px',
        fontSize: '32px',
    },
    facebookStyle: {
        color: '#fff',
        fontSize: '20px',
    },  
    leftColumnContact: {
        paddingLeft: 15,
        color: '#fff',
    }

}

export default Contact;