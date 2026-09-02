import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from './router';
import App from './App';

/* The HPC design system is self-contained — it carries its own reset and does
   not use Tailwind utilities, so it works with or without Tailwind loaded.

   If you want Tailwind utility classes available (for example because Lovable
   starts using them when you ask it for changes), add this line ABOVE the
   import below, pointing at whichever stylesheet holds your Tailwind setup:

       import './index.css';

   Order matters: Tailwind first, HPC design system second. */
import './hpc-design-system.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>
);
