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



const Routes = ()=>(
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/dash" component={Dash}></Route> 
                <Route exact path="/meusprojetos" component={Meusprojetos}></Route>   
                <Route exact path="/novoprojeto" component={Novoprojeto}></Route>  
                <Route exact path="/projetosemaberto" component={ProjetosEmaberto}></Route>   
                <Route exact path="/projetosconcluidos" component={ConcluidosProjetos}></Route>  
                <Route exact path="/visualizarproj/:id" component={VisualizarProj}></Route> 
                <Route exact path="/suporte" component={Suporte}></Route>        
                <Route exact path="/novoticket" component={Novoticket}></Route>   
                <Route exact path="/ticketsemaberto" component={TicketsEmaberto}></Route>   
                <Route exact path="/ticketsfinalizados" component={TicketsFinalizados}></Route>    
            </Switch>
        </BrowserRouter>
    </div>
);



export default Routes;