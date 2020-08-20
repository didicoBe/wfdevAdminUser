import React, { Component } from 'react'
import {Container,Col, Row,ProgressBar  } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import  api from "../../../service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faCaretSquareUp} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'


import "animate.css"

import './style.css'

export default class VisualizarProj extends Component {

    state={
        data:[],
        historico: [],
        idCliente: ''
    }
    pegaId= async(email,token)=>{
        
        await api.get('/usuario/idCliente/'+email+'/'+token).then(response=>{
              this.setState({
                  idCliente:response.data[0].idcliente
              })
              this.pegadadosProj(response.data[0].idcliente)
              this.pegahistoricoProj(response.data[0].idcliente)
          }).catch(e=>{
               console.log(e);
          })   
      }

    pegadadosProj = async(idcliente)=>{
        //projeto/unico/{id}
        const idProj  = this.props.match.params.id
        await api.get('/projeto/unico/'+idProj+'/'+idcliente).then(response=>{
            this.setState({
                data:response.data[0],
            })
            
        }).catch(e=>{
             console.log(e);
        })  
    }

    pegahistoricoProj = async(idcliente)=>{
        const idProj  = this.props.match.params.id
        await api.get('/projeto-historico/'+idProj+'/'+idcliente).then(response=>{
            this.setState({
                historico:response.data,
            })
            
        }).catch(e=>{
             console.log(e);
        })  
    }


    componentDidMount(){
        const email = localStorage.getItem('login')
        const token = localStorage.getItem('token')
        this.pegaId(email,token)
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
                           <a href={this.state.data.github} style={{textDecoration:'none'}} target="_blank" rel="noreferrer">
                           <div className="cardMeusProjetos">
                                <div style={{display:'flex',alignItems:'center',padding:15,paddingLeft:25,paddingRight:25 }}>
                                    <div><FontAwesomeIcon icon={faGithub} color="white" className={ "iconeViCard"}/></div>
                                    <div className={'textoValorCardVisualizar'}>Visualizar GitHub</div>
                                </div>
                            </div>
                            </a>
                       </Col>
                       <Col md={4}>
                           <a href={this.state.data.GoogleDrive} style={{textDecoration:'none'}} target="_blank" rel="noreferrer">
                           <div className="cardMeusProjetos">
                                <div style={{display:'flex',alignItems:'center',padding:15,paddingLeft:25,paddingRight:25 }}>
                                    <div><FontAwesomeIcon icon={faGoogleDrive} color="white" className={ "iconeViCard"}/></div>
                                    <div className={'textoValorCardVisualizar'}>Visualizar Google Drive</div>
                                </div>
                            </div>
                            </a>
                       </Col>
                       <Col md={4}>
                           <a href={this.state.data.vercel} style={{textDecoration:'none'}} target="_blank" rel="noreferrer">
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

                                    { this.state.historico.map((response, i)=>{
                                        return(
                                            <div key={i}>
                                                <div style={{display:'flex', justifyContent:"space-between",fontWeight:900}}>
                                                <div>{response.status} - {response.usuarioSis}</div>
                                                    <div>{response.data}</div>
                                                </div>
                                                <div style={{marginTop:20}}>
                                                    {response.mensagem}
                                                </div>
                                                <hr/>
                                            </div>

                                        )


                                    })}
                                    
                                    

                                </div>
                                


                            </div>
                       </Col>
                   </Row>
                </Container>
                
            </div>
        )
    }
}
