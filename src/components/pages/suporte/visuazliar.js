import React, { Component } from 'react'
import {Container,Col, Row } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import  api from "../../../service";

export default class Visuazliar extends Component {
    state = {
        historico: [],
        data:[]
    }

    pegaId= async(email,token)=>{
        
        await api.get('/usuario/idCliente/'+email+'/'+token).then(response=>{
              this.setState({
                  idCliente:response.data[0].idcliente
              })
              this.pegadadosTicket(response.data[0].idcliente)
              this.pegahistoricoTicket(response.data[0].idcliente)
          }).catch(e=>{
               console.log(e);
          })   
      }

    pegadadosTicket = async(idcliente)=>{
        //projeto/unico/{id}
        const idTicket  = this.props.match.params.id
        await api.get('/suporte/unico/'+idTicket+'/'+idcliente).then(response=>{
            this.setState({
                data:response.data[0],
            })
            
        }).catch(e=>{
             console.log(e);
        })  
    }

    pegahistoricoTicket = async(idcliente)=>{
        const idTicket  = this.props.match.params.id
        await api.get('/suporte-historico/'+idTicket+'/'+idcliente).then(response=>{
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
                <div className="TituloTopoCorpo">Ticket: N°{this.state.data.id} </div>
                <div className="TituloTopoCorpo">Status: {this.state.data.status} </div>
                    <Row>
                        <Col md={4}>
                            <div style={{fontSize:12,color:'#a397a5',marginBottom:5,marginTop:15}}>Descritivo da solicitação</div>
                            <div className="cxVisualizar">    
                               {this.state.data.mensagem}
                           </div>
                       </Col>
                       <Col md={6}>
                            <div style={{fontSize:12,color:'#a397a5',marginBottom:5,marginTop:15}}>Histórico</div>
                            <div className="cxVisualizar" >    
                                <div style={{overflow:'overlay',maxHeight:300,paddingRight:25}} id='style-2'>

                                    { this.state.historico.map((response, i)=>{
                                        return(
                                            <div key={i}>
                                                <div style={{display:'flex', justifyContent:"space-between",fontWeight:900}}>
                                                <div>{response.status} - {response.nomeUsuario}</div>
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
