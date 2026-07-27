
function Hero() {
  return (
    <>
    <section className="hero section-shell">
        <div className="hero-copy reveal">
          <div className="eyebrow"><span className="pulse"></span> Withdrawal operations for Shopify</div>
          <h1>Turn withdrawal requests into a <span>clear, auditable workflow.</span></h1>
          <p className="hero-lead">Give customers a simple way to submit contract withdrawal declarations, while your team reviews every request from one secure workspace.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pricing">Start with 14 days free <span>→</span></a>
            <a className="button button-ghost" href="#workflow">See how it works</a>
          </div>
          <div className="hero-trust"><span>✓ No separate payment account</span><span>✓ Free on development stores</span></div>
        </div>

        <div className="product-stage reveal delay-1" aria-label="EU Withdraw dashboard preview">
          <div className="stage-glow"></div>
          <div className="app-window">
            <div className="app-sidebar">
              <div className="mini-brand">EU</div>
              <span className="nav-dot active"></span><span className="nav-dot"></span><span className="nav-dot"></span><span className="nav-dot"></span>
            </div>
            <div className="app-content">
              <div className="window-bar"><div><i></i><i></i><i></i></div><span>Withdrawal workspace</span><b>Live</b></div>
              <div className="dashboard-hero">
                <div><small>Withdrawal operations</small><strong>Compliance, without<br />the complexity.</strong><p>Monitor every declaration from one secure workspace.</p></div>
                <div className="signal"><span>EU</span></div>
              </div>
              <div className="metric-row"><div><small>Total requests</small><strong>248</strong><em>↗ 12%</em></div><div><small>Awaiting review</small><strong>14</strong><em className="amber">Needs attention</em></div><div><small>Resolved</small><strong>234</strong><em className="green">94% complete</em></div></div>
              <div className="request-card"><div className="request-head"><span>Recent requests</span><small>Synced</small></div><div className="request-line"><b>WD-000248</b><span>#1048</span><em className="status warning">Under review</em><time>Today</time></div><div className="request-line"><b>WD-000247</b><span>#1047</span><em className="status success">Accepted</em><time>Today</time></div></div>
            </div>
          </div>
          <div className="floating-card floating-card-top"><span>✓</span><div><strong>Request received</strong><small>Immutable timestamp created</small></div></div>
          <div className="floating-card floating-card-bottom"><span>7</span><div><strong>Storefront languages</strong><small>Built for European customers</small></div></div>
        </div>
      </section>
    </>
  )
}

export default Hero