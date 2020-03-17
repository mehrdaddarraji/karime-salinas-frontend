import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import PageNotFound from './pages/PageNotFound';

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <div className="Site-header">
            {/* <Navbar history={this.props.history}/> */}
          </div>
          <div>
            {/* <Router> */}
              <div className="main">
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/about" component={About} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/portfolio" component={Portfolio} />

                  <Route path="*" component={PageNotFound} />
                </Switch>
              </div>
            {/* </Router> */}
          </div>
        </div>
        {/* <Footer /> */}
      </div>

    );
  }
}

export default withRouter(App);