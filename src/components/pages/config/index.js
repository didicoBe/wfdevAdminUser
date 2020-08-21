import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import {Container,Col, Row,Form,Button } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import  api from "../../../service";
import { ToastContainer ,toast } from "react-toastify";

export default class Config extends Component {
    state = {
        idCliente:'' ,
        data:[] ,
        avatar: '',
        login: '',
        senha:''
    }

    pegaId= async(email,token)=>{
        await api.get('/usuario/idCliente/'+email+'/'+token).then(response=>{
              this.setState({
                  idCliente:response.data[0].id
              })
              this.dadosCliente(response.data[0].idcliente)
            }).catch(e=>{
               console.log(e);
          })   
    }


    dadosCliente = async(idCliente)=>{
        //usuario/{idCliente}
        await api.get('/usuario/'+idCliente).then(response=>{
            
            this.setState({
                data:response.data[0],
                login:response.data[0].email,
                senha: response.data[0].senha
            })
            
            localStorage.setItem('avatar', response.data[0].avatar);
            
        }).catch(e=>{
             console.log(e);
        })  
    }


    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value

        })
    }

    async onSubmit(e) {
        const form = new FormData();

        form.set('id',this.state.idCliente)
        form.set('email',this.state.login)
        form.set('senha',this.state.senha)
        form.append('avatar', document.getElementById("avatar").files[0])
        const headers = { 
            'Content-Type': 'multipart/form-data' 
        };
       
        await api.post('http://wfdesenvolvimento.com.br/api/usuario/atualiza', form,{headers})
            .then(response => {
                toast.success('😁 Atualizado com sucesso!', {
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
        const nome = localStorage.getItem('nome')
        const email = localStorage.getItem('login')
        const token = localStorage.getItem('token')
        this.setState({
            nome: nome,
            email: email,
            token: token
        })
        this.pegaId(email,token)
    }




    render() {
        return (
            <div style={{marginTop:'66px', display:'flex'}}>
                <ToastContainer/>
                <Topo
                    pagina="Meus Dados"
                />
                <Sidebar/>
                <Container className="corpo">
                    <div className="TituloTopoCorpo">Nome: {this.state.nome} </div>
                    <Row>
                        <Col md={6}>
                            <div className="cardMeusProjetos">
                                <Form className='formProj'>
                                    <Form.Group>
                                        <Form.File id="avatar" value={this.state.avatar} onChange={(e)=>this.onChange(e)} name="avatar" label="avatar" />
                                    </Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Control id="login" value={this.state.login} onChange={(e)=>this.onChange(e)} name="login" placeholder="Nome do projeto" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group>
                                                <Form.Control type='password' id="senha" value={this.state.senha} onChange={(e)=>this.onChange(e)} name="senha" placeholder="Sua Senha" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button className="btnWFSAlvar"  onClick={(e)=>this.onSubmit(e)}>
                                        <FontAwesomeIcon icon={faCloud} className={"iconeBtnSalvar"}/> Atualizar
                                    </Button>
                                </Form>
                            </div>
                       </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
