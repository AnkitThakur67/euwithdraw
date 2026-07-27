import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';
import './Article.css';

function withdrawalExceptions() {
  return (
    <>
      <Helmet>
        <title>Common withdrawal exceptions — EU Withdraw</title>
        <meta
          name="description"
          content="A merchant-oriented overview of common exceptions to the EU right of withdrawal."
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
              <span>Withdrawal exceptions</span>
            </div>
            <span className="article-tag">Eligibility</span>
            <h1>Common exceptions to the right of withdrawal</h1>
            <p className="article-deck">
              The 14-day cooling-off period does not apply to every purchase.
              Merchants need a careful review step that accounts for
              category-specific exceptions and proof of customer consent.
            </p>
            <div className="byline">
              <i>EU</i>
              <span>
                EU Withdraw editorial · Updated 21 July 2026 · 6 min read
              </span>
            </div>
          </div>
        </section>
        <div className="article-layout">
          <aside className="article-toc">
            <strong>In this guide</strong>
            <Link to="/blog/withdrawal-right-exceptions#why">Why review matters</Link>
            <Link to="/blog/withdrawal-right-exceptions#categories">Common categories</Link>
            <Link to="/blog/withdrawal-right-exceptions#digital">Digital content</Link>
            <Link to="/blog/withdrawal-right-exceptions#design">Workflow design</Link>
            <Link to="/blog/withdrawal-right-exceptions#sources">Official sources</Link>
          </aside>
          <article className="article-copy">
            <h2 id="why">Why an exception review matters</h2>
            <p>
              A customer should be able to submit a declaration without the
              storefront trying to make a legal determination. The merchant can
              then review whether the general right applies and whether an
              exception is relevant.
            </p>
            <p>
              This separation produces a clearer customer experience and a
              better evidence trail: one event records what the customer
              declared, and another records what the merchant decided.
            </p>
            <h2 id="categories">Frequently cited categories</h2>
            <p>
              Your Europe lists a number of purchases for which the 14-day
              cooling-off period may not apply. Examples include:
            </p>
            <ul>
              <li>Goods made to order or clearly personalised.</li>
              <li>Perishable goods that expire rapidly.</li>
              <li>
                Plane and train tickets, concert tickets, hotel bookings, car
                rentals, and catering for specific dates.
              </li>
              <li>
                Sealed audio, video, or software products that have been
                unsealed.
              </li>
              <li>
                Urgent repair and maintenance contracts requested by the
                consumer.
              </li>
              <li>
                Fully performed services where the consumer expressly agreed to
                immediate performance and acknowledged losing the right.
              </li>
              <li>
                Some online digital content once performance begins following
                the required express consent and acknowledgement.
              </li>
            </ul>
            <div className="article-callout article-warning">
              <strong>Not an exhaustive list</strong>Product details and facts
              matter. National law may also provide additional protection. Do
              not configure a blanket automatic rejection solely from a product
              tag.
            </div>
            <h2 id="digital">Digital content needs evidence of consent</h2>
            <p>
              Official EU guidance explains that a consumer’s withdrawal right
              for online digital content can be lost after downloading or
              streaming starts only where required conditions are met. These
              include express consent to begin performance immediately,
              acknowledgement that the right will be lost, and confirmation
              supplied by the trader.
            </p>
            <p>
              Operationally, this means the merchant may need more than a
              “digital product” classification. The review record should link to
              evidence of the consent and acknowledgement associated with that
              order.
            </p>
            <h2 id="design">How to design the workflow</h2>
            <ol>
              <li>
                Accept and timestamp the declaration without promising the
                outcome.
              </li>
              <li>
                Flag potentially relevant product categories for staff review.
              </li>
              <li>
                Show the reviewer the order date, delivery or performance date,
                and product context.
              </li>
              <li>Provide space for internal notes and supporting evidence.</li>
              <li>Record the final status and staff actor.</li>
              <li>
                Send wording that clearly distinguishes the merchant’s decision
                from the original receipt.
              </li>
            </ol>
            <p>
              Eligibility signals should assist a human review rather than
              silently determine legal rights.
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
                    Your Europe — Returns, withdrawal period, and exceptions
                  </a>
                </li>
                <li>
                  <a
                    href="https://europa.eu/youreurope/citizens/consumers/shopping/guarantees/faq/index_en.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Your Europe — Consumer guarantee FAQs, including digital
                    content
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
                <h3>What a useful withdrawal audit trail should record</h3>
              </div>
              <Link to="/blog/withdrawal-audit-trail">Next guide →</Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export default withdrawalExceptions;
