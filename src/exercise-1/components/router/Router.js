import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import Home from '../home/Home';
import MyProfile from '../myProfile/MyProfile';
import AboutUs from '../aboutUs/AboutUs';
import './router.css'

class Router extends React.Component {
  state = {
    textDecorationHome: '',
    textDecorationMyProfile: 'none',
    textDecorationAboutUs: 'none'
  }

  handleHome = () => {
    this.setState({
      textDecorationHome: '',
      textDecorationMyProfile: 'none',
      textDecorationAboutUs: 'none'
    })
  }

  handleMyProfile = () => {
    this.setState({
      textDecorationHome: 'none',
      textDecorationMyProfile: '',
      textDecorationAboutUs: 'none'
    })
  }

  handleAboutUs = () => {
    this.setState({
      textDecorationHome: 'none',
      textDecorationMyProfile: 'none',
      textDecorationAboutUs: ''
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="navigation">
          <Link to="/" style={{textDecoration: this.state.textDecorationHome}} onClick={this.handleHome}>Home</Link>
          <Link to="/my-profile" style={{textDecoration: this.state.textDecorationMyProfile}} onClick={this.handleMyProfile} >MyProfile</Link>
          <Link to="/about-us" style={{textDecoration: this.state.textDecorationAboutUs}} onClick={this.handleAboutUs} handleHome={() => this.handleHome}>AboutUs</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-profile" component={MyProfile} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    // return <Redirect to="/" />
  }
}
export default Router;
