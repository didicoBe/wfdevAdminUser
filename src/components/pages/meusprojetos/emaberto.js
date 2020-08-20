import React, { Component } from 'react'
import {Container,Col, Row,Image, InputGroup ,FormControl,ListGroup } from 'react-bootstrap';
import Sidebar from "../../sidebar";
import Topo from "../../top";
import  api from "../../../service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen,  faSearch, faEye} from '@fortawesome/free-solid-svg-icons'
import Lottie from 'lottie-react-web';
import animation2 from '../../../animation/9513-preloader.json';

import SearchResults from 'react-filter-search';

import "animate.css"

import './style.css'

export default class ProjetosEmaberto extends Component {

    state ={
        value: '',
        data:[],
        loading:true
    }


    handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
      };

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
            var Andamento = response.data.filter(data => data.status !== 'Finalizado')
            this.setState({
                data:Andamento,
            })

            if(response.data.length > 0){
                this.setState({loading:false})
            }
            
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

        var loading = ''
        if(this.state.loading === true){
            loading =  
                    <div style={{width:150,margin:'auto'}}>
                        <Lottie
                            options={{
                            animationData: animation2
                            }}
                        />
                    </div>
        }



        return (
            <div style={{marginTop:'66px', display:'flex'}}>
                <Topo
                    pagina="Meus Projetos"
                />
                <Sidebar/>
                <Container className="corpo">
                   <div className="TituloTopoCorpo">Em aberto</div>
                   <Row>
                       <Col md={8}>
                            <div className="cardMeusProjetos">
                                <div style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                                    <div><FontAwesomeIcon icon={faFolderOpen} className={"iconeFormPRoj"}/></div>
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
                                        {loading}
                                        <SearchResults
                                            value={this.state.value}
                                            data={this.state.data}
                                            renderResults={results => (
                                                <div>
                                                {results.map(el => (
                                                    <ListGroup.Item key={el.id} >
                                                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                                            <div>{el.nome}</div>
                                                            <div style={{marginLeft:'-20%'}}>%{el.progresso}</div>
                                                            <div>
                                                                <Link to={"/visualizarproj/"+el.id} className="removeStilo">
                                                                    <FontAwesomeIcon icon={faEye} color="white" className={ ""}/>
                                                                </Link>
                                                            </div>                                            
                                                        </div>
                                                    </ListGroup.Item>
                                                ))}
                                                </div>
                                            )}
                                            />
                                        
                                    </ListGroup>
                                </div>
                                
                            </div>
                       </Col>
                       <Col md={4}>
                            <Image src="/img/meusprojlist.png" fluid />
                       </Col>
                   </Row>
                </Container>
                
            </div>
        )
    }
}
