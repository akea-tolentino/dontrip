import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css_reset.css'
import App from './App';
import { ModalProvider } from './components/context/Modal';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

//creates the store
const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
}



const Root = () => {
  return (
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
