import {Link} from 'react-router-dom'

function Resources() {
  return (
    <section className="section resource-section" id="resources">
        <div className="section-shell">
          <div className="resource-heading reveal">
            <div className="section-heading"><span className="kicker">Withdrawal operations library</span><h2>Practical guidance for clearer customer workflows.</h2><p>Understand the operational side of withdrawal requests, common exceptions, and the records a review team should keep.</p></div>
            <Link className="text-link" to="/blog">Explore all articles <span>→</span></Link>
          </div>
          <div className="article-grid">
            <article className="article-card article-featured reveal">
              <Link className="article-visual visual-deadline" to="/blog/eu-14-day-withdrawal-period" aria-label="Read the 14-day withdrawal period article"><span>14</span><small>days</small><i></i></Link>
              <div className="article-content"><span className="article-tag">EU consumer rights</span><h3><Link to="/blog/eu-14-day-withdrawal-period">The EU 14-day withdrawal period: an operational guide for online stores</Link></h3><p>When the period starts, what a customer declaration means, and how to build a review process that preserves the right evidence.</p><div className="article-meta"><span>8 min read</span><Link to="/blog/eu-14-day-withdrawal-period">Read guide →</Link></div></div>
            </article>
            <article className="article-card reveal delay-1">
              <Link className="article-visual visual-exceptions" to="/blog/withdrawal-right-exceptions" aria-label="Read withdrawal exceptions article"><span>Not every<br />order</span><i>≠</i></Link>
              <div className="article-content"><span className="article-tag">Eligibility</span><h3><Link to="/blog/withdrawal-right-exceptions">Common exceptions to the right of withdrawal</Link></h3><p>Personalised goods, digital content, dated services, perishables, and other categories that may require careful review.</p><div className="article-meta"><span>6 min read</span><Link to="/blog/withdrawal-right-exceptions">Read guide →</Link></div></div>
            </article>
            <article className="article-card reveal delay-2">
              <Link className="article-visual visual-audit" to="/blog/withdrawal-audit-trail" aria-label="Read audit trail article"><span>Request</span><b>Review</b><strong>Decision</strong></Link>
              <div className="article-content"><span className="article-tag">Operations</span><h3><Link to="/blog/withdrawal-audit-trail">What a useful withdrawal audit trail should record</Link></h3><p>A practical checklist for timestamps, customer declarations, staff decisions, notifications, and immutable event history.</p><div className="article-meta"><span>7 min read</span><Link to="/blog/withdrawal-audit-trail">Read guide →</Link></div></div>
            </article>
          </div>
          <p className="resource-disclaimer">Educational content only. EU Withdraw is workflow software and does not provide legal advice. Rules can vary by contract, product, country, and circumstance.</p>
        </div>
      </section>
  );
}

export default Resources;