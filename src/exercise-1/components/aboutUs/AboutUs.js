import React from 'react';
import { Link } from 'react-router-dom';
import './aboutUs.css';

class AboutUs extends React.Component {
  render() {
    return <div className="content">
      <p className="about-p">
        <span>Compang: ThoughtWorks Local</span>
        <span>Location: Xi'an</span>
      </p>
      <p className="about-p">
        <span>For more information, please</span>
        <span>view our&nbsp;    
          <Link to="/" className="website">website.</Link>
        </span>
      </p>

    </div>
  }
}
export default AboutUs;
