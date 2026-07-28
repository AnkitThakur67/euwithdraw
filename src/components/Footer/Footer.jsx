
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoWhite from "../../assets/logo-white.png";

function Footer() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const handleHashClick = (event, id) => {
    event.preventDefault();

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    window.history.replaceState(null, '', `/#${id}`);
  };
  return (
    <footer>
      <div className="footer-main section-shell">
        <div>
          <Link className="brand footer-brand" to="/#top">
            <img className="brand-logo" src={LogoWhite} alt="EU Withdraw" />
          </Link>
          <p>Withdrawal operations for Shopify stores.</p>
        </div>
        <div>
          <strong>Product</strong>
          <Link to="/#features" onClick={(event) => handleHashClick(event, 'features')}>Features</Link>
          <Link to="/#workflow" onClick={(event) => handleHashClick(event, 'workflow')}>How it works</Link>
          <Link to="/#pricing" onClick={(event) => handleHashClick(event, 'pricing')}>Pricing</Link>
        </div>
        <div>
          <strong>Resources</strong>
          <Link to="/blog">Articles</Link>
          <Link to="/support">Support</Link>
          <Link to="/#contact" onClick={(event) => handleHashClick(event, 'contact')}>Contact</Link>
          <Link to="/#faq" onClick={(event) => handleHashClick(event, 'faq')}>FAQ</Link>
        </div>
        <div>
          <strong>Legal</strong>
          <Link to="/privacy">Privacy policy</Link>
          <Link to="/terms">Terms of service</Link>
        </div>
      </div>
      <div className="footer-bottom section-shell">
        <span>
          © <span id="year">{new Date().getFullYear()}</span> EU Withdraw. All rights reserved.
        </span>
        <span>Workflow software, not legal advice.</span>
      </div>
    </footer>
  );
}

export default Footer;
