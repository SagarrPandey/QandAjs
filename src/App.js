import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './pages/homePage';
import QandA from './pages/QandAPage';
import Answer from './pages/answerPage';


class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
        <Route exact path="/" component="Home"><Home/></Route>
        <Route exact path="/QandA" component="QandA"><QandA/></Route>
        <Route exact path="/Answer" component="Answer"><Answer/></Route>
        </Switch>
      </Router>
    );
  }
 
}

export default App;
