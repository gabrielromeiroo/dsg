import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import '../../global.css';

import { FiArrowLeft } from 'react-icons/fi';


export default function Projetos(){
    
async function handleRegister(e){
    e.preventDefault();
}



    return (
        <div className="container">
            <div className="content">
                <div className="something"><a className="name">d</a><a className="name">o</a> <a className="name">s</a><a className="name">o</a><a className="name">m</a><a className="name">e</a><a className="name">t</a><a className="name">h</a><a className="name">i</a><a className="name">n</a><a className="name">g</a> <a className="name">g</a><a className="name">r</a><a className="name">e</a><a className="name">a</a><a className="name">t</a></div>
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