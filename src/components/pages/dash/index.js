import React, { Component } from 'react'
import {Container,Card,Col, Row,ListGroup  } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faChartPie, faChartArea, faEye } from '@fortawesome/free-solid-svg-icons'

import Lottie from 'lottie-react-web';
import animation from '../../../animation/drawkit-grape-animation-7-LOOP.json';


import './style.css'




export default class Dash extends Component {






    render() {
        return (
            <div style={{marginTop:'66px', display:'flex'}}>
                <Topo
                    pagina="Dashboard"
                />
                <Sidebar className=" d-none d-md-block"/>
                <Container className="corpo">
                   <div className="TituloTopoCorpo">Bem vindo Fulado</div>
                   <div style={{display:'flex',flexWrap:'wrap'}}>
                       <div className="cardHome">
                           <div>Projetos Finalizados</div>
                           <div style={{display:'flex',alignItems:'center'}}>
                               <div><FontAwesomeIcon icon={faChartBar} color="white" className={ "iconeDashCard"}/></div>
                               <div className={'textoValorcard'}>80</div>
                           </div>
                       </div>
                       <div className="cardHome">
                            <div>Projetos em aberto</div>
                            <div style={{display:'flex',alignItems:'center'}}>
                               <div><FontAwesomeIcon icon={faChartPie} color="white" className={ "iconeDashCard"}/></div>
                               <div className={'textoValorcard'}>80</div>
                           </div>
                       </div>
                       <div className="cardHome">
                            <div>Chamados em aberto</div>
                            <div style={{display:'flex',alignItems:'center'}}>
                               <div><FontAwesomeIcon icon={faChartArea} color="white" className={ "iconeDashCard"}/></div>
                               <div className={'textoValorcard'}>80</div>
                           </div>
                       </div>
                   </div>
                   <div style={{marginTop:30}}></div>
                   <Row>
                       <Col md={6}>
                            <Card>
                                <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroup.Item >
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Cras justo odio</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>                                            
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Dapibus ac facilisis in</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>
                                        </div>                                        
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Morbi leo risus</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>
                                        </div>
                                        
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Porta ac consectetur ac</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Cras justo odio</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>                                            
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Dapibus ac facilisis in</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>
                                        </div>                                        
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Morbi leo risus</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>
                                        </div>
                                        
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Porta ac consectetur ac</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Cras justo odio</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>                                            
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Dapibus ac facilisis in</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>
                                        </div>                                        
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div>Morbi leo risus</div>
                                            <div>
                                                <Link to="#" className="removeStilo">
                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                </Link>
                                            </div>
                                        </div>
                                        
                                    </ListGroup.Item>
                                </ListGroup>
                                </Card.Body>
                            </Card>
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
