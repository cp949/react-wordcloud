import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App';
import Examples from './pages/Examples';
import Home from './pages/Home';
import './globals.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="examples" element={<Examples />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
