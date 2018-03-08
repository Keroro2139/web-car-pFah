import React, { Component } from 'react';
import { connect } from 'react-redux';

import { product } from '../../data/Car';
import { Card, CardDetail, CardImage } from '../../aob_modules/Card';

import { FaShoppingBag, FaAutomobile, FaStreetView, FaCogs, FaDashboard } from 'react-icons/lib/fa'
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
        // console.log(this.props.gearType);
        const carList = [];
        for (var i = 0; i < product.length; i++) {
            carList[i] = product[i];
        }

        return (
            <div style={{ paddingTop: 25 }} id='car-list'>
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
                                </CardDetail>
                                <CardImage>
                                    <img id='car' src={data.image} alt="" />
                                </CardImage>
                            </Card>
                        </div>
                    )
                }
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