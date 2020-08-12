import React from 'react';
import { Switch, Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import Home from '../home/Home';
import MyProfile from '../myProfile/MyProfile';
import AboutUs from '../aboutUs/AboutUs';
import './router.css'

class Router extends React.Component {
  state = {
    textDecorationHome: '',
    textDecorationMyProfile: '',
    textDecorationAboutUs: ''
  }

  handleHome = () => {
    this.setState({
      textDecorationHome: 'none',
      textDecorationMyProfile: '',
      textDecorationAboutUs: ''
    })
  }

  handleMyProfile = () => {
    this.setState({
      textDecorationHome: '',
      textDecorationMyProfile: 'none',
      textDecorationAboutUs: ''
    })
  }

  handleAboutUs = () => {
    this.setState({
      textDecorationHome: '',
      textDecorationMyProfile: '',
      textDecorationAboutUs: 'none'
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="navigation">
          <Link to="/" style={{textDecoration: this.state.textDecorationHome}} onClick={this.handleHome}>Home</Link>
          <Link to="/my-profile" style={{textDecoration: this.state.textDecorationMyProfile}} onClick={this.handleMyProfile} >MyProfile</Link>
          <Link to="/about-us" style={{textDecoration: this.state.textDecorationAboutUs}} onClick={this.handleAboutUs} >AboutUs</Link>
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
