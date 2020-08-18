import React, { Component } from 'react'
import {Container,Col, Row,Form,Button,Image, InputGroup ,FormControl,ListGroup } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt,  faSearch, faEye} from '@fortawesome/free-solid-svg-icons'

import Lottie from 'lottie-react-web';
import animation from '../../../animation/drawkit-grape-animation-9-LOOP.json';


import SearchResults from 'react-filter-search';

import "animate.css"

import './style.css'

export default class TicketsEmaberto extends Component {

    state ={
        value: ''
    }


    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
      };




    render() {
        return (
            <div style={{marginTop:'66px', display:'flex'}}>
                <Topo
                    pagina="Meus Projetos"
                />
                <Sidebar/>
                <Container className="corpo">
                   <div className="TituloTopoCorpo">Tickets em aberto</div>
                   <Row>
                       <Col md={8}>
                            <div className="cardMeusProjetos">
                                <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                                    <div><FontAwesomeIcon icon={faTicketAlt} className={"iconeFormPRoj"}/></div>
                                    <div>
                                        <InputGroup className="col-md-8 float-right">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch} style={{fontSize:25}}/></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                                placeholder="pesquisar"
                                                aria-label="pesquisar"
                                                aria-describedby="basic-addon1"
                                                value={this.state.value} onChange={this.handleChange}
                                                style={{borderRadius:5}}
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                                <div style={{display:'flex',justifyContent:'space-between', alignItems:'center',marginTop:25, marginBottom:25}}>
                                    <div style={{marginLeft:15}}>Nome</div>
                                    <div>Stauts</div>
                                    <div style={{marginRight:15}}>Ver</div>
                                </div>
                                <div>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item >
                                            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                <div>Cras justo odio</div>
                                                <div style={{marginLeft:'-17%'}}>Aberto</div>
                                                <div>
                                                    <Link to="#" className="removeStilo">
                                                        <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                    </Link>
                                                </div>                                            
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item >
                                            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                <div>Cras justo odio</div>
                                                <div style={{marginLeft:'-17%'}}>Aberto</div>
                                                <div>
                                                    <Link to="#" className="removeStilo">
                                                        <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                    </Link>
                                                </div>                                            
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item >
                                            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                <div>Cras justo odio</div>
                                                <div style={{marginLeft:'-17%'}}>Aberto</div>
                                                <div>
                                                    <Link to="#" className="removeStilo">
                                                        <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                    </Link>
                                                </div>                                            
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item >
                                            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                <div>Cras justo odio</div>
                                                <div style={{marginLeft:'-17%'}}>Aberto</div>
                                                <div>
                                                    <Link to="#" className="removeStilo">
                                                        <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                    </Link>
                                                </div>                                            
                                            </div>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                                
                            </div>
                       </Col>
                       <Col md={4}>
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
