import React from 'react';
import { Switch, Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import Home from '../home/Home';
import MyProfile from '../myProfile/MyProfile';
import AboutUs from '../aboutUs/AboutUs';
import './router.css'


class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navigation">
          <Link to="/">Home</Link>
          <Link to="/my-profile">MyProfile</Link>
          <Link to="/about-us">AboutUs</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-profile" component={MyProfile} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
