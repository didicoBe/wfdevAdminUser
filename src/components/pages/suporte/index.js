import React, { Component } from 'react'
import {Container,Col, Row  } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTicketAlt, faCalendarCheck} from '@fortawesome/free-solid-svg-icons'

import Lottie from 'lottie-react-web';
import animation from '../../../animation/drawkit-grape-animation-4-LOOP.json';

import "animate.css"

import './style.css'

export default class Suporte extends Component {
    state={
        novo:'',
        aberto:'',
        fechado:''
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


    render() {
        return (
            <div style={{marginTop:'66px', display:'flex'}}>
                <Topo
                    pagina="Suporte"
                />
                <Sidebar/>
                <Container className="corpo">
                    <Row>
                        <Col md={3}>
                            <Link to="/novoticket" className={"removeStilo "} onMouseOver={()=>this.vamosanimar('novo')}  onMouseLeave={()=>this.pararanima('novo')}>
                                <div className="cardMeusProjetos" style={{marginTop:20}}>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <div><FontAwesomeIcon icon={faPlus} color="white" className={ this.state.novo+" iconeProjCard"}/></div>
                                        <div className={'textoValorcardProj'} style={{fontSize:23}}>Novo<br/>Ticket </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/ticketsemaberto" className={"removeStilo "} onMouseOver={()=>this.vamosanimar('aberto')}  onMouseLeave={()=>this.pararanima('aberto')}>
                                <div className="cardMeusProjetos" style={{marginTop:20}}>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <div><FontAwesomeIcon icon={faTicketAlt} color="white" className={ this.state.aberto+" iconeProjCard"}/></div>
                                        <div className={'textoValorcardProj'} style={{fontSize:23}}>Tickets<br/>Abertos </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/ticketsfinalizados" className={"removeStilo "} onMouseOver={()=>this.vamosanimar('fechado')}  onMouseLeave={()=>this.pararanima('fechado')}>
                                <div className="cardMeusProjetos" style={{marginTop:20}}>
                                    <div style={{display:'flex',alignItems:'center'}}>
                                        <div><FontAwesomeIcon icon={faCalendarCheck} color="white" className={ this.state.fechado+" iconeProjCard"}/></div>
                                        <div className={'textoValorcardProj'} style={{fontSize:23}}>Tickets<br/>Fechados </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={6}>
                            <Lottie
                                options={{
                                animationData: animation
                                }}
                            
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
