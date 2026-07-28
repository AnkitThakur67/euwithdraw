import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-v2.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--header-height',
          `${headerRef.current.offsetHeight}px`
        );
      }
    };

    updateHeaderHeight();

    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };


  const handleHashClick = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);

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
    <>
    <header ref={headerRef}>
      <div className="site-header">
        <Link className="brand" to="/" aria-label="EU Withdraw home">
          <img className="brand-logo" src={logo } alt="EU Withdraw"/>
        </Link>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="/#features" onClick={(event) => handleHashClick(event, 'features')}>Features</a><a href="/#workflow" onClick={(event) => handleHashClick(event, 'workflow')}>How it works</a><a href="/#resources" onClick={(event) => handleHashClick(event, 'resources')}>Resources</a><a href="/#pricing" onClick={(event) => handleHashClick(event, 'pricing')}>Pricing</a><a href="/#faq" onClick={(event) => handleHashClick(event, 'faq')}>FAQ</a>
        </nav>
        <a className="button button-small button-outline" href="/#contact" onClick={(event) => handleHashClick(event, 'contact')}>Talk to us</a>
        <button className="menu-button" aria-label="Open menu" aria-expanded={menuOpen} onClick={handleMenuClick}><span></span><span></span></button>
      </div>
    </header>
    </>
  )
}

export default Header