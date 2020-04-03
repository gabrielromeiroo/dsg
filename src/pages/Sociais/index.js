//Import
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import '../../global.css';
import Helmet from 'react-helmet';
//Page
export default function Sociais(){ 
    return (
        <div>
            <Helmet><title>DSG - Sociais</title></Helmet>
            <div className="container">
                <div className="content">
                    <div className="something">redes</div>
                    <div className="links">
                    <div><Link className="button" to="/">voltar</Link></div>            
                    </div>
                </div>
            </div>
        </div>
    );
}