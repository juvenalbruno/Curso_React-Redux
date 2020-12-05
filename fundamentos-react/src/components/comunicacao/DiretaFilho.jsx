import React from 'react';

export default (props) => {
    return (
        <div>
            <span>{props.nome}, </span>
            <span>{props.idade}, </span>
            <span>{props.nerd ? 'Verdadeiro' : 'falso'}!</span>
        </div>
    );
}