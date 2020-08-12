import React from 'react';
import { Switch, Route } from 'react-router';
import { Link, BrowserRouter } from 'react-router-dom';
import Home from '../home/Home';
import MyProfile from '../myProfile/MyProfile';
import AboutUs from '../aboutUs/AboutUs';
import Products from '../products/Products';
import Details from '../products/Details';
import './router.css'

class Router extends React.Component {
  state = {
    textDecorationHome: '',
    textDecorationProducts: 'none',
    textDecorationMyProfile: 'none',
    textDecorationAboutUs: 'none'
    
  }

  handleHome = () => {
    this.setState({
      textDecorationHome: '',
      textDecorationProducts: 'none',
      textDecorationMyProfile: 'none',
      textDecorationAboutUs: 'none'
    })
  }

  handleProducts = () => {
    this.setState({
      textDecorationHome: 'none',
      textDecorationProducts: '',
      textDecorationMyProfile: 'none',
      textDecorationAboutUs: 'none'
    })
  }

  handleMyProfile = () => {
    this.setState({
      textDecorationHome: 'none',
      textDecorationProducts: 'none',
      textDecorationMyProfile: '',
      textDecorationAboutUs: 'none'
    })
  }

  handleAboutUs = () => {
    this.setState({
      textDecorationHome: 'none',
      textDecorationProducts: 'none',
      textDecorationMyProfile: 'none',
      textDecorationAboutUs: ''
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="navigation">
          <Link to="/" style={{textDecoration: this.state.textDecorationHome}} onClick={this.handleHome}>Home</Link>
          <Link to="/products" style={{textDecoration: this.state.textDecorationProducts}} onClick={this.handleProducts} >Products</Link>
          <Link to="/my-profile" style={{textDecoration: this.state.textDecorationMyProfile}} onClick={this.handleMyProfile} >MyProfile</Link>
          <Link to="/about-us" style={{textDecoration: this.state.textDecorationAboutUs}} onClick={this.handleAboutUs} handleHome={() => this.handleHome}>AboutUs</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={Details} />
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
