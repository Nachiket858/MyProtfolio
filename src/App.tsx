import SiteLayout from './components/SiteLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import { usePathname } from './components/simpleRouter';

function App() {
  const pathname = usePathname();

  const Page = (() => {
    if (pathname === '/about') return AboutPage;
    if (pathname === '/projects') return ProjectsPage;
    if (pathname === '/contact') return ContactPage;
    return HomePage;
  })();

  return (
    <SiteLayout>
      <Page />
    </SiteLayout>
  );
}

export default App;
