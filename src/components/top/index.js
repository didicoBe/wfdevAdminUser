import React, { Component } from 'react'
import {Navbar , Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

import "./style.css"

export default class Topo extends Component {
    render() {
        return (
            <div>
                <Navbar className="pretoTopo" expand="lg" fixed="top">
                    <Navbar.Brand href="/dash">
                        <Image src="/img/LogoNEGATIVO2.png" fluid style={{maxHeight:'55px',marginLeft:90}}/>
                    </Navbar.Brand>
                    <div className="TituloTopo">{this.props.pagina}</div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="usuarioTopo">
                            <Link to='#'>
                                <FontAwesomeIcon icon={faBell} color="white" className="configTopo" />
                            </Link>   
                        </Navbar.Text>
                        <Navbar.Text className="usuarioTopo">
                            <Link to='#'>
                                <div >
                                    <img src="https://bain.design/wp-content/uploads/2013/03/People-Avatar-Set-Rectangular-13.jpg" className="avatar"/>
                                </div>
                            </Link>   
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

