import './App.css';
import Body from './Body.js';
import Header from './Header.js'
import PokeDetail from './PokeDetail.js';
import Home from './Home.js';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
      <Route path="/pokemon/:id" component={PokeDetail} />
        <Route path="/pokemon" exact component={Body} />
        <Route path="/" exact component={Home} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
