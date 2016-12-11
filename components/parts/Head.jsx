import React, { Component /* , PropTypes */ } from 'react';
import Helmet from 'react-helmet';

import Config from 'Config';

export default class Head extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getIcons = () => {
    const sizes = [16, 32, 96, 230];
    return sizes.map((size) =>
      ({
        rel: 'icon',
        type: 'image/png',
        sizes: `${size}x${size}`,
        href: `/dist/icons/favicon-${size}x${size}.png`,
      })
    );
  }

  getAndroidIcons = () => {
    const sizes = [36, 48, 72, 96, 144, 192, 256, 384, 512];
    return sizes.map((size) =>
      ({
        rel: 'icon',
        type: 'image/png',
        sizes: `${size}x${size}`,
        href: `/dist/icons/android-chrome-${size}x${size}.png`,
      })
    );
  }

  getAppleIcons = () => {
    const sizes = [57, 60, 72, 76, 114, 120, 144, 152, 180];
    return sizes.map((size) =>
      ({
        rel: 'apple-touch-icon',
        sizes: `${size}x${size}`,
        href: `/dist/icons/apple-touch-icon-${size}x${size}.png`,
      })
    );
  }

  render() {
    return (
      <Helmet
        htmlAttributes={{ lang: 'en', amp: undefined }} // amp takes no value
        titleTemplate={`%s – ${Config.title}`}
        defaultTitle={Config.title}
        meta={[
          { property: 'mobile-web-app-capable', content: 'yes' },
          { property: 'application-name', content: Config.title },
        ]}
        link={[
          { rel: 'shortcut icon', href: '/dist/icons/favicon.ico' },
          ...this.getIcons(),
          ...this.getAndroidIcons(),
          ...this.getAppleIcons(),
        ]}
      />
    );
  }
}
