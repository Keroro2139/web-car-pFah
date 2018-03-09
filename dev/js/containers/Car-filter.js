import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectGearType, selectBrand } from '../actions/index';

import { Radio } from 'antd';
const RadioGroup = Radio.Group;

class CarFilter extends Component {
    constructor(props) {
        super(props);

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
                <RadioGroup onChange={this.handleChangeGear} defaultValue={'All'}>
                    <Radio value={'Automatic'}>Automatic transmission</Radio>
                    <Radio value={'Manual'}>Manual transmission</Radio>
                    <Radio value={'All'}>All</Radio>
                </RadioGroup>
            </div>
        )
    }
}



export default connect(null, { selectGearType, selectBrand })(CarFilter);