import React, { Component } from 'react'
import {Container,Col, Row,Form,Button  } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faFolderOpen, faFolder} from '@fortawesome/free-solid-svg-icons'

import Lottie from 'lottie-react-web';
import animation from '../../../animation/drawkit-grape-animation-1-LOOP.json';

import "animate.css"

import './style.css'

export default class Novoprojeto extends Component {
    render() {
        return (
            <div style={{marginTop:'66px', display:'flex'}}>
                <Topo
                    pagina="Meus Projetos"
                />
                <Sidebar/>
                <Container className="corpo">
                   <div className="TituloTopoCorpo">Criar Novo</div>
                   <Row>
                       <Col md={6}>
                            <div className="cardMeusProjetos">
                                <Form className='formProj'>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Logo" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Control placeholder="Nome do projeto" />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Data entrega" type="date" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label></Form.Label>
                                                <Form.Control as="textarea" rows="8" placeholder="Descritipo do projeto"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button className="btnWFSAlvar"  type="submit">
                                        <FontAwesomeIcon icon={faCloud} className={"iconeBtnSalvar"}/> Salvar
                                    </Button>
                                </Form>
                            </div>
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
