import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero.jsx";
import ProofStrip from "../../components/ProofStrip/ProofStrip.jsx";
import Features from "../../components/Features/Features.jsx";
import Workflow from "../../components/Workflow/Workflow.jsx";
import Security from "../../components/Security/Security.jsx";
import Resources from "../../components/Resources/Resources.jsx";
import Pricing from "../../components/Pricing/Pricing.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import FinalCTA from "../../components/FinalCTA/FinalCTA.jsx";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>EU Withdraw — Withdrawal operations for Shopify</title>
        <meta
          name="description"
          content="EU Withdraw gives Shopify merchants a secure, auditable workflow for customer withdrawal declarations."
        />
        <meta name="theme-color" content="#665cf6" />
      </Helmet>
      <main id="top">
        <Hero />
        <ProofStrip />
        <Features />
        <Workflow />
        <Security />
        <Resources />
        <Pricing />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
    </>
  );
}

export default Homepage;
