import React from 'react';
import './BodyExplorar.css';
import BodyVaquinha from '../BodyVaquinha/BodyVaquinha';
import BodyVaquinhaLista from '../BodyVaquinhaLista/BodyVaquinhaLista';

import ImgVaquinha01 from '../../images/vaquinha_01.jpg';
import ImgVaquinha02 from '../../images/vaquinha_02.jpg';
import ImgVaquinha03 from '../../images/vaquinha_03.jpg';
import BaseBoard from '../BaseBoard/BaseBoard';

const BodyExplorar = () => {
    return (
        <div className="bodyexplorar-content">
            <div className="bodyexplorar-content-img"></div>
            <div className="bodyexplorar-content-buscar">
                <input type="text" id="inputTextBusca" placeholder="Pesquisar Vaquinhas..."/>
                <input type="button" id="inputButtonBusca" value="Buscar"/>
            </div>
            <div className="bodyexplorar-content-vaquinha-01">
                <BodyVaquinhaLista imgVaquinha={ImgVaquinha01} titulo="Ajuda para o Roberto" 
                descricao="Necessitamos de uma Doação para ajudar com os custos da cirurgia."
                valorDesejado="3.000" valorAtingido="2.000"></BodyVaquinhaLista>
            </div>
            <div className="bodyexplorar-content-vaquinha-02">
                <BodyVaquinhaLista imgVaquinha={ImgVaquinha02} titulo="Ajuda para o Jonas" 
                descricao="Necessitamos de uma Doação para ajudar com os custos da cirurgia."
                valorDesejado="50.000" valorAtingido="23.000"></BodyVaquinhaLista>
            </div>
            <div className="bodyexplorar-content-vaquinha-03">
                <BodyVaquinhaLista imgVaquinha={ImgVaquinha03} titulo="Ajuda para a Alice" 
                descricao="Necessitamos de uma Doação para ajudar com os custos da cirurgia."
                valorDesejado="1.000" valorAtingido="0.150"></BodyVaquinhaLista>
            </div>
            <BaseBoard></BaseBoard>
        </div>
    );
}

export default BodyExplorar;