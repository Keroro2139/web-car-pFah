import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectGearType, selectBrand } from '../actions/index';

import { Select } from 'antd';
const Option = Select.Option;

class CarFilter extends Component {
    constructor(props) {
        super(props);
    }

    handleSelectGear(value) {
        this.props.selectGearType(value)
    }

    handleSelectBrand(value) {
        this.props.selectBrand(value);
    }

    render() {
        return (
            <div>
                <Select
                    onChange={this.handleSelectGear.bind(this)}
                    placeholder="Select a gear type"
                    style={{ width: 155, margin: '8px 8px' }}>
                    <Option value="automatic">Automatic</Option>
                    <Option value="manual">Manual</Option>
                    <Option value="all">All</Option>
                </Select>
                <Select
                    onChange={this.handleSelectBrand.bind(this)}
                    placeholder="Select a brand"
                    style={{ width: 140, margin: '8px 8px' }}>
                    <Option value="honda">Honda</Option>
                    <Option value="toyota">Toyota</Option>
                    <Option value="all">All</Option>
                </Select>
            </div>
        )
    }
}



export default connect(null, { selectGearType, selectBrand })(CarFilter);