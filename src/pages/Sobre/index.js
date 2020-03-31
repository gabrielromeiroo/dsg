import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
import Helmet from 'react-helmet';
export default function Sobre(){
    const [id, setId] = useState();
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();
    }
    return (
    <div>
        <Helmet>
            <title>DSG - Sobre</title>
        </Helmet>
        <div className="container">
            <div className="content">
                <div className="something">sobre</div>
                <div className="links">
                <div><Link className="button" to="/">voltar</Link></div>
                            
                </div>
            </div>
        </div>
    </div>
    );
}