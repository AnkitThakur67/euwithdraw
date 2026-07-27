import {Helmet} from 'react-helmet-async';
import './Support.css';

function Support() {
  return (
    <>
        <Helmet>
        <title>Support — EU Withdraw</title>
        <meta
          name="description"
          content="EU Withdraw support centre for merchants and customers. Get help with setup, billing, technical issues, and withdrawal request workflows."
        />
        <meta name="theme-color" content="#665cf6" />
        </Helmet>
        <main className="legal-shell" id="top">
        <article className="legal-page"><span className="kicker">Help centre</span>
            <h1>How can we help?</h1>
            <p className="updated">Support for EU Withdraw merchants and storefront customers.</p>
            <div className="support-cards"><a className="support-card"
                    href="mailto:support@euwithdrawapp.com?subject=EU%20Withdraw%20merchant%20support"><strong>Merchant
                        support →</strong>
                    <p>Installation, configuration, billing, or workflow questions.</p>
                </a><a className="support-card"
                    href="mailto:support@euwithdrawapp.com?subject=EU%20Withdraw%20technical%20issue"><strong>Report an
                        issue →</strong>
                    <p>Include your store domain and withdrawal reference where safe.</p>
                </a></div>
            <h2>For customers</h2>
            <p>EU Withdraw records a declaration for the merchant operating the store. For decisions about a purchase,
                cancellation, return, refund, or withdrawal status, contact that merchant directly and include your
                withdrawal reference.</p>
            <h2>For merchants</h2>
            <p>When requesting support, include your <code>.myshopify.com</code> store domain, a short description, and
                relevant non-sensitive screenshots. Do not email passwords, API secrets, or full payment details.</p>
            <h2>Response times</h2>
            <p>We aim to acknowledge standard support requests within two business days. Security or privacy concerns
                should be clearly identified in the subject line.</p>
            <h2>Email</h2>
            <p><a href="mailto:support@euwithdrawapp.com">support@euwithdrawapp.com</a></p>
            <p className="notice">EU Withdraw support cannot provide legal advice or decide a customer’s legal eligibility.
                Consult qualified counsel for jurisdiction-specific guidance.</p>
        </article>
    </main>
    </>
  )
}

export default Support