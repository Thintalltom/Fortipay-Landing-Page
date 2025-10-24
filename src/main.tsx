import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HelmetProvider } from "react-helmet-async";
import { ContentfulProvider } from './contexts/ContentfulContext.tsx';
createRoot(document.getElementById('root')!).render(
  <ContentfulProvider>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </ContentfulProvider>,
)
