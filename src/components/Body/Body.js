import React from 'react';
import BodyVaquinha from '../BodyVaquinha/BodyVaquinha';
import './Body.css';
import ImgVaquinha01 from '../../images/vaquinha_01.jpg';
import ImgVaquinha02 from '../../images/vaquinha_02.jpg';
import ImgVaquinha03 from '../../images/vaquinha_03.jpg';
import BaseBoard from '../BaseBoard/BaseBoard';

const Body = () => {
    return (
        <div className="body-content">
            <div className="body-content-vaquinha">
                <BodyVaquinha imgVaquinha={ImgVaquinha01} titulo="Ajuda para o Roberto" 
                descricao="Necessitamos de uma Doação para ajudar com os custos da cirurgia."
                valorDesejado="3.000" valorAtingido="2.000"></BodyVaquinha>
            </div>
            <div className="body-content-vaquinha">
                <BodyVaquinha imgVaquinha={ImgVaquinha02} titulo="Ajuda para o Jonas" 
                descricao="Necessitamos de uma Doação para ajudar com os custos da cirurgia."
                valorDesejado="50.000" valorAtingido="23.000"></BodyVaquinha>
            </div>
            <div className="body-content-vaquinha">
                <BodyVaquinha imgVaquinha={ImgVaquinha03} titulo="Ajuda para a Alice" 
                descricao="Necessitamos de uma Doação para ajudar com os custos da cirurgia."
                valorDesejado="1.000" valorAtingido="0.150"></BodyVaquinha>
            </div>
            <div className="body-content-vaquinha">
                <BodyVaquinha imgVaquinha={ImgVaquinha03} titulo="Ajuda para a Alice" 
                descricao="Necessitamos de uma Doação para ajudar com os custos da cirurgia."
                valorDesejado="1.000" valorAtingido="0.150"></BodyVaquinha>
            </div>
            <div className="body-content-vaquinha">
                <BodyVaquinha imgVaquinha={ImgVaquinha03} titulo="Ajuda para a Alice" 
                descricao="Necessitamos de uma Doação para ajudar com os custos da cirurgia."
                valorDesejado="1.000" valorAtingido="0.150"></BodyVaquinha>
            </div>
            <div className="body-content-vaquinha">
                <BodyVaquinha imgVaquinha={ImgVaquinha03} titulo="Ajuda para a Alice" 
                descricao="Necessitamos de uma Doação para ajudar com os custos da cirurgia."
                valorDesejado="1.000" valorAtingido="0.150"></BodyVaquinha>
            </div>
        </div>
    );
}

export default Body;