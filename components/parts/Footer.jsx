import React, { Component /* , PropTypes */ } from 'react';

import Config from 'Config';

import Icon from 'parts/Icon';
import Brand from 'parts/Brand';

export default class Footer extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    return (
      <footer>
        <Brand />
        <p className="made-with">Made with <Icon name="heart" /> in Victoria, BC</p>
        <ul className="social">
          {Config.sociallinks.map((link, i) =>
            <li key={i}>
              <a href={link.href} data-tooltip={link.tooltip} target="_blank" rel="noopener noreferrer external">
                <Icon name={link.icon} />
              </a>
            </li>
          )}
        </ul>
      </footer>
    );
  }
}
