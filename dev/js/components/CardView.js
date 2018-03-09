import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { captainProduct } from '../../data/CaptainCar';

function rmActive() {
    // document.querySelector('#close-image-contact').classList.remove('active')
    document.querySelector('#view').classList.remove('active')
}

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

    console.log('Image:', image)

    return (
        <div id='view' onClick={rmActive}>
            <div className="container-image">
                {
                    image.map((data, i) =>
                        <img id='car-image' key={i} src={data.image} alt="" />
                    )
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        car: state.CarProps.car,
    }
}

export default connect(mapStateToProps)(CardView);