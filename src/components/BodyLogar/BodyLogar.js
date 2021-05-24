import React from 'react';
import BaseBoard from '../BaseBoard/BaseBoard';
import './BodyLogar.css';

const BodyLogar = () => {
    return (
        <div className="bodylogar">
            <div className="bodylogar-img"></div>
            <div className="bodylogar-content">
                <div className="bodylogar-content-title">
                    <label>Login</label>
                </div>
                <div className="bodylogar-content-user">
                    <input type="text" id="inputUsuarioLogin" placeholder="E-mail"/>
                </div>
                <div className="bodylogar-content-password">
                    <input type="text" id="inputSenhaLogin" placeholder="Senha"/>
                </div>
                <div className="bodylogar-content-logar">
                    <input type="button" id="inputButtonLogar" value="Logar"/>
                    <input type="button" id="inputButtonEsqueciSenha" value="Esqueceu sua senha?"/>
                </div>
            </div>
            <BaseBoard></BaseBoard>
        </div>
    );
}

export default BodyLogar;