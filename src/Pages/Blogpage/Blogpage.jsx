import { Helmet } from "react-helmet-async";
import {Link} from 'react-router-dom';
import "./Blogpage.css";

function Blogpage() {
  return (
    <>
      <Helmet>
        <title>Resources — EU Withdraw</title>
        <meta
          name="description"
          content="Practical articles about EU contract withdrawal workflows for online merchants."
        />
      </Helmet>
      <main>
        <section className="blog-hero">
          <div className="section-shell">
            <span className="kicker">EU Withdraw resources</span>
            <h1>Build a clearer withdrawal workflow.</h1>
            <p>
              Practical, source-linked guidance for Shopify teams managing
              customer declarations, review decisions, and audit records.
            </p>
          </div>
        </section>
        <section className="blog-list">
          <div className="section-shell">
            <div className="article-grid">
              <article className="article-card">
                <Link
                  className="article-visual visual-deadline"
                  to="/blog/eu-14-day-withdrawal-period"
                >
                  <span>14</span>
                  <small>days</small>
                  <i></i>
                </Link>
                <div className="article-content">
                  <span className="article-tag">EU consumer rights</span>
                  <h3>
                    <Link to="/blog/eu-14-day-withdrawal-period">
                      The EU 14-day withdrawal period: an operational guide for
                      online stores
                    </Link>
                  </h3>
                  <p>
                    When the period starts, what a customer declaration means,
                    and how to preserve evidence through review.
                  </p>
                  <div className="article-meta">
                    <span>8 min read</span>
                    <Link to="/blog/eu-14-day-withdrawal-period">
                      Read guide →
                    </Link>
                  </div>
                </div>
              </article>
              <article className="article-card">
                <Link
                  className="article-visual visual-exceptions"
                  to="/blog/withdrawal-right-exceptions"
                >
                  <span>
                    Not every
                    <br />
                    order
                  </span>
                  <i>≠</i>
                </Link>
                <div className="article-content">
                  <span className="article-tag">Eligibility</span>
                  <h3>
                    <Link to="/blog/withdrawal-right-exceptions">
                      Common exceptions to the right of withdrawal
                    </Link>
                  </h3>
                  <p>
                    Personalised goods, digital content, dated services,
                    perishables, and other categories that may need careful
                    review.
                  </p>
                  <div className="article-meta">
                    <span>6 min read</span>
                    <Link to="/blog/withdrawal-right-exceptions">
                      Read guide →
                    </Link>
                  </div>
                </div>
              </article>
              <article className="article-card">
                <Link
                  className="article-visual visual-audit"
                  to="/blog/withdrawal-audit-trail"
                >
                  <span>Request</span>
                  <b>Review</b>
                  <strong>Decision</strong>
                </Link>
                <div className="article-content">
                  <span className="article-tag">Operations</span>
                  <h3>
                    <Link to="/blog/withdrawal-audit-trail">
                      What a useful withdrawal audit trail should record
                    </Link>
                  </h3>
                  <p>
                    A practical checklist for declarations, timestamps, staff
                    decisions, notifications, and immutable event history.
                  </p>
                  <div className="article-meta">
                    <span>7 min read</span>
                    <Link to="/blog/withdrawal-audit-trail">Read guide →</Link>
                  </div>
                </div>
              </article>
            </div>
            <div className="blog-note">
              <strong>Important:</strong> These articles are general educational
              information, not legal advice. EU rules can interact with national
              laws, contract terms, product categories, and individual
              circumstances. Consult qualified counsel for your store.
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Blogpage;
