import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Icon from 'parts/Icon';
import Portfolio from 'pages/portfolio';

const LogoSrc = require('img/portfolio/socialcompass/logo-color.svg');
const ChiselLogoSrc = require('img/portfolio/socialcompass/chisel-logo.svg');

export default class SocialCompass extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const sections = [
      {
        id: 'problem',
        title: 'The Problem',
        content: <div>Hello</div>,
      },
      {
        id: 'review',
        title: 'Market Research',
        content: <div>Hello</div>,
        subsections: [
          {
            id: 'tableau',
            title: 'Tableau',
            content: <div>Hello</div>,
          },
          {
            id: 'cascade',
            title: 'Cascade',
            content: <div>Hello</div>,
          },
          {
            id: 'palantir',
            title: 'Palantir',
            content: <div>Hello</div>,
          },
        ],
      },
      {
        id: 'design',
        title: 'Proposed Design',
        content: <div>Hello</div>,
        subsections: [
          {
            id: 'feedback',
            title: 'Instant Feedback',
            content: <div>Hello</div>,
          },
          {
            id: 'user-driven',
            title: 'User-Driven Exploration',
            content: <div>Hello</div>,
          },
        ],
      },
      {
        id: 'forward',
        title: 'Looking Forward',
        content: <div>Hello</div>,
      },
    ];

    return (
      <main className="social-compass">
        <Helmet title="Social Compass" />
        <section className="hero">
          <div className="col-12">
            <h1 className="col-8 col-md-12">
              <img alt="Social Compass" src={LogoSrc} />
              <img className="made-with" alt="The CHISEL Group" src={ChiselLogoSrc} />
            </h1>
          </div>
          <div className="read-more">
            <a className="btn btn-link btn-more">Read more<br /><Icon name="arrow-down" /></a>
          </div>
        </section>
        <section className="contents container " style={{ minHeight: '80vh' }}>
          <div className="columns cols-md">
            <div className="column col-12">
              <h2>Contents</h2>
            </div>
          </div>
          <div className="columns cols-md">
            <div className="column col-6">
              {Portfolio.tableOfContents(sections)}
            </div>
          </div>
        </section>
      </main>
    );
  }
}
