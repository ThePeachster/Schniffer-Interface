import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import * as routes from './constants/route';
import DashboardActivity from "./Components/DashboardActivity";
import LoginActivity from "./Components/LoginActivity";
import About from "./Components/about";
import SpeedTestPage from './Components/SpeedTestPage';
import NetworkUsage from './Components/NetworkUsage';
import Navigation from './Components/Navigation';
import PrivateRoute from './Components/PrivateRoute';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true, 
      authenticated: false, 
      user: null
    };
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
 
    render() {
      const { authenticated, loading } = this.state;

      if (loading) {
        return <p>Loading..</p>;
      }
      return (
        <Router>
            <div className="total">
              <Navigation />
              <hr/>
              
              <PrivateRoute exact path="/" 
              component={DashboardActivity} 
              authenticated={this.state.authenticated}/>
              
              <PrivateRoute exact path="/speedtest" 
              component={SpeedTestPage} 
              authenticated={this.state.authenticated}/>
              
              <PrivateRoute exact path="/networkusage" 
              component={NetworkUsage} 
              authenticated={this.state.authenticated}/>
            
              <Route
                exact path={routes.SIGN_IN}
                component={() => <LoginActivity />}
              />
            
              <Route
                exact path={routes.ABOUT}
                component={() => <About />}
              />
            
            </div>
          </Router>
      )
    }
  }
