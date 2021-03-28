import React from 'react';
import { render } from 'react-dom';

// import configureStore from './configureStore';
import { Provider } from 'react-redux';
import store from './store';

// import './theme/globalStyle.js';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

if (module.hot) {
  module.hot.accept('./components/App', renderApp)
}

renderApp()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
