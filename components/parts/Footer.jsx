import React, { Component /* , PropTypes */ } from 'react';

import Brand from './Brand';

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
        <p className="made-with">Made with <i className="typcn typcn-heart" /> in Victoria, BC</p>
        <ul className="social">
          <li>Y</li>
          <li>E</li>
          <li>S</li>
        </ul>
      </footer>
    );
  }
}
