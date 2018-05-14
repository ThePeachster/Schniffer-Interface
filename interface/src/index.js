import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashboardActivity from "./Components/DashboardActivity";
import LogInActivity from "./Components/LoginActivity";
import SignUpActivity from "./Components/SignUpActivity";
import NetworkMap from "./Components/NetworkMap";
import SpeedTest from './Components/SpeedTest';
import NetworkUsage from './Components/NetworkUsage';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyApnR_BwdtI_kK_IUSUX6w5xc_PX7wtlM0",
    authDomain: "schniffer-b635a.firebaseapp.com",
    databaseURL: "https://schniffer-b635a.firebaseio.com",
    projectId: "schniffer-b635a",
    storageBucket: "",
    messagingSenderId: "1032559053424"
  };
  firebase.initializeApp(config);

  ReactDOM.render((
    <Router>
      <div className="total">
        <App />
        <Route exact path='/' component={DashboardActivity}/>
          <Route path='/login' component={LogInActivity}/>
          <Route path='/signup' component={SignUpActivity}/>
          <Route path='/networkMap' component={NetworkMap}/>
          <Route path='/networkUsage' component={NetworkUsage}/>
          <Route path='/speedTest' component={SpeedTest}/>

      </div>    
    </Router>
  ), document.getElementById('root'))
  registerServiceWorker();
