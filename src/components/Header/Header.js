import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import imgHeader from '../../images/vaquinha.png';

const Header = () => {
    return (
        <header>
            <div className="header">
                <nav>
                    <ul>
                        <img src={imgHeader}/>
                        <a>MinhaVaquinha.com</a>
                        <li><NavLink to="/"><button>Inicio</button></NavLink></li>
                        <li><NavLink to="/explorar"><button>Explore</button></NavLink></li>
                        <li><NavLink to="/cadastrar"><button>Cadastre-se</button></NavLink></li>
                        <li><NavLink to="/logar"><button>Login</button></NavLink></li>
                        <li><NavLink to="/criarvaquinha"><input type="button" value="Criar Vaquinha" /></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;