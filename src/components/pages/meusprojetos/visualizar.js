import React, { Component } from 'react'
import {Container,Col, Row,Form,ProgressBar  } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import { Link } from "react-router-dom";
import  api from "../../../service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCaretSquareUp, faFolder} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'


import "animate.css"

import './style.css'

export default class VisualizarProj extends Component {

    state={
        data:[]
    }


    pegadadosProj = async()=>{
        //projeto/unico/{id}
        const idProj  = this.props.match.params.id
        await api.get('/projeto/unico/'+idProj).then(response=>{
           
            console.log(response.data[0])
            this.setState({
                data:response.data[0],
            })
            
        }).catch(e=>{
             console.log(e);
        })  
    }


    componentDidMount(){
        this.pegadadosProj()
    }


    render() {
        return (
            <div style={{marginTop:'66px', display:'flex'}}>
                <Topo
                    pagina="Meus Projetos"
                />
                <Sidebar/>
                <Container className="corpo">
                   <div className="TituloTopoCorpo" style={{marginBottom:25}}>Projeto - {this.state.data.nome}</div>
                   <Row>
                       <Col md={4}>
                           <a href={this.state.data.github} style={{textDecoration:'none'}} target="_blank">
                           <div className="cardMeusProjetos">
                                <div style={{display:'flex',alignItems:'center',padding:15,paddingLeft:25,paddingRight:25 }}>
                                    <div><FontAwesomeIcon icon={faGithub} color="white" className={ "iconeViCard"}/></div>
                                    <div className={'textoValorCardVisualizar'}>Visualizar GitHub</div>
                                </div>
                            </div>
                            </a>
                       </Col>
                       <Col md={4}>
                           <a href={this.state.data.GoogleDrive} style={{textDecoration:'none'}} target="_blank">
                           <div className="cardMeusProjetos">
                                <div style={{display:'flex',alignItems:'center',padding:15,paddingLeft:25,paddingRight:25 }}>
                                    <div><FontAwesomeIcon icon={faGoogleDrive} color="white" className={ "iconeViCard"}/></div>
                                    <div className={'textoValorCardVisualizar'}>Visualizar Google Drive</div>
                                </div>
                            </div>
                            </a>
                       </Col>
                       <Col md={4}>
                           <a href={this.state.data.vercel} style={{textDecoration:'none'}} target="_blank">
                           <div className="cardMeusProjetos">
                                <div style={{display:'flex',alignItems:'center',padding:15,paddingLeft:25,paddingRight:25 }}>
                                    <div><FontAwesomeIcon icon={faCaretSquareUp} color="white" className={ "iconeViCard"}/></div>
                                    <div className={'textoValorCardVisualizar'}>Visualizar Vercel</div>
                                </div>
                            </div>
                            </a>
                       </Col>
                   </Row>
                   <Row>
                       <Col md={12}>
                            <div><h6 style={{color:'#a397a5',marginTop:25}}>Progresso</h6></div>
                            <ProgressBar now={this.state.data.progresso} label={`${this.state.data.progresso}%`} />
                       </Col>
                   </Row>
                   <Row>
                       {/* site e data entrega */}
                       <Col md={2}>
                           <div style={{marginTop:25, textAlign:'center'}}>
                                <a href={this.state.data.urlDominio} style={{textDecoration:'none'}} target="_blank">
                                    <div style={{fontSize:12,color:'#a397a5',marginBottom:5}}>Visite o site</div>
                                    <FontAwesomeIcon icon={faLaptopCode} color="#a397a5" style={{fontSize:50}} />
                                </a>
                           </div>
                           <div style={{marginTop:25, textAlign:'center'}}>
                                <div style={{fontSize:12,color:'#a397a5',marginBottom:5}}>Data entrega</div>
                                <div style={{color:'#a397a5',marginBottom:5}}>{this.state.data.dataEntrega}</div>
                            </div>
                       </Col>
                       
                       {/* descritivo do projeto */}
                       <Col md={4}>
                           <div style={{marginTop:25,color:'#a397a5'}}>Sobre o projeto</div>
                           <div className="cxVisualizar">    
                               {this.state.data.descritivo}
                           </div>
                       </Col>

                       {/* Historico do projeto */}
                       <Col md={6}>
                            <div style={{marginTop:25,color:'#a397a5'}}>Histórico</div>
                            <div className="cxVisualizar" >    
                                <div style={{overflow:'overlay',maxHeight:300,paddingRight:25}} id='style-2'>


                                    <div>
                                        <div style={{display:'flex', justifyContent:"space-between",fontWeight:900}}>
                                            <div>Titulo - usuarios</div>
                                            <div>20/08/2020</div>
                                        </div>
                                        <div style={{marginTop:20}}>
                                            alskjdlaksjdkajlkasjdlasjlaskjaksjaslkd
                                        </div>
                                        <hr/>
                                    </div>
                                    

                                </div>
                                


                            </div>
                       </Col>
                   </Row>
                </Container>
                
            </div>
        )
    }
}
