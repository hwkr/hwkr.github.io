import React from 'react';

import Icon from 'parts/Icon';

// Images
const Logo = require('img/portfolio/socialcompass/logo-color.svg');
const ChiselLogo = require('img/portfolio/socialcompass/chisel-logo.svg');
const placeholder = require('img/portfolio/placeholder.svg');

export default {
  title: 'Social Compass',
  id: 'social-compass',
  hero:
    <div className="columns col-center">
      <div className="column col-12">
        <h1 className="col-8 col-md-12">
          <img alt="Social Compass" src={Logo} />
          <img className="made-with" alt="The CHISEL Group" src={ChiselLogo} />
        </h1>
      </div>
      <div className="read-more">
        <a className="btn btn-link btn-more">Read more<br /><Icon name="arrow-down" /></a>
      </div>
    </div>,
  sections: [
    {
      id: 'problem',
      title: 'The Problem',
      content:
        <div className="columns col-md">
          <div className="column col-6">
            <img src={placeholder} />
          </div>
          <div className="column col-6 flex flex-center">
            Blurb
          </div>
        </div>,
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
  ],
};
