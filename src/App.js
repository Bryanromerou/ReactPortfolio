import './App.css';
import React from 'react';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education';
import Experience from './pages/Experience';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.active = "home";
  }

  render(){
    return (
      <Router>
        <Navbar/>

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/education">
            <Education />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer/>
      </Router>
    );
  }
}


export default App;
