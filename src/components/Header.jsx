import { useState, useEffect } from 'react';
import { Link } from './Router';
import logoimage from '../../public/logoimage.svg';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`site-header ${isScrolled || mobileMenuOpen ? 'scrolled' : 'transparent'}`} id="site-header">
      <div className="header-inner">
        <div className="site-logo">
          <Link href="/" aria-label="Orionstellar Home">
            <img
            src={logoimage}
              // src="https://cloud.orionstellar.com/wp-content/uploads/2025/05/logo-orionsteller-1.svg"
              alt="Orionstellar"
              width="185"
              height="27"
            />
          </Link>
        </div>

        <nav className="site-nav desktop-nav" aria-label="Main menu">
          <ul>
            <li><Link href="/vps-hosting">VPS Hosting</Link></li>
            <li><Link href="/dedicated-hosting">Dedicated Hosting</Link></li>
            <li><Link href="/cloud-services">Cloud Solutions</Link></li>
            <li><Link href="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>

        <button
          className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile menu">
          <ul>
            <li><Link href="/vps-hosting" onClick={() => setMobileMenuOpen(false)}>VPS Hosting</Link></li>
            <li><Link href="/dedicated-hosting" onClick={() => setMobileMenuOpen(false)}>Dedicated Hosting</Link></li>
            <li><Link href="/cloud-services" onClick={() => setMobileMenuOpen(false)}>Cloud Solutions</Link></li>
            <li><Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;

