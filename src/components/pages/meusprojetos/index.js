import React, { Component } from 'react'
import {Container,Col, Row  } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faFolderOpen, faFolder} from '@fortawesome/free-solid-svg-icons'

import Lottie from 'lottie-react-web';
import animation from '../../../animation/drawkit-grape-animation-2-LOOP.json';

import "animate.css"

import './style.css'

export default class Meusprojetos extends Component {

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
                    pagina="Meus Projetos"
                />
                <Sidebar/>
                <Container className="corpo">
                    <Row>
                        <Col md={3} style={{marginTop:15}}>
                            <Link to="/novoprojeto" className={"removeStilo "} onMouseOver={()=>this.vamosanimar('novo')}  onMouseLeave={()=>this.pararanima('novo')}>
                            <div className="cardMeusProjetos">
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <div><FontAwesomeIcon icon={faPlus} color="white" className={ this.state.novo+" iconeProjCard"}/></div>
                                    <div className={'textoValorcardProj'}>Criar<br/>Novo </div>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col md={3} style={{marginTop:15}}>
                            <Link to="/projetosemaberto" className={"removeStilo "} onMouseOver={()=>this.vamosanimar('aberto')}  onMouseLeave={()=>this.pararanima('aberto')}>
                            <div className="cardMeusProjetos" >
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <div><FontAwesomeIcon icon={faFolderOpen} color="white" className={ this.state.aberto+" iconeProjCard"}/></div>
                                    <div className={'textoValorcardProj'}>Em<br/>Aberto</div>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col md={3} style={{marginTop:15}}>
                            <Link to="/projetosconcluidos" className={"removeStilo "} onMouseOver={()=>this.vamosanimar('fechado')}  onMouseLeave={()=>this.pararanima('fechado')}>
                            <div className="cardMeusProjetos">
                                <div style={{display:'flex',alignItems:'center'}}>
                                    <div><FontAwesomeIcon icon={faFolder} color="white" className={ this.state.fechado+" iconeProjCard"}/></div>
                                    <div className={'textoValorcardProj'} style={{fontSize:18}}>Concluidos</div>
                                </div>
                            </div>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={7}  style={{marginTop:'5px'}}>
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
