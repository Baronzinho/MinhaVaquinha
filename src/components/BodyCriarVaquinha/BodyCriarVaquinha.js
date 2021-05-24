import React from 'react';
import BaseBoard from '../BaseBoard/BaseBoard';
import './BodyCriarVaquinha.css';

const BodyCriarVaquinha = () => {
    return (
        <div className="bodycriarvaquinha">
            <div className="bodycriarvaquinha-img"></div>
            <div className="bodycriarvaquinha-content">
                <div className="bodycriarvaquinha-content-title">
                    <label>Crie sua Vaquinha</label>
                </div>
                <div className="bodycriarvaquinha-content-titulo">
                    <input type="text" id="inputTituloCriar" placeholder="Título"/>
                </div>
                <div className="bodycriarvaquinha-content-descricao">
                    <input type="text" id="inputDescricaoCriar" placeholder="Descrição"/>
                </div>
                <div className="bodycriarvaquinha-content-valor">
                    <input type="text" id="inputValorCriar" placeholder="Valor Desejado"/>
                </div>
                <div className="bodycriarvaquinha-content-img">
                    <label for="inputImgCriar">Selecione uma imagem:</label>
                    <input type="file" id="inputImgCriar"/>
                </div>
                <div className="bodycriarvaquinha-content-criar">
                    <input type="button" id="inputButtonCriar" value="Criar Vaquinha"/>
                </div>
            </div>
            <BaseBoard></BaseBoard>
        </div>
    );
}

export default BodyCriarVaquinha;