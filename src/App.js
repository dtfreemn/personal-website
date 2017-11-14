import React from 'react';
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
import InfoContainer from './components/InfoContainer'
import Footer from './components/Footer'
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div id="top-background">
        <div className="main-wrapper">
          <Route path='/' render={(props) => <NavBar {...props} /> } />
          <Route path='/' render={(props) => <InfoContainer {...props} /> } />
          <Route path='/' render={(props) => <Footer {...props} /> } />
        </div>
      </div>
    );
  }
}

export default App;
