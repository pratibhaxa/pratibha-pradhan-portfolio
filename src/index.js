import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route } from 'react-router-dom';
// import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WelcomePage from './WelcomePage';
import ProjectPage from './ProjectPage';
import WelcomePage2 from './WelcomePage2';
import HomePage from './HomePage';
// import App from './App';
// import Example from './Example';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' component={WelcomePage2} />
      <Route path='/welcome' component={WelcomePage} />
      <Route path='/home' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/project' component={ProjectPage} />
      <Route path='/welcome2' component={WelcomePage2} />
      {/* <Route path='/app' component={App} /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
