import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faColumns, faTasks, faHandsHelping, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, Redirect } from "react-router-dom";
import  api from "../../service";

import "animate.css"


import './style.css'

export default class Sidebar extends Component {
    state = {
        dash : '',
        meus:'',
        sup:'',
        logado:true
    }


    vamosanimar = (e)=>{
        this.setState({
            [e]:'animate__animated  animate__bounceIn'
        })
    }

    pararanima = (e)=>{
        this.setState({
            [e]:''
        })
    }

    sair = async()=>{
       const login = localStorage.getItem('login');
       const token = localStorage.getItem('token');
        
       const retorno =  await api.get('/logout/'+login+'/'+token).then(response=>{
            localStorage.clear();
            this.setState({
                logado:false
            })
            
        }).catch(e=>{
             console.log(e);
            return false
        })

        
    }

   
    componentDidMount(){
        //this.validaOnline()
    }

    render() {
        return (
            <div className="sidebar  d-none d-md-block">
                {this.state.logado ? '' : <Redirect push to="/" />}
                <div className="line"></div>
                <div className="sidebar-int">
                    <div className="menu">
                        <ul>
                            <li onMouseOver={()=>this.vamosanimar('dash')}  onMouseLeave={()=>this.pararanima('dash')} >
                                <Link className="removeStilo" to="/dash">
                                    <FontAwesomeIcon icon={faColumns} color="white" className={ this.state.dash + " iconeSidebar"}/>Dashboard
                                </Link>                                
                            </li>
                            <li onMouseOver={()=>this.vamosanimar('meus')}  onMouseLeave={()=>this.pararanima('meus')}>
                                <Link className="removeStilo" to="/meusprojetos">
                                    <FontAwesomeIcon icon={faTasks} color="white" className={ this.state.meus+" iconeSidebar"}/>Meus Projetos
                                </Link>
                            </li>
                            <li onMouseOver={()=>this.vamosanimar('sup')}  onMouseLeave={()=>this.pararanima('sup')}>
                                <Link className="removeStilo" to="/suporte">
                                    <FontAwesomeIcon icon={faHandsHelping} color="white" className={ this.state.sup+" iconeSidebar"}/>Suporte
                                </Link>
                            </li>
                            <li onMouseOver={()=>this.vamosanimar('sair')}  onMouseLeave={()=>this.pararanima('sair')}>
                                <Link className="removeStilo" onClick={()=>this.sair()} to="#">
                                    <FontAwesomeIcon icon={faSignOutAlt} color="white" className={ this.state.sair+" iconeSidebar"}/>Sair
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copy">© Desenvolvido por WFDev 2020</div>
            </div>
        )
    }
}
