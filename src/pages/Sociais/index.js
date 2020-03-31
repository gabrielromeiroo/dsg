import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Helmet from 'react-helmet';


export default function Sociais(){
    async function handleLogin(e){e.preventDefault();}
    return (
    <div>
        <Helmet>
            <tile>DSG - Sociais</tile>
        </Helmet>
        <div className="container">
            <div className="content">
                <div className="something">sociais</div>
                <div className="links">
                <div><Link className="button" to="/">voltar</Link></div>
                            
                </div>
            </div>
        </div>
    </div>
    );
}