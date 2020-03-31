import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import Helmet from 'react-helmet';
export default function Home(){
    async function handleLogin(e){e.preventDefault();}
    return (
    <div>
        <Helmet>
            <title>DSG - Portfolio</title>
        </Helmet>
        <div className="container">
            <div className="content">
                <div className="something">do something great</div>
                <div className="links">
                <div><Link className="button" to="/sobre">sobre</Link></div>
                <div><Link className="button" to="/projetos">projetos</Link></div>
                <div><Link className="button" to="/contatos">contato</Link></div>
                <div><Link className="button" to="/sociais">mídia</Link></div>
                            
                </div>
            </div>
        </div>
    </div>
    );
}