import React from 'react';

const Popup = (props) => {
    return (
        <div style={styles.popupStyle}>
            {props.children}
        </div>
    )
}

const styles = {
    popupStyle: {
        margin: '120px auto',
        padding: 20,
        background: '#fff',
        borderRadius: '5px',
        poition: 'relative',
        transition: 'all .2s ease-in-out',
        width: '50%',
    },
}

export { Popup };