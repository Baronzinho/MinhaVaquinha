import React from 'react';
import './BodyVaquinhaLista.css';

const BodyVaquinhaLista = ( props ) => {
    return (
        <div className="body-vaquinha-lista">
            <img src={props.imgVaquinha}/>
            <div className="body-vaquinha-content">
                <p className="body-vaquinha-titulo">{props.titulo}</p>
                <p className="body-vaquinha-descricao">{props.descricao}</p>
            </div>
            <div className="body-vaquinha-data">
                <p className="body-vaquinha-data-title">Arrecadado até o momento: {props.valorAtingido} R$</p>
                <a className="body-vaquinha-data-value">{Math.round((props.valorAtingido*100)/props.valorDesejado)}% <progress value={props.valorAtingido} 
                max={props.valorDesejado}></progress> Meta: {props.valorDesejado} R$</a>
            </div>
        </div>
    );
}

export default BodyVaquinhaLista;