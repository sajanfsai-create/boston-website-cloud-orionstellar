import { Link } from './Router';
import logoimage from '../../public/logoimage.svg';

function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <Link href="/" aria-label="Orionstellar Home">
            <img
              src={logoimage}
              alt="Orionstellar"
              width="185"
              height="27"
            />
          </Link>
        </div>
        <p className="footer-copyright">All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
