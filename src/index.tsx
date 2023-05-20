import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
