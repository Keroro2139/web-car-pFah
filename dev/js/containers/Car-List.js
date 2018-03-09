import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCar } from '../actions/index';

import { product } from '../../data/Car';
import { Card, CardDetail, CardImage } from '../../aob_modules/Card';
import { FaShoppingBag, FaAutomobile, FaStreetView, FaCogs, FaDashboard, FaMoney } from 'react-icons/lib/fa'
import CardView from '../components/CardView';
import { Button } from 'antd';


class CarList extends Component {
    constructor(props) {
        super(props);
        this.handleSelectCar = this.handleSelectCar.bind(this)
    }

    showContact() {
        document.querySelector('#image-contact').classList.add('active')
        document.querySelector('.bg-image-contact').classList.add('active')
        document.querySelector('#close-image-contact').classList.add('active')
    }

    handleSelectCar(data) {
        this.props.selectCar(data)
        document.querySelector('#view').classList.add('active')
        // document.querySelector('#close-image-contact').classList.add('active')
    }
    rmActive() {
        document.querySelector('#close-image-contact').classList.remove('active')
    }

    render() {
        // console.log(product);
        // console.log(this.props.gearType);
        const carList = [];
        var check = [];
        var found = 0;
        for (var i = 0; i < product.length; i++) {
            check[i] = false;
            if (this.props.gearType === undefined || this.props.gearType === 'All') {
                carList[i] = product[i];
                found++;
            }
            else if (this.props.gearType === product[i].gear) {
                carList[i] = product[i];
                found++;
            }
        }
        // console.log(found);
        return (
            <div id='rentcar'>

                <CardView/>

                <div id='car-list'>

                    <img id='image-contact' src="../../images/bg-present.jpg" alt="" />

                    <div style={{ paddingTop: 25 }} >
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
                                            {/* <br/> */}
                                            <p><FaMoney style={{ fontSize: 16 }} />&nbsp;&nbsp;&nbsp;{data.price} Baht / Day</p>
                                            <Button
                                                id='btn-contact'
                                                type='primary'
                                                onClick={this.showContact}
                                            >Contact</Button>
                                        </CardDetail>
                                        <CardImage>
                                            <img id='car' onClick={() => this.handleSelectCar(data)} src={data.image} alt="" />
                                        </CardImage>

                                    </Card>
                                </div>
                            )
                        }
                    </div>
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
    }
}

export default connect(mapStateToProps, { selectCar })(CarList);