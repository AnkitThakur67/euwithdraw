import { Link, useLocation, useNavigate } from 'react-router-dom';
function FinalCTA() {
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
    <section className="final-cta section-shell reveal">
      <div>
        <span className="kicker light">A better withdrawal workflow</span>
        <h2>Give every request a clear next step.</h2>
        <p>
          Bring customer declarations, merchant review, communication, and audit
          history into one focused workspace.
        </p>
      </div>
      <Link className="button button-light" to="/#contact" onClick={(e) => handleHashClick(e,'contact')}>
        Talk to our team <span>→</span>
      </Link>
    </section>
  );
}

export default FinalCTA;
