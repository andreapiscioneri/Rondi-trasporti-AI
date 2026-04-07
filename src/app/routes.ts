import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { Servizi } from './pages/Servizi';
import { Sostenibilita } from './pages/Sostenibilita';
import { Storia } from './pages/Storia';
import { LavoraConNoi } from './pages/LavoraConNoi';
import { Whistleblowing } from './pages/Whistleblowing';
import { Contatti } from './pages/Contatti';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'servizi', Component: Servizi },
      { path: 'sostenibilita', Component: Sostenibilita },
      { path: 'storia', Component: Storia },
      { path: 'lavora-con-noi', Component: LavoraConNoi },
      { path: 'whistleblowing', Component: Whistleblowing },
      { path: 'contatti', Component: Contatti },
      { path: '*', Component: NotFound },
    ],
  },
]);
