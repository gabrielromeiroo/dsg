import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';
export default function Home(){
    const [id, setId] = useState();
    const history = useHistory();
    async function handleLogin(e){
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="content">
                <div className="something">do something great</div>
                <div className="links">
                <div><Link className="button" to="/sobre">sobre</Link></div>
                <div><Link className="button" to="/projetos">projetos</Link></div>
                <div><Link className="button" to="/sobre">contato</Link></div>
                <div><Link className="button" to="/sobre">mídia</Link></div>
                            
                </div>
            </div>
        </div>

    );
}