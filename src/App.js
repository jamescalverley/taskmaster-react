import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import SideNav from './components/SideNav';
import ProjectDashboard from './components/ProjectDashboard';
import SettingsPage from './components/SettingsPage';
import MyTasksPage from './components/MyTasksPage';

function App() {
  return (
    <Router>
    <Header />
    <SideNav />
    <div className="main">
      <Route exact path="/projectdashboard" component={ProjectDashboard} />
      <Route exact path="/mytasks" component={MyTasksPage} />
      <Route exact path="/settings" component={SettingsPage} />
      
      
    </div>  
    
    
   
    
    </Router>
  );
}

export default App;
