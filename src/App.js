import './App.css';
import './Component.css';
import React from 'react';
import Home from './components/HomePage';
import About from './components/About';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import NotesTab from './components/NotesTab';
import Login from './components/Login';
import Signup from './components/Signup';

const App = (props) => {
  return (
    <div>
      <NoteState>
      <Router>
        <Navbar title="iNotebook" />
        {/* <Alert message="Hello Alert" alertType="alert-success"/> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/notestab">
            <NotesTab />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
      </NoteState>
    </div>
  )
}

export default App;