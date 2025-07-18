import React from "react";
import "./Contact.css";

export default function Contact({isNightMode}) {
  return (
    <section className={`contact-section ${isNightMode ? 'night-mode' : 'day-mode'}`} id="contact">
      <h2 className="contact-title">Let's Connect</h2>
      <div className="contact-container">
        {/* Contact Form */}
        <form
          action="https://formsubmit.co/adithyareddi13@gmail.com"
          method="POST"
          className="contact-form"
        >
          <input type="hidden" name="_next" value="https://github.com/KAdithyaReddy" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-details">
          <p>Feel free to reach out to me through:</p>
          <div className="contact-icons">
            <a
              href="mailto:adithyareddi13@gmail.com"
              className="contact-icon"
              title="Email Me"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="tel:+918328635419"
              className="contact-icon"
              title="Call Me"
            >
              <i className="fas fa-phone"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/komatireddy-adithya-reddy/"
              className="contact-icon"
              title="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          Made with ❤️ by <strong>Komatireddy Adithya Reddy</strong>
        </p>
        <p>© 2025 All Rights Reserved</p>
      </div>
    </section>
  );
}
