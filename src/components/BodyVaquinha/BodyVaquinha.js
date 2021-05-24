import React from 'react';
import './BodyVaquinha.css';

const BodyVaquinha = ( props ) => {
    return (
        <div className="body-vaquinha">
            <img src={props.imgVaquinha}/>
            <p className="body-vaquinha-titulo">{props.titulo}</p>
            <p>{props.descricao}</p>
            <p>Arrecadado até o momento: {props.valorAtingido} R$</p>
            <a>{Math.round((props.valorAtingido*100)/props.valorDesejado)}% <progress value={props.valorAtingido} max={props.valorDesejado}></progress></a>
            <p>Meta: {props.valorDesejado} R$</p>
        </div>
    );
}

export default BodyVaquinha;