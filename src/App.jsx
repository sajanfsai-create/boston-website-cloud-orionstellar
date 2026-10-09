import Header from './components/Header';
import Hero from './components/Hero';
import HostingPlans from './components/HostingPlans';
import PowerfulServices from './components/PowerfulServices';
import DataCenter from './components/DataCenter';
import Footer from './components/Footer';
import VPSHosting from './components/VPSHosting';
import DedicatedHosting from './components/DedicatedHosting';
import ContactUs from './components/ContactUs';
import CloudServices from './components/CloudServices';
import { RouterProvider, useRouter } from './components/Router';
import './App.css';


function AppContent() {
  const { path } = useRouter();

  const renderContent = () => {
    switch (path) {
      case '/vps-hosting':
        return <VPSHosting />;
      case '/dedicated-hosting':
        return <DedicatedHosting />;
      case '/cloud-services':
        return <CloudServices />;
      case '/contact-us':
        return <ContactUs />;
      default:
        return (
          <>
            <Hero />
            <HostingPlans />
            <PowerfulServices />
            <DataCenter />
          </>
        );
    }
  };

  return (
    <>
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;

