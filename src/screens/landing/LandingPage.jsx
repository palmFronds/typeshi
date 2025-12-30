import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../styles/landing.css';
import mockupImage from '../../assets/images/first_mockup.png';

export default function LandingPage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTryDemo = () => {
    navigate('/demo');
  };

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="nav-logo">moMoney</div>
        <div className="nav-links">
          <button onClick={scrollToContact} className="nav-link">Contact</button>
          <button onClick={handleTryDemo} className="nav-cta">Try Demo</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-headline">
            Solving <em>the</em> retail brokerage onboarding problem.
          </h1>
          <p className="hero-subheadline">
          Picture a brokerage-native, learning layer designed exclusively to minimize user 
          disengagement after onboarding.
          </p>
          <p className="hero-status">
            Currently running pilot partnerships with brokerages and related platforms!
          </p>
          <div className="hero-ctas">
            <motion.button
              className="cta-primary"
              onClick={handleTryDemo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ✦ Try The Demo
            </motion.button>
            <motion.button
              className="cta-secondary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Ask About a Pilot
            </motion.button>
          </div>
        </motion.div>
        <div className="hero-gradient-orb hero-orb-1" />
        <div className="hero-gradient-orb hero-orb-2" />
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <motion.div
          className="problem-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-header">Here's the issue we're solving.</h2>
          <p className="section-body">
            Retail users don't fail to activate because they lack access: they fail because
            they're unfamiliar and afraid. Overwhelming interfaces, unfamiliar terminology,
            and immediate pressure to act with real money. The result: drop-off before or
            just after their first trade, costing brokerages downstream revenue.
          </p>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <motion.div
          className="solution-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-header">That's where we come in.</h2>
          <p className="section-body">
            MoMoney sits inside your brokerage's post-verification flow, guiding new users 
            through constrained interactions that mirror the real platform. Concepts appear
            only when tied to visible UI: building confidence before capital is at risk.
          </p>
        </motion.div>
        <motion.div
          className="solution-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="solution-mockup">
            <img
              src={mockupImage}
              alt="MoMoney embedded interface mockup"
              className="mockup-image"
            />
          </div>
          <div className="solution-accent" />
        </motion.div>
      </section>

      {/* Pilot Overview Section */}
      <section className="pilot-section">
        <motion.div
          className="pilot-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="pilot-title">How a Pilot Works</h2>
          <p className="pilot-description">
            We embed directly into your onboarding flow. The experience
            is sandboxed, short-term, and fully reversible. No persistent
            copilots, no heavy integrations.
          </p>
          <div className="pilot-attributes">
            <div className="attribute-card">
              <div className="attribute-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 9h6v6H9z" />
                </svg>
              </div>
              <h3 className="attribute-title">Embedded</h3>
              <p className="attribute-text">
                Sits within your existing brokerage UI. No separate apps or redirects.
              </p>
            </div>
            <div className="attribute-card">
              <div className="attribute-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3 className="attribute-title">Short-Term</h3>
              <p className="attribute-text">
                A 5-7 minute guided experience. Users complete one action, then move on.
              </p>
            </div>
            <div className="attribute-card">
              <div className="attribute-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 12h4l3-9 4 18 3-9h4" />
                </svg>
              </div>
              <h3 className="attribute-title">Sandbox</h3>
              <p className="attribute-text">
                Safe environment for first actions. Real learning, minimal risk.
              </p>
            </div>
            <div className="attribute-card">
              <div className="attribute-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 12h16M4 12l4-4m-4 4l4 4m12-4l-4-4m4 4l-4 4" />
                </svg>
              </div>
              <h3 className="attribute-title">Reversible</h3>
              <p className="attribute-text">
                Optional and interruptible. Users can exit at any point.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="contact-title">We'd Love to Hear From You!</h2>
          <p className="contact-subtitle">
            Want to reach out about running a pilot or anything else?
          </p>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  disabled
                />
              </div>
              <div className="form-group">
                <label className="form-label">Work Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="you@company.com"
                  disabled
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Company</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your company name"
                disabled
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                placeholder="Tell us about your activation challenges..."
                rows={4}
                disabled
              />
            </div>
            <button type="submit" className="contact-submit" disabled>
              Send Message
            </button>
            <p className="contact-note">Contact flow coming soon</p>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p className="footer-text">MoMoney &lt;3</p>
      </footer>
    </div>
  );
}
