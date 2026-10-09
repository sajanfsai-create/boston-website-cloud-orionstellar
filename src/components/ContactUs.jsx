import { useState } from 'react';
import { Link } from './Router';

import contactHeroImage from "../assets/contact_girl.png";

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 19" fill="none">
    <path
      d="M11.5849 17.0189L11.594 17.0253C12.3811 17.5264 13.3155 17.744 14.243 17.6422C15.1705 17.5403 16.0354 17.1251 16.6949 16.4651L17.2679 15.8921C17.3949 15.7653 17.4956 15.6146 17.5643 15.4488C17.633 15.2829 17.6684 15.1052 17.6684 14.9257C17.6684 14.7462 17.633 14.5685 17.5643 14.4026C17.4956 14.2368 17.3949 14.0861 17.2679 13.9593L14.8513 11.5445C14.7244 11.4175 14.5738 11.3168 14.408 11.2481C14.2421 11.1794 14.0644 11.144 13.8849 11.144C13.7054 11.144 13.5276 11.1794 13.3618 11.2481C13.196 11.3168 13.0453 11.4175 12.9184 11.5445C12.6622 11.8007 12.3148 11.9446 11.9525 11.9446C11.5902 11.9446 11.2427 11.8007 10.9865 11.5445L7.12251 7.67965C6.86636 7.42342 6.72247 7.07596 6.72247 6.71366C6.72247 6.35136 6.86636 6.00389 7.12251 5.74767C7.24948 5.62078 7.3502 5.47012 7.41892 5.3043C7.48764 5.13847 7.52301 4.96073 7.52301 4.78123C7.52301 4.60172 7.48764 4.42398 7.41892 4.25816C7.3502 4.09233 7.24948 3.94167 7.12251 3.81478L4.70686 1.40004C4.45063 1.14389 4.10317 1 3.74087 1C3.37857 1 3.0311 1.14389 2.77488 1.40004L2.20102 1.97298C1.54118 2.63262 1.12611 3.49764 1.02442 4.4251C0.922735 5.35256 1.1405 6.28697 1.64174 7.07391L1.64721 7.08302C4.29439 10.9996 7.66783 14.3724 11.5849 17.0189V17.0189Z"
      stroke="#170F49"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 19 15" fill="none">
    <path
      d="M17.6667 3.74983V12.0832C17.6667 12.6357 17.4472 13.1656 17.0565 13.5563C16.6658 13.947 16.1359 14.1665 15.5833 14.1665H3.08333C2.5308 14.1665 2.00089 13.947 1.61019 13.5563C1.21949 13.1656 1 12.6357 1 12.0832V3.74983"
      stroke="#170F49"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.6667 3.74984C17.6667 3.1973 17.4472 2.6674 17.0565 2.2767C16.6658 1.886 16.1359 1.6665 15.5833 1.6665H3.08333C2.5308 1.6665 2.00089 1.886 1.61019 2.2767C1.21949 2.6674 1 3.1973 1 3.74984L8.22917 8.26373C8.56027 8.47067 8.94288 8.5804 9.33333 8.5804C9.72379 8.5804 10.1064 8.47067 10.4375 8.26373L17.6667 3.74984Z"
      stroke="#170F49"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 19" fill="none">
    <path
      d="M15.1942 8.45606C15.1942 13.8349 9.68499 17.1486 8.5401 17.7798C8.47667 17.8148 8.40542 17.8332 8.33299 17.8332C8.26056 17.8332 8.1893 17.8148 8.12588 17.7798C6.98013 17.1486 1.47266 13.8349 1.47266 8.45606C1.47266 4.16809 4.04544 1.1665 8.33342 1.1665C12.6214 1.1665 15.1942 4.16809 15.1942 8.45606Z"
      stroke="#170F49"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.90234 8.02726C4.90234 8.93705 5.26376 9.80958 5.90708 10.4529C6.5504 11.0962 7.42293 11.4576 8.33272 11.4576C9.24252 11.4576 10.115 11.0962 10.7584 10.4529C11.4017 9.80958 11.7631 8.93705 11.7631 8.02726C11.7631 7.11746 11.4017 6.24493 10.7584 5.60161C10.115 4.95829 9.24252 4.59688 8.33272 4.59688C7.42293 4.59688 6.5504 4.95829 5.90708 5.60161C5.26376 6.24493 4.90234 7.11746 4.90234 8.02726V8.02726Z"
      stroke="#170F49"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 448 512"
    xmlns="http://www.w3.org/2000/svg"
    className="btn-arrow-icon"
    width="16"
    height="16"
  >
    <path
      fill="currentColor"
      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
    ></path>
  </svg>
);

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will get back to you shortly.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <section className="contact-hero hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">We're here to help 24/7</h1>
            <p className="hero-description">
              Have questions or need support? Connect with Orionstellar’s experts — we're here to help, 24/7!
            </p>
            <Link href="/vps-hosting" className="btn-primary">
              View plans <ArrowIcon />
            </Link>
          </div>
          <div className="hero-image">
            <img
              src={contactHeroImage}
              alt="Support Team Graphic"
            />
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-details-form-section">
        <div className="section-container split-layout">
          {/* Left Side: Info */}
          <div className="contact-info-panel">
            <h2 className="contact-info-title">Contact Information</h2>
            <p className="contact-info-subtitle">Say something to start a live chat!</p>
            
            <ul className="contact-info-list">
              <li>
                <div className="contact-icon-box">
                  <PhoneIcon />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Call Us</span>
                  <a href="tel:+94117650700" className="contact-value">+94 117 650 700</a>
                </div>
              </li>
              <li>
                <div className="contact-icon-box">
                  <EmailIcon />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:sales@orionstellar.com" className="contact-value">sales@orionstellar.com</a>
                </div>
              </li>
              <li>
                <div className="contact-icon-box">
                  <PinIcon />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Visit Us</span>
                  <span className="contact-value">
                    9 Battery Road #28-01 Singapore, Central Singapore 049910
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-panel">
            <h2 className="contact-form-title">Get in Touch</h2>
            <p className="contact-form-subtitle">Feel free to drop us a line and we'll reply as fast as we can.</p>

            <form onSubmit={handleFormSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required-star">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required-star">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Inquiry about Dedicated Servers"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required-star">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us what you need help with..."
                  required
                ></textarea>
              </div>

              {formStatus.message && (
                <div className={`form-alert ${formStatus.type}`}>
                  {formStatus.message}
                </div>
              )}

              <button type="submit" className="btn-primary form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
