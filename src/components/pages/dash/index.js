import React, { Component } from 'react'
import {Container,Card,Col, Row,ListGroup  } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import { Link } from "react-router-dom";
import  api from "../../../service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faChartPie, faChartArea, faEye } from '@fortawesome/free-solid-svg-icons'

import Lottie from 'lottie-react-web';
import animation from '../../../animation/drawkit-grape-animation-7-LOOP.json';


import './style.css'




export default class Dash extends Component {

    state = {
        nome: '',
        email: '',
        token:'',
        idCliente:'',
        dataProj : [],        
        ProjFin: 0,
        ProjAb: 0,
        TicketsAb:0
    }

    pegaId= async(email,token)=>{
        
      await api.get('/usuario/idCliente/'+email+'/'+token).then(response=>{
            this.setState({
                idCliente:response.data[0].idcliente
            })
            this.pegaProjetos(response.data[0].idcliente)
        }).catch(e=>{
             console.log(e);
        })   
    }

    pegaProjetos = async(idCliente)=>{
        await api.get('/projeto/'+idCliente).then(response=>{
            var Finalizado = response.data.filter(data => data.status == 'Finalizado')
            var Andamento = response.data.filter(data => data.status != 'Finalizado')

            console.log(response)
            this.setState({
                dataProj:response.data,
                ProjFin:Finalizado.length,
                ProjAb: Andamento.length
            })
            
        }).catch(e=>{
             console.log(e);
        })  
    }

    pegaTickets = ()=>{
        
    }

    componentDidMount(){
        const nome = localStorage.getItem('nome')
        const email = localStorage.getItem('login')
        const token = localStorage.getItem('token')
        this.setState({
            nome: nome,
            email: email,
            token: token
        })
        this.pegaId(email,token)
        this.pegaTickets()


    }


    render() {
        return (
            <div style={{marginTop:'66px', display:'flex'}}>
                <Topo
                    pagina="Dashboard"
                />
                <Sidebar className=" d-none d-md-block"/>
                <Container className="corpo">
                   <div className="TituloTopoCorpo">Bem vindo { this.state.nome }</div>
                   <div style={{display:'flex',flexWrap:'wrap'}}>
                       <div className="cardHome">
                           <div>Projetos Finalizados</div>
                           <div style={{display:'flex',alignItems:'center'}}>
                               <div><FontAwesomeIcon icon={faChartBar} color="white" className={ "iconeDashCard"}/></div>
                               <div className={'textoValorcard'}>{this.state.ProjFin}</div>
                           </div>
                       </div>
                       <div className="cardHome">
                            <div>Projetos em aberto</div>
                            <div style={{display:'flex',alignItems:'center'}}>
                               <div><FontAwesomeIcon icon={faChartPie} color="white" className={ "iconeDashCard"}/></div>
                               <div className={'textoValorcard'}>{this.state.ProjAb}</div>
                           </div>
                       </div>
                       <div className="cardHome">
                            <div>Chamados em aberto</div>
                            <div style={{display:'flex',alignItems:'center'}}>
                               <div><FontAwesomeIcon icon={faChartArea} color="white" className={ "iconeDashCard"}/></div>
                               <div className={'textoValorcard'}>{this.state.TicketsAb}</div>
                           </div>
                       </div>
                   </div>
                   <div style={{marginTop:30}}></div>
                   <Row>
                       <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        {
                                            this.state.dataProj.map((resultado,i)=>{
                                                return(
                                                    <ListGroup.Item key={i}>
                                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                            <div>{resultado.nome}</div>
                                                            <div>
                                                                <Link to={"/visualizarproj/"+resultado.id} className="removeStilo">
                                                                    <FontAwesomeIcon icon={faEye} color="white" className={""}/>
                                                                </Link>
                                                            </div>                                            
                                                        </div>
                                                    </ListGroup.Item>
                                                )
                                            })
                                        }
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
