import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import LandingPage from './pages/LandingPage';
// import About from './pages/About';
import Contact from './pages/Contact';
import Piece from './pages/Piece';
import Portfolio from './pages/Portfolio';
import PageNotFound from './pages/PageNotFound';

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="Site-header">
            {/* <Navbar history={this.props.history}/> */}
            <Navbar />
          </div>
          <div>
            {/* <Router> */}
              <div className="main">
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  {/* <Route path="/about" component={About} /> */}
                  <Route path="/contact" component={Contact} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/portfolio/yruama" component={Piece} />
                  <Route exact path="/portfolio/tamagochi" component={Piece} />
                  <Route exact path="/portfolio/hindsvinyl" component={Piece} />

                  <Route path="*" component={PageNotFound} />
                </Switch>
              </div>
            {/* </Router> */}
          </div>
        </div>
        <Footer />
      </div>

    );
  }
}

export default withRouter(App);