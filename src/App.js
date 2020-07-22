import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dicas from './pages/Dicas';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Depoimentos from './pages/Depoimentos';
import Sobre from './pages/Sobre';
import Footer from './components/Footer/';
import  './App.css'

function App () {
  return (
    <div>
      <NavBar/>
    <Switch>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/dicas' component={Dicas} />
        <Route path='/servicos' component={Servicos} />
        <Route path='/depoimentos' component={Depoimentos} />
        <Route path='/sobre' component={Sobre} />
      </div>
    </Switch>
     <Footer/>
    </div>
  )
}
export default App;