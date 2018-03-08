import React from 'react';

const Card = (props) => {
    return (
        <div id='card' style={styles.cardStyle}>
            {props.children}
        </div>
    );
}



const styles = {
    cardStyle: {
        borderRadius: '1px',
        width: '100%',
        height: '300px',
        background: '#F1F1F1',
        padding: 15,
    },
}


export { Card };