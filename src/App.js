import Chat from './Chat';
import React, {useState}from 'react';
import './App.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  // const [user,setUser] = useState(null)
  return (
    <div className="App">
    {!user?(
      <Login />
    ):(
      <div className="app_body">
        <Router>
        <Sidebar />
          <Switch>
            <Route  path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
            <Chat />
            </Route>
          </Switch>
        </Router>
      </div>)}
      
    </div>
  );
}

export default App;
