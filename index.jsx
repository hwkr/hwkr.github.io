import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import ReactGA from 'react-ga';

import Config from 'Config';

import App from 'App';
import Home from 'pages/Home';
import PageNotFound from 'pages/PageNotFound';
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
