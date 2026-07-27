import { useState } from "react";
function Contact() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    message: "",
    type: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    // Browser validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoading(true);

    // Remove previous status
    setStatus({
      message: "",
      type: "",
    });

    try {
      const response = await fetch(
        "https://app.euwithdrawapp.com/api/contact",
        {
          method: "POST",

          body: new FormData(form),

          headers: {
            Accept: "application/json",
          },
        },
      );

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "We could not send your message.");
      }

      // Clear form after successful submission
      form.reset();

      // Success message
      setStatus({
        message:
          "Thank you — your message has been sent. We’ll get back to you shortly.",
        type: "success",
      });
    } catch (error) {
      // Error message
      setStatus({
        message:
          error instanceof Error
            ? error.message
            : "We could not send your message. Please email support@euwithdrawapp.com.",
        type: "error",
      });
    } finally {
      // Stop loading
      setLoading(false);
    }
  };
  return (
    <section className="section contact-section" id="contact">
      <div className="section-shell contact-layout">
        {/* LEFT SIDE */}

        <div className="contact-copy reveal">
          <span className="kicker">Talk to a real person</span>

          <h2>Let’s make withdrawal operations feel simpler.</h2>

          <p>
            Tell us about your store, your current process, or any questions
            about EU Withdraw. We’ll reply to the email address you provide.
          </p>

          <div className="contact-details">
            <div>
              <span className="contact-icon">✉</span>

              <p>
                <strong>Email our team</strong>

                <a href="mailto:support@euwithdrawapp.com">
                  support@euwithdrawapp.com
                </a>
              </p>
            </div>

            <div>
              <span className="contact-icon">↗</span>

              <p>
                <strong>Response time</strong>

                <small>Usually within one business day</small>
              </p>
            </div>

            <div>
              <span className="contact-icon">✓</span>

              <p>
                <strong>Product guidance</strong>

                <small>Setup, pricing, workflow, and launch questions</small>
              </p>
            </div>
          </div>
        </div>

        {/* FORM */}

        <form
          className="contact-form reveal delay-1"
          action="https://app.euwithdrawapp.com/api/contact"
          method="post"
          data-contact-form
          onSubmit={handleSubmit}
        >
          <div className="contact-form-heading">
            <div>
              <span>Send a message</span>

              <h3>How can we help?</h3>
            </div>

            <i>Secure form</i>
          </div>

          <div className="form-grid">
            {/* NAME */}

            <label>
              <span>Your name</span>

              <input
                name="name"
                type="text"
                autoComplete="name"
                maxLength="100"
                placeholder="Jane Smith"
                required
              />
            </label>

            {/* EMAIL */}

            <label>
              <span>Work email</span>

              <input
                name="email"
                type="email"
                autoComplete="email"
                maxLength="160"
                placeholder="jane@store.com"
                required
              />
            </label>

            {/* STORE */}

            <label>
              <span>
                Shopify store <small>(optional)</small>
              </span>

              <input
                name="store"
                type="text"
                autoComplete="url"
                maxLength="180"
                placeholder="your-store.myshopify.com"
              />
            </label>

            {/* TOPIC */}

            <label>
              <span>Topic</span>

              <select name="topic" defaultValue="" required>
                <option value="" disabled>
                  Select a topic
                </option>

                <option>Product demo</option>

                <option>Setup and installation</option>

                <option>Pricing and billing</option>

                <option>App Store or partnership</option>

                <option>Support</option>

                <option>Other</option>
              </select>
            </label>

            {/* MESSAGE */}

            <label className="form-span">
              <span>Message</span>

              <textarea
                name="message"
                rows="6"
                minLength="3"
                maxLength="4000"
                placeholder="Tell us what you would like help with…"
                required
              />
            </label>

            {/* HONEYPOT */}

            <label className="form-honeypot" aria-hidden="true">
              <span>Company website</span>

              <input
                name="website"
                type="text"
                tabIndex="-1"
                autoComplete="off"
              />
            </label>
          </div>
          {/* FORM FOOTER */}

          <div className="form-footer">
            <p>
              By submitting, you agree that we may use these details to respond
              to your enquiry.
            </p>
            <button
              className="button button-primary"
              type="submit"
              disabled={loading}
            >
              <span className="submit-label">
                {loading ? "Sending…" : "Send message"}
              </span>

              <span className="submit-arrow">→</span>
            </button>
          </div>

          {/* STATUS */}

          <div
            className={`form-status ${status.type}`}
            role="status"
            aria-live="polite"
            hidden={!status.message}
          >
            {status.message}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
