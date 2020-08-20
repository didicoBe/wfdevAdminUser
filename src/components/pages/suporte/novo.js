import React, { Component } from 'react'
import {Container,Col, Row,Form,Button  } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer ,toast } from "react-toastify";
import  api from "../../../service";

import Lottie from 'lottie-react-web';
import animation from '../../../animation/drawkit-grape-animation-6-LOOP.json';

import "animate.css"

import './style.css'

export default class Novoticket extends Component {

    state = {
        tipo:'Selecione o tipo *',
        descricao:''
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value

        })

    }
    

    pegaId= async(email,token)=>{
        
        await api.get('/usuario/idCliente/'+email+'/'+token).then(response=>{
              this.setState({
                  idCliente:response.data[0].idcliente
              })
              
          }).catch(e=>{
               console.log(e);
          })   
    }

    async onSubmit(e) {
        const dados = { 
            idCliente:this.state.idCliente,
            status:'Pendente',
            assunto:this.state.tipo,
            mensagem:this.state.descricao
        }

       
        await api.post('http://wfdesenvolvimento.com.br/api/suporte', dados)
            .then(response => {
                this.setState({
                    tipo:'',
                    descricao:''
                })
                toast.success('😁 Ticket solicitado com sucesso!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })

            })
            .catch(error => {
                toast.error('🥺 Erro ao enviar, veja se preencheu todos os campos obrigatórios!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                console.error('aqui', error);
            });


    }

    componentDidMount(){
        const email = localStorage.getItem('login')
        const token = localStorage.getItem('token')
        this.pegaId(email,token)
    }





    render() {
        return (
            <div style={{marginTop:'66px', display:'flex'}}>
                <ToastContainer/>
                <Topo
                    pagina="Meus Projetos"
                />
                <Sidebar/>
                <Container className="corpo">
                   <div className="TituloTopoCorpo">Criar Ticket</div>
                   <Row>
                       <Col md={6}>
                            <div className="cardMeusProjetos">
                                <Form className='formProj'>
                                    <Form.Control as="select" className={'col-md-6'} id="tipo"  name="tipo" onChange={(e)=>this.onChange(e)}>
                                        <option>Selecione o tipo *</option>
                                        <option>Suporte site</option>
                                        <option>Suporte loja virtual</option>
                                        <option>Suporte Sistema</option>
                                        <option>Suporte App</option>
                                        <option>Aplicação fora do ar</option>
                                        <option>Pedido de orçamento</option>
                                    </Form.Control>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label></Form.Label>
                                                <Form.Control as="textarea" rows="8" placeholder="Descritipo do suporte" id="descricao" value={this.state.descricao} onChange={(e)=>this.onChange(e)} name="descricao"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button className="btnWFSAlvar"  onClick={(e)=>this.onSubmit(e)}>
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
