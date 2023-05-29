import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/style.scss';
import App from './App';
import Modal from './components/Modal/Modal';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
      <Modal />
    </Provider>
  </HashRouter>
);
