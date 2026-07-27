function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-shell pricing-layout">
        <div className="section-heading reveal">
          <span className="kicker">Simple Shopify billing</span>
          <h2>One plan. Everything included.</h2>
          <p>
            Start on a development store for free. When you’re ready to use EU
            Withdraw on a live store, billing is handled directly through
            Shopify.
          </p>
        </div>
        <article className="price-card reveal delay-1">
          <div className="popular">Standard</div>
          <div className="price">
            <strong>$5</strong>
            <span>
              USD
              <br />
              per month
            </span>
          </div>
          <p>14-day free trial on eligible live stores.</p>
          <ul>
            <li>Unlimited withdrawal records</li>
            <li>Customer verification portal</li>
            <li>Full and partial withdrawals</li>
            <li>Status tracking and audit timeline</li>
            <li>Seven storefront languages</li>
            <li>Free on development stores</li>
          </ul>
          <a className="button button-light" href="#contact">
            Request early access <span>→</span>
          </a>
          <small>
            Subscription approval and charges are handled by Shopify.
          </small>
        </article>
      </div>
    </section>
  );
}

export default Pricing;
