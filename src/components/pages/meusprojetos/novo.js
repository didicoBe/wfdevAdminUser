import React, { Component } from 'react'
import {Container,Col, Row,Form,Button  } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import  api from "../../../service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer ,toast } from "react-toastify";

import Lottie from 'lottie-react-web';
import animation from '../../../animation/drawkit-grape-animation-1-LOOP.json';

import "animate.css"

import './style.css'

export default class Novoprojeto extends Component {
    state = {
        logo: '',
        nomeproj: '',
        dataEntrega : '',
        descritivo: '',
        idCliente: ''
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
        const form = new FormData();

        form.set('idCliente',this.state.idCliente)
        form.set('nome',this.state.nomeproj)
        form.set('dataEntrega',this.state.dataEntrega)
        form.set('descritivo',this.state.descritivo)
        form.append('logo', document.getElementById("logo").files[0])
        const headers = { 
            'Content-Type': 'multipart/form-data' 
        };
       
        await api.post('http://wfdesenvolvimento.com.br/api/projeto', form,{headers})
            .then(response => {
                this.setState({
                    idCliente:'',
                    logo:'',
                    nomeproj: '',
                    dataEntrega: '',
                    descritivo: ''
                })
                toast.success('😁 Projeto salvo com sucesso!', {
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
                   <div className="TituloTopoCorpo">Criar Novo</div>
                   <Row>
                       <Col md={6}>
                            <div className="cardMeusProjetos">
                                <Form className='formProj'>
                                    <Form.Group>
                                        <Form.File id="logo" value={this.state.logo} onChange={(e)=>this.onChange(e)} name="logo" label="Logo" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Control id="nomeproj" value={this.state.nomeproj} onChange={(e)=>this.onChange(e)} name="nomeproj" placeholder="Nome do projeto" />
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Data entrega" value={this.state.dataEntrega} onChange={(e)=>this.onChange(e)} type="date" id="dataEntrega" name="dataEntrega" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label></Form.Label>
                                                <Form.Control as="textarea" rows="8" value={this.state.descritivo} onChange={(e)=>this.onChange(e)} id="descritivo" name="descritivo" placeholder="Descritipo do projeto"/>
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
