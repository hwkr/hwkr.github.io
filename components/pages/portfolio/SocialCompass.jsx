import React from 'react';

import Icon from 'parts/Icon';
import { Link } from 'react-scroll';

// Images
const Logo = require('img/portfolio/socialcompass/logo-color.svg');
const ChiselLogo = require('img/portfolio/socialcompass/chisel-logo.svg');
const socialmap = require('img/portfolio/socialcompass/social-map.png');
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
      content:
        <div className="columns cols-lg">
          <div className="column col-md-12 col-6">
            <img src={socialmap} alt="A Map of Social Media" className="img-fill" />
          </div>
          <div className="column col-md-12 col-6 flex flex-center">
            <div className="column col-sm-12 col-8">
              <p>SocialCompass aims to help analysts navigate data and discover insights.</p>
              <p>SocialCompass builds on many of the concepts and ideas used in existing social media analytics tools but provides a more bottom-up and interactive approach for exploring large data sets.</p>
            </div>
          </div>
        </div>,
    },
    {
      id: 'review',
      title: 'Market Research',
      content: <div />,
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
