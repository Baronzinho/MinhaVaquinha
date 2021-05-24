import React from 'react';
import BaseBoard from '../BaseBoard/BaseBoard';
import './BodyCadastrar.css';

const BodyCadastrar = () => {
    return (
        <div className="bodycadastrar">
            <div className="bodycadastrar-img"></div>
            <div className="bodycadastrar-content">
                <div className="bodycadastrar-content-title">
                    <label>Cadastre-se</label>
                </div>
                <div className="bodycadastrar-content-user">
                    <input type="text" id="inputUsuarioCadastrar" placeholder="Nome"/>
                </div>
                <div className="bodycadastrar-content-email">
                    <input type="text" id="inputEmailCadastrar" placeholder="E-mail"/>
                </div>
                <div className="bodycadastrar-content-password">
                    <input type="text" id="inputSenhaCadastrar" placeholder="Senha"/>
                </div>
                <div className="bodycadastrar-content-cpassword">
                    <input type="text" id="inputCSenhaCadastrar" placeholder="Confirmar Senha"/>
                </div>
                <div className="bodycadastrar-content-cadastrar">
                    <input type="button" id="inputButtonCadastrar" value="Cadastrar"/>
                </div>
            </div>
            <BaseBoard></BaseBoard>
        </div>
    );
}

export default BodyCadastrar;