import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';
import './Article.css';
function operationalGuide() {
  return (
    <>
    <Helmet>
        <title>The EU 14-day withdrawal period — EU Withdraw</title>
        <meta
          name="description"
          content="An operational guide to the EU 14-day right of withdrawal for online merchants."
        />
        <meta name="theme-color" content="#665cf6" />
      </Helmet>
      <main>
        <section className="article-hero">
          <div className="section-shell article-hero-inner">
            <div className="article-breadcrumbs">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/blog">Resources</Link>
              <span>/</span>
              <span>14-day withdrawal period</span>
            </div>
            <span className="article-tag">EU consumer rights</span>
            <h1>
              The EU 14-day withdrawal period: an operational guide for online
              stores
            </h1>
            <p className="article-deck">
              A customer’s declaration is the start of a review workflow—not
              automatically an approval or refund. Here is how merchants can
              structure the operational steps around the EU cooling-off period.
            </p>
            <div className="byline">
              <i>EU</i>
              <span>
                EU Withdraw editorial · Updated 21 July 2026 · 8 min read
              </span>
            </div>
          </div>
        </section>
        <div className="article-layout">
          <aside className="article-toc">
            <strong>In this guide</strong>
            <Link to="/blog/eu-14-day-withdrawal-period#what">What the right covers</Link>
            <Link to="/blog/eu-14-day-withdrawal-period#clock">When the clock starts</Link>
            <Link to="/blog/eu-14-day-withdrawal-period#workflow">A review workflow</Link>
            <Link to="/blog/eu-14-day-withdrawal-period#reimbursement">After withdrawal</Link>
            <Link to="/blog/eu-14-day-withdrawal-period#records">Records to keep</Link>
            <Link to="/blog/eu-14-day-withdrawal-period#sources">Official sources</Link>
          </aside>
          <article className="article-copy">
            <h2 id="what">What the 14-day right covers</h2>
            <p>
              For many distance and off-premises consumer contracts, EU rules
              provide a period during which the consumer can withdraw without
              giving a reason. Online sales are a common example of a distance
              contract.
            </p>
            <p>
              The general period is 14 days, but eligibility depends on what was
              purchased, how the contract was concluded, information supplied
              before purchase, and applicable national rules. It should
              therefore be handled as a declaration that requires consistent
              review.
            </p>
            <div className="article-callout">
              <strong>Operational principle</strong>Capture the declaration
              immediately, timestamp it, confirm receipt, and keep the
              merchant’s eligibility decision separate from the submission
              event.
            </div>
            <h2 id="clock">When the clock normally starts</h2>
            <p>
              Official EU guidance distinguishes between goods and services:
            </p>
            <ul>
              <li>
                <strong>Goods:</strong> generally 14 days after delivery.
              </li>
              <li>
                <strong>Services:</strong> generally 14 days after the contract
                was concluded.
              </li>
              <li>
                <strong>Non-working day:</strong> official guidance says that if
                the final day is a non-working day, the deadline extends to the
                next working day.
              </li>
            </ul>
            <p>
              Mixed orders, split deliveries, missing information, and national
              variations can complicate this calculation. Software can surface
              dates and signals, but the final assessment belongs to the
              merchant.
            </p>
            <h2 id="workflow">A practical review workflow</h2>
            <ol>
              <li>
                <strong>Verify the order:</strong> match the order number and
                customer-provided verification data without exposing unnecessary
                order information.
              </li>
              <li>
                <strong>Record scope:</strong> capture whether the declaration
                concerns the whole contract or selected items and quantities.
              </li>
              <li>
                <strong>Timestamp receipt:</strong> issue a durable reference
                and receipt-only acknowledgement.
              </li>
              <li>
                <strong>Review eligibility:</strong> check dates, product
                categories, fulfilment state, customer consent, and relevant
                exceptions.
              </li>
              <li>
                <strong>Record the decision:</strong> store status, staff actor,
                reason, and time of change in the audit trail.
              </li>
              <li>
                <strong>Handle fulfilment and reimbursement:</strong> follow the
                merchant’s reviewed outcome and applicable legal obligations.
              </li>
            </ol>
            <div className="article-callout article-warning">
              <strong>Avoid misleading confirmations</strong>“Request received”
              is safer operational wording than “withdrawal approved” at the
              submission stage. Receipt and approval are separate events.
            </div>
            <h2 id="reimbursement">What happens after a valid withdrawal?</h2>
            <p>
              Your Europe’s business guidance states that the trader must
              reimburse money received within 14 days of being informed of the
              withdrawal. For goods, the trader may generally withhold
              reimbursement until the goods are returned or the consumer
              provides evidence of sending them back.
            </p>
            <p>
              The same guidance explains that standard original delivery costs
              are generally reimbursed, while additional cost for a more
              expensive delivery option does not necessarily have to be.
              Return-shipping responsibility can depend on whether the consumer
              was properly informed in advance.
            </p>
            <h2 id="records">Records worth keeping</h2>
            <ul>
              <li>The declaration exactly as submitted.</li>
              <li>UTC submission timestamp and public reference.</li>
              <li>Order and selected item identifiers.</li>
              <li>Customer notifications and delivery attempts.</li>
              <li>Eligibility notes and exception checks.</li>
              <li>
                Every status transition, responsible actor, and timestamp.
              </li>
              <li>
                Any return or reimbursement references managed outside the
                workflow.
              </li>
            </ul>
            <p>
              Retain only the personal data required for the workflow and align
              retention with your privacy policy, legal obligations, and
              counsel’s advice.
            </p>
            <section className="source-list" id="sources">
              <h2>Official sources</h2>
              <ul>
                <li>
                  <a
                    href="https://europa.eu/youreurope/citizens/consumers/shopping/returns/index_en.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Your Europe — Returns and the right of withdrawal
                  </a>
                </li>
                <li>
                  <a
                    href="https://europa.eu/youreurope/business/selling-in-eu/selling-goods-services/ecommerce-distance-selling/index_en.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Your Europe for business — Distance and off-premises selling
                  </a>
                </li>
                <li>
                  <a
                    href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32011L0083"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EUR-Lex — Directive 2011/83/EU on consumer rights
                  </a>
                </li>
              </ul>
              <p>
                This article is general educational information, not legal
                advice.
              </p>
            </section>
            <div className="article-next">
              <div>
                <span>Continue reading</span>
                <h3>Common exceptions to the right of withdrawal</h3>
              </div>
              <Link to="/blog/withdrawal-right-exceptions">Next guide →</Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export default operationalGuide;
