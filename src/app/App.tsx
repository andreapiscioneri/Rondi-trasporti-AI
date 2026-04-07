import { RouterProvider } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import { LangProvider } from './context/LangContext';
import { router } from './routes';
import '../styles/fonts.css';

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <RouterProvider router={router} />
      </LangProvider>
    </ThemeProvider>
  );
}
