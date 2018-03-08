import React from 'react';

const Card = (props) => {
    return (
        <div style={styles.cardStyle}>
            {props.children}
        </div>
    );
}

const CardDetail = (props) => {
    return (
        <div style={styles.cardDetailStyle}>
            {props.children}
        </div>
    )
}
const CardImage = (props) => {
    return (
        <div style={styles.cardImageStyle}>
            {props.children}
        </div>
    )
}



const styles = {
    cardStyle: {
        borderRadius: '1px',
        width: '100%',
        height: '300px',
        background: '#F1F1F1',
        padding: 20,
        display: 'flex',
    },
    cardDetailStyle: {
        // border: '1px solid #ddd',
        height: '100%',
        width: '30%',
    },
    cardImageStyle: {
        // border: '1px solid #ddd',
        height: '100%',
        width: '70%',
    },
}


export { Card, CardDetail, CardImage };