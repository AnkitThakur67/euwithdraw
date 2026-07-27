function Workflow() {
  return (
    <section className="section workflow-section" id="workflow">
        <div className="section-shell">
          <div className="section-heading centered reveal"><span className="kicker">From request to resolution</span><h2>A calm process for a sensitive customer moment.</h2></div>
          <div className="steps">
            <article className="reveal"><span>01</span><div className="step-icon">⌁</div><h3>Customer submits</h3><p>The storefront portal verifies the order and records the customer’s declaration.</p></article>
            <article className="reveal delay-1"><span>02</span><div className="step-icon">✉</div><h3>Receipt is sent</h3><p>A timestamped reference confirms receipt without promising approval or an automatic refund.</p></article>
            <article className="reveal delay-2"><span>03</span><div className="step-icon">◫</div><h3>Merchant reviews</h3><p>Your team checks eligibility signals, products, dates, notes, and supporting context.</p></article>
            <article className="reveal delay-3"><span>04</span><div className="step-icon">✓</div><h3>Decision is recorded</h3><p>The status and responsible staff member are added to the audit trail for future reference.</p></article>
          </div>
        </div>
      </section>
  );
}

export default Workflow;