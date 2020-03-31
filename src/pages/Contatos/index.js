import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import '../../global.css';
import Helmet from 'react-helmet';


export default function Contatos(){
    
async function handleRegister(e){
    e.preventDefault();
}



    return (
    <div>
        <Helmet>
            <title>DSG - Contatos</title>
        </Helmet>
        <div className="container">
            <div className="content">
                <div className="something">contatos</div>
                <div className="links">
                <div><Link className="button" to="/">voltar</Link></div>
                            
                </div>
            </div>
        </div>
    </div>
    );
}