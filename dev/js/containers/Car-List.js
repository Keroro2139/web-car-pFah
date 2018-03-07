import React, { Component } from 'react';
import { connect } from 'react-redux';

import { product } from '../../data/Car';
import {
    Card,
    CardContainer,
    CardTitle,
    CardItem,
    CardDetail
} from '../../aob_modules/Card';

import { Button } from 'antd';


class CarList extends Component {

    render() {
        const carFilter = [];
        for (var i = 0; i < product.length; i++) {
            if ((this.props.gearType === undefined || this.props.gearType === 'all')
                && (this.props.brand === undefined || this.props.brand === 'all')) {
                carFilter.push(product[i])
            }
            else if ((product[i].type === this.props.gearType)
                && (this.props.brand === undefined || this.props.brand === 'all')) {
                carFilter.push(product[i])
            }
            else if ((this.props.brand === product[i].brand)
                && (this.props.gearType === undefined || this.props.gearType === 'all')) {
                carFilter.push(product[i])
            }
            else if (this.props.gearType === product[i].type && this.props.brand === product[i].brand) {
                carFilter.push(product[i])
            }
        }

        return (
            <CardContainer>
                {
                    carFilter.map((data, i) =>
                        <div key={i}>
                            <Card>
                                <CardTitle>{data.title}</CardTitle>
                                <CardItem>
                                    <img src={data.item}
                                        style={{
                                            width: 270,
                                            height: 140,
                                        }}
                                    />
                                </CardItem>
                                <CardDetail>
                                    <p>Brand : {data.brand}</p>
                                    <p>Gear car : {data.type}</p>
                                    <Button
                                        type='primary'
                                        size='small'
                                        style={styles.detailButtonStyle}
                                    >Detail</Button>
                                </CardDetail>
                            </Card>
                        </div>
                    )
                }
            </CardContainer>
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