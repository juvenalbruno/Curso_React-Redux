import React from 'react';

import './Card.css';

export default props => {

    const Cardstyle = {
        backgroundColor: props.color || '#008',
        borderColor: props.color || '#008',
    }

    return (
        <div className="Card" style={Cardstyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
}