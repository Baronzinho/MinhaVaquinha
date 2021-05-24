import React from 'react';
import './BaseBoard.css';
import imgHeader from '../../images/vaquinha.png';

const BaseBoard = () => {
    return (
        <footer className="baseboard-content">
            <a className="baseboard-content-title-01">MinhaVaquinha.com</a>
            <img src={imgHeader}/>
            <a className="baseboard-content-title-02">Todos os Direitos Reservados ©2021</a>
        </footer>
    );
}

export default BaseBoard;