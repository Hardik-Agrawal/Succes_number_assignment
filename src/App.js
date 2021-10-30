import React from 'react';
import { NavBar } from './components/Nav';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import { CustomerInfo } from './components/customerInfo.js';
import { SearchCustomer } from './components/searchCustomer.js';
import { Home } from './components/Home.js';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route path="/customer-info" component={CustomerInfo} />
          <Route path="/search-customer" component={SearchCustomer} />

        </Switch>
    </Router>

    
    </div>
  );
}

export default App;
