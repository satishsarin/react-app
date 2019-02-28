import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './component/layout/Header';
import Todo from './component/todos/Todo';
import Home from './component/Home';


class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Router>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/todo" component={Todo} />
              <Route render = {() => { return "Not found path"}} exact/>
            </Switch>
        </Router>
     </div>
    )
  }
}

export default App;