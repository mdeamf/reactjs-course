import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Personagem from './Personagem'

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={App}></Route>
      <Route path="/personagem/:id" component={Personagem}></Route>
    </Router>
  );
}

export default Routes;
