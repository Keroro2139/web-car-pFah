import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { captainProduct } from '../../data/CaptainCar';

import { Carousel } from 'antd';

const CardView = (props) => {
    var title = _.mapValues(props, 'title').car
    var gen = _.mapValues(props, 'gen').car

    const image = []
    for (var i = 0; i < captainProduct.length; i++) {
        var captain = captainProduct[i]
        if ((title + gen) === (captain.title + captain.gen)) {
            image.push(captainProduct[i])
        }
    }

    // console.log('Captain Product:', image);
    console.log('Length:', image.length);


    return (
        <div id="view">
            <Carousel >
                {
                    image.length === 1 ?
                        <Carousel ><div><img id='carView' src={image[0].image} alt="" /></div></ Carousel>
                        :
                        image.map((data, i) => {
                            return (
                                <div style={{ padding: '0 auto' }} key={i}>
                                    <img id='carView' src={data.image} alt="" />
                                </div>
                            )
                        })

                }
                {/* <div>hello</div> */}
                
            </ Carousel>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        car: state.CarProps.car,
    }
}

export default connect(mapStateToProps)(CardView);