import React, { Component } from 'react'
import {Navbar , Image,OverlayTrigger,Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,faColumns, faTasks, faHandsHelping, faSignOutAlt,faIdBadge, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import "./style.css"

export default class Topo extends Component {
    state = {
        expanded:false
    }

    handleClick = ()=>{
        this.setState({
            expanded:false
        })
    }

    componentDidMount(){
        document.body.addEventListener('click', this.handleClick);
    }




    render() {
        
        return (
            <div>
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

