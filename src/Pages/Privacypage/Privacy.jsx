import {Helmet} from 'react-helmet-async';
import "./Privacy.css";
function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — EU Withdraw</title>
        <meta
          name="description"
          content="Learn how EU Withdraw handles personal data, security, retention, and privacy practices for merchants and customers using our service."
        />
        <meta name="theme-color" content="#665cf6" />
      </Helmet>
      <main className="legal-shell" id="top">
        <article className="legal-page">
          <span className="kicker">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="updated">Last updated: 21 July 2026</p>
          <p className="notice">
            This page describes how EU Withdraw processes information when
            merchants install and use the application. Merchants remain
            responsible for their own customer-facing privacy notices and legal
            obligations.
          </p>
          <h2>Information we process</h2>
          <p>
            We process Shopify store identifiers, authorised merchant account
            context, app configuration, withdrawal request details, order
            references, selected products, customer-supplied contact and
            verification information, internal notes, status history, and
            technical logs required to operate and secure the service.
          </p>
          <h2>How information is used</h2>
          <p>
            Information is used to authenticate merchants, verify customer
            requests against Shopify order data, record withdrawal declarations,
            send receipt acknowledgements, display requests to authorised
            merchant staff, maintain an audit trail, provide support, prevent
            abuse, and meet applicable platform requirements.
          </p>
          <h2>Sharing and subprocessors</h2>
          <p>
            Data is processed through infrastructure and service providers
            needed to deliver EU Withdraw, including hosting, database,
            transactional email, and Shopify platform services. We do not sell
            personal information.
          </p>
          <h2>Retention and deletion</h2>
          <p>
            Merchants can configure a retention period subject to available
            settings and their obligations. Shopify’s mandatory privacy webhooks
            are used to process relevant customer and shop redaction requests.
            Some limited records may be retained where required for security,
            dispute resolution, or legal obligations.
          </p>
          <h2>Security</h2>
          <p>
            We use reasonable technical and organisational measures, including
            encrypted transport, access controls, signed Shopify requests, and
            encryption of protected customer fields. No online system can
            guarantee absolute security.
          </p>
          <h2>International processing</h2>
          <p>
            Information may be processed in countries where our infrastructure
            providers operate. Where required, appropriate safeguards should be
            evaluated and applied.
          </p>
          <h2>Your choices and rights</h2>
          <p>
            Customers should normally contact the merchant that received their
            withdrawal declaration. Merchants or authorised individuals may
            contact us regarding access, correction, deletion, or other
            applicable privacy rights.
          </p>
          <h2>Contact</h2>
          <p>
            Privacy questions can be sent to{" "}
            <a href="mailto:privacy@euwithdrawapp.com">
              privacy@euwithdrawapp.com
            </a>
            .
          </p>
        </article>
      </main>
    </>
  );
}

export default Privacy;
