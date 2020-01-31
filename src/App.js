import React,{Component} from 'react';
import './App.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';



class App extends Component {
  render() {
    return (
      <>
        
        <Router>
        <TutorialHeader/>
        <Content>
          <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/repos" component={RepoPage} />
          </Switch>
          
         
        </Content>

        </Router>
        
      </>
    );
  }
}

export default App;
