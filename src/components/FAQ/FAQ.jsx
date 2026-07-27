function FAQ() {
  return (
    <section className="section section-shell" id="faq">
        <div className="section-heading centered reveal"><span className="kicker">Questions, answered</span><h2>Know exactly what EU Withdraw does.</h2></div>
        <div className="faq-list reveal">
          <details><summary>Does EU Withdraw automatically approve or refund a request?<span>+</span></summary><p>No. EU Withdraw records customer declarations and supports merchant review. Submission, legal eligibility, approval, cancellation, and refund decisions remain separate merchant responsibilities.</p></details>
          <details><summary>Can customers withdraw only part of an order?<span>+</span></summary><p>Yes. Customers can select the entire order or specific eligible line items and quantities before reviewing their declaration.</p></details>
          <details><summary>How is the app added to a storefront?<span>+</span></summary><p>The merchant enables the EU Withdraw theme app embed. The button can be positioned and styled in the Shopify theme editor.</p></details>
          <details><summary>Is this legal advice or a guarantee of compliance?<span>+</span></summary><p>No. EU Withdraw is workflow software, not legal advice. Merchants should have qualified counsel review their withdrawal process, wording, policies, and jurisdiction-specific obligations.</p></details>
          <details><summary>How does the 14-day trial work?<span>+</span></summary><p>The Standard plan includes a 14-day trial for eligible live stores. Partner development stores can test the app without subscribing.</p></details>
        </div>
      </section>
  );
}

export default FAQ;