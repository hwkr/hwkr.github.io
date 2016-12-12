import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Icon from 'parts/Icon';

const LogoSrc = require('img/portfolio/socialcompass/logo-color.svg');
const ChiselLogoSrc = require('img/portfolio/socialcompass/chisel-logo.svg');

export default class SocialCompass extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <main className="social-compass">
        <Helmet title="Social Compass" />
        <div className="hero">
          <div className="col-12">
            <h1 className="col-8 col-md-12">
              <img alt="Social Compass" src={LogoSrc} />
              <img className="made-with" alt="The CHISEL Group" src={ChiselLogoSrc} />
            </h1>
          </div>
          <div className="read-more">
            <a className="btn btn-link btn-more">Read more<br /><Icon name="arrow-down" /></a>
          </div>
        </div>
      </main>
    );
  }
}
