import React from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends React.Component {
  render() {
    return <div>
      <p>
        <span>Compang: ThoughtWorks Local</span>
        <span>Location: Xi'an</span>
      </p>
      <p>
        <span>For more information, please</span>
        <span>view our </span>
        <Link to="/">website.</Link>
      </p>

    </div>
  }
}
export default AboutUs;
