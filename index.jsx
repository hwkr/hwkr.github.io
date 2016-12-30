import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import ReactGA from 'react-ga';

import Config from 'Config';

/*
    Pages
*/

import App from 'App';
import Home from 'pages/Home';
import PageNotFound from 'pages/PageNotFound';

import Portfolio from 'pages/portfolio';
import Project from 'pages/portfolio/Project';
import SocialCompass from 'pages/portfolio/SocialCompass';

import ExampleComponent from 'pages/ExampleComponent';
import ExampleTwoDeepComponent from 'pages/ExampleTwoDeepComponent';

import 'file-loader?name=page.js!page.js';
import 'styles/styles.less';
import 'font/hawkicon.font';

ReactGA.initialize(Config.tracking_id);


const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="example" mapMenuTitle="Example" component={ExampleComponent}>
      <Route path="two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
    </Route>
    <Route path="portfolio" mapMenuTitle="Portfolio" component={Portfolio}>
      <Route path="social-compass" mapMenuTitle="Social Compass" project={SocialCompass} component={Project} />
    </Route>

    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

render(
  <Router
    history={browserHistory}
    routes={routes}
    onUpdate={logPageView}
  />,
  document.getElementById('root')
);
