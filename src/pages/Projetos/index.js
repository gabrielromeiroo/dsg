//Import
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import '../../global.css';
import Helmet from 'react-helmet';
//Page
export default function Projetos(){
    return (
        <div>
            <Helmet  ><title>DSG - Projetos</title></Helmet>
            <div className="container">
                <div className="content">
                    <div className="something">projetos</div>
                    <div className="links">
                    <div><Link className="button" to="/">voltar</Link></div>            
                    </div>
                </div>
            </div>
        </div>
    );
}