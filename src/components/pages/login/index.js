import React, { Component } from 'react';
import {Form, Button,Card } from 'react-bootstrap';
import  api from "../../../service";
import { ToastContainer ,toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import './style.css';

export default class Login extends Component {
    state={
        login:'',
        senha:'',
        token:'',
        logado:false
    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    login = async (e)=>{
        e.preventDefault()

        const body = {
            login: this.state.login,
            senha: this.state.senha 
        }
        
        await api.post('/login', body).then(response=>{
            localStorage.setItem('login', response.data.response[0].email);
            localStorage.setItem('token', response.data.response[0].token);
            localStorage.setItem('nome', response.data.response[0].nome);
            return(
                this.props.history.push('/dash')
            )
        }).catch((erro)=>{
                    
                    toast.error('🥺 Erro ao fazer login, verifique login e senha', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
        })


    }

    validaOnline = ()=>{
        const login = localStorage.getItem('login');
        const token = localStorage.getItem('token');
        const nome = localStorage.getItem('nome');

        var resposta = false

        
        if(login === null || token === null){
            this.setState({
                logado: false,
                nome:nome
            })

        }else{
            resposta = api.get('/login/valida/'+login+'/'+token).then(response=>{
                this.setState({
                    logado: true,
                    nome:nome
                })
                
                return  true
            }).catch((erro)=>{
                this.setState({
                    logado: false,
                    nome:nome
                })
                return false
            })
    
            
        }



        

       


 
    }


    componentDidMount(){
        this.validaOnline()
    }



  render() {


    if(this.state.logado === false){
        return (
            <div style={{paddingTop:'150px'}} className="fundo">
                <ToastContainer/>
                <div className="centroLogin">
                    <div>Área do Usuário</div>
                </div>
                <div className="centroLogin2">
                    <Card style={{width:300,boxShadow:'1px 1px 5px #00000059',border:0,borderRadius:10,backgroundColor:'rgb(255 255 255 / 0%)'}}>
                        <Card.Body style={{backgroundColor:'#b34a9fb5',borderRadius:10,border:0}}>
                            <Card.Title style={{textAlign:'center'}}>
                                <img src="/img/LogoNEGATIVO2.png" className='imgLogin' alt="WfDev" />
                            </Card.Title>
                            <div>
                                <Form onSubmit={(e)=>{this.login(e)}} style={{paddingLeft:15, paddingRight:15}}>
                                    <Form.Group >
                                        <Form.Control size="lg" type="email" placeholder="Login" name="login" id="login" onChange={(e)=>{this.onChange(e)}} />
                                    </Form.Group>
    
                                    <Form.Group >
                                        <Form.Control size="lg" type="password" placeholder="Senha"  name="senha" id="senha" onChange={(e)=>{this.onChange(e)}} />
                                    </Form.Group>
                                    <Button variant="secondary" className="btnWF" type="submit">
                                    Entrar
                                    </Button>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            
        
        );
    }else{
        this.props.history.push('/dash')
        return null
    }
    
  }
}
