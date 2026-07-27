function Security() {
  return (
    <section className="section section-shell security-section">
        <div className="security-copy reveal"><span className="kicker">Privacy-conscious architecture</span><h2>Designed around the minimum data your workflow needs.</h2><p>EU Withdraw helps merchants manage declarations while keeping sensitive customer information protected throughout the process.</p><div className="security-points"><div><span>◉</span><p><strong>Encrypted personal data</strong>Customer fields are protected at rest.</p></div><div><span>⌁</span><p><strong>Mandatory redaction webhooks</strong>Privacy events anonymise stored records.</p></div><div><span>✓</span><p><strong>Role-aware audit context</strong>See whether actions came from customers, staff, or automation.</p></div><div><span>↻</span><p><strong>Configurable retention</strong>Set a data-retention period for your store.</p></div></div></div>
        <div className="security-visual reveal delay-1"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="shield"><span>EU</span><small>Protected workflow</small></div><div className="security-chip chip-one">Encrypted PII <b>✓</b></div><div className="security-chip chip-two">Signed proxy requests <b>✓</b></div><div className="security-chip chip-three">Audit history <b>✓</b></div></div>
      </section>
  );
}

export default Security;