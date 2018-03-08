import React from 'react';

import { Popup } from '../../aob_modules/Popup';

const PopupContainer = ({ data }) => {
    // console.log(data)
    return (
        <div className="overlay">
            <Popup>
                <img src={data.item}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </Popup>
        </div>
    )
}

export default PopupContainer;