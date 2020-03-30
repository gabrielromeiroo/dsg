import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
export default function Sobre(){
    const [id, setId] = useState();
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="content">
                <div className="something">sobre</div>
                <div className="links">
                <div><Link className="button" to="/">voltar</Link></div>
                            
                </div>
            </div>
        </div>

    );
}