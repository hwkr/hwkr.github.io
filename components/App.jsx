import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import '../styles/main.less';

export default class Home extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    routes: PropTypes.array.isRequired,
  }


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  generateMapMenu = () => {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      this.props.routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  render() {
    return (
      <div>
        <h1>Single Page Apps for GitHub Pages</h1>
        <nav>
          {this.generateMapMenu()}
        </nav>
        {this.props.children}
      </div>
    );
  }
}
