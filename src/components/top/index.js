import React, { Component } from 'react'
import {Navbar , Image,OverlayTrigger,Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,faColumns, faTasks, faHandsHelping, faSignOutAlt,faIdBadge, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { Link, Redirect } from "react-router-dom";
import  api from "../../service";
import { ToastContainer ,toast } from "react-toastify";

import "./style.css"

export default class Topo extends Component {
    state = {
        expanded:false,
        nome:'',
        logado:true
    }

    handleClick = ()=>{
        this.setState({
            expanded:false
        })
    }

    componentDidMount(){
        this.validaOnline()
        document.body.addEventListener('click', this.handleClick);
    }

    validaOnline = ()=>{
        const login = localStorage.getItem('login');
        const token = localStorage.getItem('token');
        const nome = localStorage.getItem('nome');

        var resposta = false


        
        if(login === null || token === null){
            this.setState({
                logado: false,
                nome:nome
            })
        }else{
            resposta = api.get('/login/valida/'+login+'/'+token).then(response=>{
                this.setState({
                    logado: true,
                    nome:nome
                })
                
                return  true
            }).catch((erro)=>{
                this.setState({
                    logado: false,
                    nome:nome
                })
            })
    

            if(resposta === false){
                this.setState({
                    logado: false,
                    nome:nome
                })
            }
           
            
        }



        

       


 
    }


    


    render() {
        
        return (
            
            <div>
                {this.state.logado ?  '' : <Redirect push to="/" />}
                <Navbar className="pretoTopo" expand="lg" fixed="top" expanded={this.state.expanded}>
                    <Navbar.Brand href="/dash">
                        <Image src="/img/LogoNEGATIVO2.png" alt="WFDev" fluid className="meulogo"/>
                    </Navbar.Brand>
                    <div className="TituloTopo">{this.props.pagina}</div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={() => this.setState({expanded:  true})} />
                    <Navbar.Collapse className="justify-content-end" >
                        {/* mostra menu so no mobile */}
                        <Navbar.Text className="usuarioTopo d-md-none d-sm-block">
                            <div className="baseMenuMobile">
                                <div className="itemmenumobile">
                                    <Link to='/dash' style={{color:"#fff",display:'flex', alignItems:'center',flexWrap:'wrap'}}>
                                        <FontAwesomeIcon icon={faColumns} color="white" className="configTopo" /> Dashboard
                                    </Link> 
                                </div>
                                <div className="itemmenumobile">
                                    <Link to='#' style={{color:"#fff",display:'flex', alignItems:'center',flexWrap:'wrap'}}>
                                        <FontAwesomeIcon icon={faIdBadge} color="white" className="configTopo" /> Minha Conta
                                    </Link> 
                                </div>
                                <div className="itemmenumobile">
                                    <Link to='/meusprojetos' style={{color:"#fff",display:'flex', alignItems:'center',flexWrap:'wrap'}}>
                                        <FontAwesomeIcon icon={faTasks} color="white" className="configTopo" /> Meus Projetos
                                    </Link> 
                                </div>
                                <div className="itemmenumobile">
                                    <Link to='/suporte' style={{color:"#fff",display:'flex', alignItems:'center',flexWrap:'wrap'}}>
                                        <FontAwesomeIcon icon={faHandsHelping} color="white" className="configTopo" /> Suporte
                                    </Link>
                                </div>
                                <div className="itemmenumobile">
                                    <Link to='#' style={{color:"#fff",display:'flex', alignItems:'center',flexWrap:'wrap'}}>
                                        <FontAwesomeIcon icon={faSignOutAlt} color="white" className="configTopo" />Sair
                                    </Link>
                                </div>
                                  
                                
                                  
                                
                            </div>
                            
                        </Navbar.Text>
                       









                        <Navbar.Text className="usuarioTopo d-none d-md-block">
                            <div className="bolinhaAviso "></div>
                            <OverlayTrigger trigger="click" placement="bottom"  rootClose 
                                overlay={
                                    <Popover className="popoverTopo">
                                        <Link to='#' style={{color:"#fff",display:'flex', alignItems:'center',flexWrap:'wrap'}} >
                                            <FontAwesomeIcon icon={faExclamation} color="white" className="configTopo" /> Noticação
                                        </Link>
                                    </Popover>
                            }>
                                <FontAwesomeIcon icon={faBell} color="white" className="configTopo" />
                            </OverlayTrigger>   
                        </Navbar.Text>
                        <Navbar.Text className="usuarioTopo d-none d-md-block">
                            
                            <OverlayTrigger trigger="click" placement="bottom" rootClose 
                                overlay={
                                    <Popover className="popoverTopo">
                                        <Link to='#' style={{color:"#fff",display:'flex', alignItems:'center',flexWrap:'wrap'}} >
                                            <FontAwesomeIcon icon={faIdBadge} color="white" className="configTopo" /> Minha Conta
                                        </Link>
                                    </Popover>
                            }>
                                <div >
                                    <img alt='avatar' src="https://bain.design/wp-content/uploads/2013/03/People-Avatar-Set-Rectangular-13.jpg" className="avatar"/>
                                </div>
                            </OverlayTrigger>
                               
                            
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

