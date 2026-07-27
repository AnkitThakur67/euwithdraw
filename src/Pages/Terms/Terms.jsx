import {Helmet} from 'react-helmet-async';
import './Terms.css';

function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — EU Withdraw</title>
        <meta
          name="description"
          content="Read the EU Withdraw Terms of Service covering merchant responsibilities, account usage, billing, service availability, and platform guidelines."
        />
        <meta name="theme-color" content="#665cf6" />
      </Helmet>
      <main className="legal-shell" id="top">
        <article className="legal-page">
          <span className="kicker">Legal</span>
          <h1>Terms of Service</h1>
          <p className="updated">Last updated: 21 July 2026</p>
          <p className="notice">
            EU Withdraw is workflow software. It does not provide legal advice,
            determine legal eligibility, approve cancellations, or automatically
            issue refunds.
          </p>
          <h2>Service</h2>
          <p>
            EU Withdraw provides Shopify merchants with tools to receive,
            organise, acknowledge, and review customer withdrawal declarations.
            Merchants remain solely responsible for their policies, legal
            analysis, decisions, communications, fulfilment actions,
            cancellations, and refunds.
          </p>
          <h2>Accounts and authority</h2>
          <p>
            You must have authority to install and use the application for the
            relevant Shopify store. You are responsible for staff access,
            account security, lawful instructions, and the accuracy of
            configuration and content you provide.
          </p>
          <h2>Acceptable use</h2>
          <p>
            You must not use the service unlawfully, attempt unauthorised
            access, interfere with its operation, submit malicious material,
            misrepresent decisions to customers, or use the service to violate
            Shopify’s terms or applicable rights.
          </p>
          <h2>Billing</h2>
          <p>
            Paid subscriptions are billed through Shopify according to the plan
            displayed during approval. The current Standard plan is advertised
            at USD $5 per month with a 14-day trial for eligible live stores.
            Development-store testing may be offered without charge. Shopify’s
            billing interface governs final charges and approval.
          </p>
          <h2>Availability and changes</h2>
          <p>
            We work to provide a reliable service but do not guarantee
            uninterrupted availability. Features may evolve to improve security,
            platform compatibility, or functionality. Material changes will be
            communicated where appropriate.
          </p>
          <h2>Merchant responsibilities</h2>
          <p>
            You are responsible for obtaining legal advice, maintaining accurate
            business and privacy information, responding to customers, reviewing
            exclusion rules and translations, and deciding how each declaration
            affects an order or contract.
          </p>
          <h2>Disclaimer and liability</h2>
          <p>
            To the extent permitted by applicable law, the service is provided
            without warranties that it will satisfy every merchant’s legal or
            operational requirements. Liability limitations applicable to your
            subscription should be reviewed with qualified counsel before these
            terms are published as final contractual terms.
          </p>
          <h2>Termination</h2>
          <p>
            You may uninstall the application through Shopify. We may restrict
            service for abuse, security risk, non-payment, platform
            requirements, or material breach. Applicable data deletion processes
            will follow the privacy policy and Shopify requirements.
          </p>
          <h2>Contact</h2>
          <p>
            Questions can be sent to{" "}
            <a href="mailto:support@euwithdrawapp.com">
              support@euwithdrawapp.com
            </a>
            .
          </p>
        </article>
      </main>
    </>
  );
}

export default Terms;
