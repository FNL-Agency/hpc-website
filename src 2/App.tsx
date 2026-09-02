import { useEffect } from 'react';
import { useLocation } from './router';
import Header from './components/Header';
import Footer from './components/Footer';
import { PAGE_TITLES } from './config/links';

import HomePage from './pages/Home';
import CampaignsPage from './pages/Campaigns';
import PricingPage from './pages/Pricing';
import WinsPage from './pages/Wins';
import ResourcesPage from './pages/Resources';
import AboutPage from './pages/About';
import ScorecardPage from './pages/Scorecard';

const ROUTES: Record<string, () => React.ReactElement> = {
  '/': HomePage,
  '/campaigns': CampaignsPage,
  '/pricing': PricingPage,
  '/wins': WinsPage,
  '/resources': ResourcesPage,
  '/about': AboutPage,
  '/scorecard': ScorecardPage,
};

export default function App() {
  const { pathname } = useLocation();

  // Trailing slashes and unknown paths both fall back to the homepage.
  const key = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const Page = ROUTES[key] ?? HomePage;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    document.title = PAGE_TITLES[key] ?? PAGE_TITLES['/'];
  }, [key]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <div id="main-content" />
      <Page />
      <Footer />
    </>
  );
}
