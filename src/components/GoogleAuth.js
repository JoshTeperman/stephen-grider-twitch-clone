import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '678314474445-ik7b0btj5b2anvbq0d68d04av8lvne53.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
