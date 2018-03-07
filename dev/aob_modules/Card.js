import React from 'react';

const Card = (props) => {
    return (
        <div id='card' style={styles.cardStyle}>
            {props.children}
        </div>
    );
}

const CardContainer = (props) => {
    return (
        <div style={styles.cardContainer}>
            {props.children}
        </div>
    )
}

const CardDetail = (props) => {
    return (
        <div style={styles.cardDetail}>
            {props.children}
        </div>
    )
}
const CardTitle = (props) => {
    return (
        <div style={styles.cardTitle}>
            {props.children}
        </div>
    )
}
const CardItem = (props) => {
    return (
        <div style={styles.cardItem}>
            {props.children}
        </div>
    )
}

const styles = {
    cardStyle: {
        border: '1px solid #ddd',
        borderRadius: '3px',
        width: '300px',
        height: 'auto',
        margin: '0.75em 0.75em',
        overflow: 'auto',
        background: '#fff',
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        position: 'relative',
        border: 'none',
        padding: '1.25em',
        background: '#F0F0F0',
        borderRadius: '2px',
    },
    cardDetail: {
        padding: '3px 5px',
    },
    cardTitle: {
        borderBottom: '1px solid #ddd',
        padding: '3px 5px',
    },
    cardItem: {
        height: '180px',
        borderBottom: '1px solid #ddd',
        padding: '8px',
        display: 'flex',
        justifyContent: 'center',
    },
}


export { Card, CardContainer, CardDetail, CardTitle, CardItem };