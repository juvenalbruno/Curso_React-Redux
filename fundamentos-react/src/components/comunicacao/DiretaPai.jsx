import React from 'react';
import DiretaFilho from './DiretaFilho';

export default (props) => {
    return (
        <div>
            <DiretaFilho nome="João" idade={20}  nerd={true} />
            <DiretaFilho nome="Pedro" idade={15}  nerd={false} />
        </div>
    );
}