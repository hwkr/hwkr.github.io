import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import Icon from 'parts/Icon';


export default class Portfolio extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet title="Portfolio" />
        {children || (
          <div className="columns col-center">
            <div className="column col-6">
              <div className="empty">
                <Icon name="briefcase" size={4} />
                <p className="empty-title">Portfolio coming soon!</p>
                <p className="empty-meta">I know, I'm excited too.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
