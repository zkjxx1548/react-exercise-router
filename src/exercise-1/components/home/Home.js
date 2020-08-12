import React from 'react';
import './home.css';
import '../router/router.css';

class Home extends React.Component {
  render() {
    return <div className="content">
    <p>This is a beautiful Home Page.</p>
    <p className="url">And the url is '/'.</p>
  </div>
  }
}
export default Home;
