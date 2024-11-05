import React from 'react';
import './Botao.css';

function Botao({texto, onClick, estilo}){

    return (
        <button className="botao" style={estilo} onClick={onClick}>
            {texto}
        </button>
    );
}

export default Botao;