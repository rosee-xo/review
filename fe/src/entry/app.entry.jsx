import 'style/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";

import store from "./script/redux/store";
import Page from 'script';

if (process.env.NODE_ENV === 'production') {
  __webpack_public_path__ = window.webpackPublicPath; // eslint-disable-line
}

const render = (Component) =>
  ReactDOM.render(
    <Provider store={store}>
      <Component />,
    </Provider>,
    document.getElementById('reactRoot')
  );

render(Page);
