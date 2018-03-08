import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectGearType, selectBrand } from '../actions/index';

import { Radio } from 'antd';
const RadioGroup = Radio.Group;

class CarFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gear: 'automatic',
        }
        this.handleChangeGear = this.handleChangeGear.bind(this);
    }
    handleChangeGear(event) {
        this.setState({ gear: event.target.value })
        this.props.selectGearType(event.target.value)
    }
    render() {
        // console.log(this.state.gear)
        return (
            <div>
                <RadioGroup onChange={this.handleChangeGear} value={this.state.gear}>
                    <Radio value={'automatic'}>Automatic transmission</Radio>
                    <Radio value={'manual'}>Manual transmission</Radio>
                </RadioGroup>
            </div>
        )
    }
}



export default connect(null, { selectGearType, selectBrand })(CarFilter);