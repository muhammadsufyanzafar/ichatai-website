import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';

const params = new URLSearchParams(window.location.search);
const redirectPath = params.get('p');

if (redirectPath) {
  const normalizedPath = redirectPath.startsWith('/') ? redirectPath : `/${redirectPath}`;
  window.history.replaceState(null, '', normalizedPath);
}

createRoot(document.getElementById('root')!).render(<App />);
