import React, { Component } from 'react';
import { connect } from 'react-redux';

import { product } from '../../data/Car';
import { Card } from '../../aob_modules/Card';

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
            <div style={{ paddingTop: 25 }}>
                {
                    carList.map((data, i) =>
                        <div key={i} style={{ marginBottom: 50 }}>
                            <Card>
                                <h5>{data.title}, {data.gen}</h5>
                                <h5>{data.enginePower}</h5>
                                <h5>{data.gear}</h5>
                                <h5>{data.seat}</h5>
                                <h5>{data.bag}</h5>
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