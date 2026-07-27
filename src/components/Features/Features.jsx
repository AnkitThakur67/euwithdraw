function Features() {
  return (
    <section className="section section-shell" id="features">
        <div className="section-heading reveal"><span className="kicker">One connected workspace</span><h2>Everything your team needs to handle withdrawals responsibly.</h2><p>From the first customer declaration to the final merchant decision, every step stays organised and visible.</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-wide reveal"><div className="icon-box">↗</div><span className="kicker">Customer experience</span><h3>A guided storefront portal</h3><p>Add a withdrawal link to your Shopify theme and let customers securely find an order, choose full or partial withdrawal, review their declaration, and receive a timestamped reference.</p><div className="portal-mock"><div className="portal-header"><span>EU contract withdrawal</span><i>Secure portal</i></div><label>Shopify order number</label><div className="fake-input">#1001</div><label>Email address used for the order</label><div className="fake-input muted">customer@example.com</div><button>Find my order</button></div></article>
          <article className="feature-card reveal delay-1"><div className="icon-box purple">◎</div><span className="kicker">Verification</span><h3>Match the right order</h3><p>Order number, email, and optional postal-code checks help reduce accidental access to customer order details.</p><ul className="clean-list"><li>Secure order lookup</li><li>Full or partial quantities</li><li>Product exclusion flags</li></ul></article>
          <article className="feature-card reveal"><div className="icon-box green">✓</div><span className="kicker">Operations</span><h3>Decision-ready queue</h3><p>Filter incoming requests, record internal notes, and move each declaration through a transparent review lifecycle.</p><div className="status-stack"><span><i className="blue"></i>Submitted</span><span><i className="amber-dot"></i>Under review</span><span><i className="green-dot"></i>Accepted</span><span><i className="red-dot"></i>Rejected</span></div></article>
          <article className="feature-card feature-wide audit-card reveal delay-1"><div><div className="icon-box dark">⌁</div><span className="kicker">Traceability</span><h3>An audit trail that explains what happened</h3><p>Every submission, acknowledgement, staff status change, and timestamp is recorded in an append-only timeline—with the responsible actor clearly identified.</p></div><ol className="timeline"><li><i></i><div><strong>Withdrawal submitted <small>(by Customer)</small></strong><time>09:42:18 UTC</time></div></li><li><i></i><div><strong>Acknowledgement sent <small>(by Automation)</small></strong><time>09:42:19 UTC</time></div></li><li><i></i><div><strong>Status changed <small>(by Development Team)</small></strong><time>10:05:47 UTC</time></div></li></ol></article>
        </div>
      </section>
  );
}

export default Features;
