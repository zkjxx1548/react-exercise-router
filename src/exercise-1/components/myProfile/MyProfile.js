import React from 'react';
import '../router/router.css';
import './myProfile.css';

class MyProfile extends React.Component {
  render() {
    return <div className="content user">
      <span>Username: XXX</span>
      <span>Gender: Female</span>
      <span>Work: IT Industry</span>
      <span>Website: '/my-profile'</span>
    </div>
  }
}
export default MyProfile;
