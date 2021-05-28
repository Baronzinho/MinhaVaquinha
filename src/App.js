import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import BodyLogar from './components/BodyLogar/BodyLogar';
import BodyCadastrar from './components/BodyCadastrar/BodyCadastrar';
import BodyCriarVaquinha from './components/BodyCriarVaquinha/BodyCriarVaquinha';
import BaseBoard from './components/BaseBoard/BaseBoard';
import BodyExplorar from './components/BodyExplorar/BodyExplorar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Body></Body>
          </Route>
          <Route path="/logar" exact>
            <BodyLogar></BodyLogar>
          </Route>
          <Route path="/cadastrar" exact>
            <BodyCadastrar></BodyCadastrar>
          </Route>
          <Route path="/criarvaquinha" exact>
            <BodyCriarVaquinha></BodyCriarVaquinha>
          </Route>
          <Route path="/explorar" exact>
            <BodyExplorar></BodyExplorar>
          </Route>
        </Switch>
        <BaseBoard></BaseBoard>
      </div>
    </BrowserRouter>
  );
}

export default App;
