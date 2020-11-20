import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import CodingChallengePage from './components/CodingChallengePage';
import GraphChallenge from './challenges/GraphChallenge';
import CipherChallenge from './challenges/CipherChallenge';
import CountDown from './challenges/CountDown';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/1'>
          <CodingChallengePage title='Første advent' Challenge={GraphChallenge} />
        </Route>
        <Route path='/2'>
          <CodingChallengePage title='Andre advent' Challenge={CipherChallenge} />
        </Route>
        <Route path='/3'>
          <CodingChallengePage title='Tredje advent' Challenge={CountDown} />
        </Route>
        <Route path='/4'>
          <CodingChallengePage title='Fjerde advent' Challenge={CountDown} />
        </Route>
        <Route path='/'>
          Velkommen til Netcompany's kodekalender 2020!
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
