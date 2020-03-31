import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Contatos from './pages/Contatos';
import Sociais from './pages/Sociais';
import Sobre from './pages/Sobre'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projetos" component={Projetos} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/contatos" component={Contatos} />
                <Route path="/sociais" component={Sociais} />
            </Switch>

        </BrowserRouter>

    );

}