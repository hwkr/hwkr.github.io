import React, { Component } from 'react';
import Helmet from 'react-helmet';


export default class SocialCompass extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Helmet title="Social Compass" />
        Hello World
      </div>
    );
  }
}
