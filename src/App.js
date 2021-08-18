
import AskForName from './components/askForName';
import Questions from './components/questions';
import NotFound from './components/notFound';
import Score from './components/score';



import {Route, Switch, Redirect} from 'react-router-dom';

import './App.css';

function App() {
  return (

                    <div className="container">
                          <Switch>
                                <Route path='/questions' component={Questions} />
                                <Route path='/score' exact component={Score} />
                                <Route path='/not-found'  component={NotFound} />
                                <Route path='/' exact component={AskForName} />
                                <Redirect to='/not-found' />

                          </Switch>





                    </div>

  );
}

export default App;
