//Import
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import '../../global.css';
import Helmet from 'react-helmet';
//Page
export default function Sobre(){
    return (
        <div>
            <Helmet><title>DSG - Sobre</title></Helmet>
            <div className="container">
                <div className="content">
                    <div className="something">sobre</div>
                    <p>Faça algo grande</p><p> Criada em 2020 como suporte para o projeto Ficha Resumo, de resumos para vestibulares, atualmente atua em outras áreas como publicidade, curadoria e com o novo projeto DivideApe, uma plataforma que conecta pessoas que procuram um espaço para dividir com pessoas que tem esse espaço</p>
                    <p></p>
                    <div className="links">
                    <div><Link className="button" to="/">voltar</Link></div>            
                    </div>
                </div>
            </div>
        </div>
    );
}