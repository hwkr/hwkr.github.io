import React from 'react';

import Icon from 'parts/Icon';
import { Link } from 'react-scroll';

// Images
const Logo = require('img/portfolio/socialcompass/logo-color.svg');
const ChiselLogo = require('img/portfolio/socialcompass/chisel-logo.svg');
const socialgraph = require('img/portfolio/socialcompass/social-graph.svg');
// const placeholder = require('img/portfolio/placeholder.svg');

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
        <Link className="btn btn-link btn-more" to="front-matter" smooth>Read more<br /><Icon name="arrow-down" /></Link>
      </div>
    </div>,
  frontmatter:
    <div className="flex flex-justify-center">
      <div className="column col-gutterless col-sm-12 col-8">
        <p>SocialCompass aims to help analysts navigate data and discover insights.</p>
        <p>SocialCompass builds on many of the concepts and ideas used in existing social media analytics tools but provides a more bottom-up and interactive approach for exploring large data sets.</p>
      </div>
    </div>,
  sections: [
    {
      id: 'problem',
      title: 'The Problem',
      tight: true,
      content:
        <div className="columns problem fill-full-page" style={{ backgroundImage: `url(${socialgraph})` }}>
          <div className="column col-md-12 col-6" />
          <div className="column col-md-12 col-6 flex flex-center">
            <div className="column col-md-12 col-10">
              <p>SocialCompass aims to help analysts navigate data and discover insights.</p>
              <p>SocialCompass builds on many of the concepts and ideas used in existing social media analytics tools but provides a more bottom-up and interactive approach for exploring large data sets.</p>
            </div>
          </div>
        </div>,
    },
    {
      id: 'review',
      title: 'Research',
      content:
        <div className="container">
          <div className="flex flex-center">
            <div>
              <h2 className="text-center">Market Research</h2>
              <p className="block-xs">We began by doing an analysis of current tools on the market being used by analysts to analyze social media and large data sets. We also looked at a number of prototype tools that were still in development.</p>
            </div>
          </div>
        </div>,
      subsections: [
        {
          id: 'tableau',
          title: 'Tableau',
          content:
            <div className="container">Tableau</div>,
        },
        {
          id: 'cascade',
          title: 'Cascade',
          content:
            <div className="container">Cascade</div>,
        },
        {
          id: 'palantir',
          title: 'Palantir',
          content:
            <div className="container">Palantir</div>,
        },
      ],
    },
    {
      id: 'design',
      title: 'Proposed Design',
      content:
        <div className="container">Proposed Design</div>,
      subsections: [
        {
          id: 'feedback',
          title: 'Instant Feedback',
          content:
            <div className="container">Instant Feedback</div>,
        },
        {
          id: 'user-driven',
          title: 'User-Driven Exploration',
          content:
            <div className="container">User Driven Exploration</div>,
        },
      ],
    },
    {
      id: 'forward',
      title: 'Looking Forward',
      content:
        <div className="container">Looking forward</div>,
    },
  ],
};
