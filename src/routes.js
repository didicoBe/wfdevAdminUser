import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "./components/pages/login";
import Dash from "./components/pages/dash";
import Meusprojetos from "./components/pages/meusprojetos";
import Novoprojeto from "./components/pages/meusprojetos/novo";
import ProjetosEmaberto from "./components/pages/meusprojetos/emaberto";
import ConcluidosProjetos from "./components/pages/meusprojetos/concluidos";
import VisualizarProj from "./components/pages/meusprojetos/visualizar";
import Suporte from "./components/pages/suporte";
import Novoticket from "./components/pages/suporte/novo";
import TicketsEmaberto from "./components/pages/suporte/emaberto";
import TicketsFinalizados from "./components/pages/suporte/finalizados";
import TicketsVisualizar from "./components/pages/suporte/visuazliar";
import Config from "./components/pages/config";



const Routes = ()=>(
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/dash" component={Dash}></Route> 
                <Route path="/meusprojetos" component={Meusprojetos}></Route>   
                <Route path="/novoprojeto" component={Novoprojeto}></Route>  
                <Route path="/projetosemaberto" component={ProjetosEmaberto}></Route>   
                <Route path="/projetosconcluidos" component={ConcluidosProjetos}></Route>  
                <Route path="/visualizarproj/:id" component={VisualizarProj}></Route> 
                <Route path="/suporte" component={Suporte}></Route>        
                <Route path="/novoticket" component={Novoticket}></Route>   
                <Route path="/ticketsemaberto" component={TicketsEmaberto}></Route>   
                <Route path="/ticketsfinalizados" component={TicketsFinalizados}></Route>    
                <Route path="/ticketsvisualizar/:id" component={TicketsVisualizar}></Route>   
                <Route path="/config" component={Config}></Route>  
                
            </Switch>
        </BrowserRouter>
    </div>
);



export default Routes;