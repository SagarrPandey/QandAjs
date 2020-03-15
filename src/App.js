import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Pages/homePage';
import QandA from './Pages/QandAPage';
import Answer from './Pages/answerPage';
import User from './Pages/userPage';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
        <Route exact path="/" component="Home"><Home/></Route>
        <Route exact path="/QandA" component="QandA"><QandA/></Route>
        <Route exact path="/Answer" component="Answer"><Answer/></Route>
        <Route exact path="/user" component="User"><User/></Route>
        </Switch>
      </Router>
    );
  }
 
}

export default App;
