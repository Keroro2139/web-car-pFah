import React, { Component } from 'react';
import { connect } from 'react-redux';

import { product } from '../../data/Car';
import { Card, CardDetail, CardImage } from '../../aob_modules/Card';

import { FaShoppingBag, FaAutomobile, FaStreetView, FaCogs, FaDashboard, FaMoney } from 'react-icons/lib/fa'
import { Button } from 'antd';


class CarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    render() {
        // console.log(product);
        console.log(this.props.gearType);
        const carList = [];
        var found = 0;
        for (var i = 0; i < product.length; i++) {
            if (this.props.gearType === undefined || this.props.gearType === 'All') {
                carList[i] = product[i];
                found++;
            }
            else if (this.props.gearType === product[i].gear) {
                carList[i] = product[i];
                found++;
            }
        }
        console.log(found);


        return (
            <div>
                <div style={{ paddingTop: 25 }} id='car-list'>
                    <h3>Found {found}</h3>
                    {
                        carList.map((data, i) =>
                            <div key={i} style={{ marginBottom: 50 }}>
                                <Card>
                                    <CardDetail>
                                        <p><FaAutomobile style={{ fontSize: 16 }} />&nbsp;&nbsp;&nbsp;{data.title}, {data.gen}</p>
                                        <p><FaDashboard style={{ fontSize: 16 }} />&nbsp;&nbsp;&nbsp;{data.enginePower} CC</p>
                                        <p><FaCogs style={{ fontSize: 16 }} />&nbsp;&nbsp;&nbsp;{data.gear}</p>
                                        <p><FaStreetView style={{ fontSize: 16 }} />&nbsp;&nbsp;&nbsp;{data.seat} Seats</p>
                                        <p><FaShoppingBag style={{ fontSize: 16 }} />&nbsp;&nbsp;&nbsp;{data.bag} Bags</p>
                                        <p>amount:&nbsp;&nbsp;&nbsp;{data.amount}</p>
                                        {/* <br/> */}
                                        <p><FaMoney style={{ fontSize: 16 }} />&nbsp;&nbsp;&nbsp;1,000 Baht / Day</p>
                                        <Button id='reserve' style={{ background: '#FB6D00', color: '#fff', width: 130 }}>RESERVE</Button>
                                    </CardDetail>
                                    <CardImage>
                                        <img id='car' src={data.image} alt="" />
                                    </CardImage>
                                </Card>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

const styles = {
    detailButtonStyle: {
        float: 'right',
        margin: '7px 5px',
    }
}

function mapStateToProps(state) {
    return {
        gearType: state.CarProps.gearType,
        brand: state.CarProps.brand
    }
}

export default connect(mapStateToProps)(CarList);