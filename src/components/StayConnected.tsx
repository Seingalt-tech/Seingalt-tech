'use client';

import { useState, FormEvent } from 'react';

export default function StayConnected() {
  const [email, setEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');
  const [contactStatus, setContactStatus] = useState('');

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription logic
    setNewsletterStatus('Merci pour votre inscription !');
    setEmail('');
    setTimeout(() => setNewsletterStatus(''), 3000);
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form logic
    setContactStatus('Message envoyé avec succès !');
    setContactSubject('');
    setContactMessage('');
    setTimeout(() => setContactStatus(''), 3000);
  };

  return (
    <div className="stay-connected">
      <div className="stay-connected-container">
        <h2 className="stay-connected-title">Restez Connecté</h2>

        {/* Newsletter Section */}
        <div className="stay-connected-section">
          <h3 className="section-title">📧 NEWSLETTER</h3>
          <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              required
              className="email-input"
            />
            <button type="submit" className="subscribe-button">
              S&apos;ABONNER
            </button>
          </form>
          {newsletterStatus && <p className="status-message success">{newsletterStatus}</p>}
          <div className="newsletter-benefits">
            <span className="benefit">✓ Episodes gratuits</span>
            <span className="benefit">✓ Discord</span>
            <span className="benefit">✓ Réductions</span>
          </div>
        </div>

        {/* Social Networks Section */}
        <div className="stay-connected-section">
          <h3 className="section-title">🌐 RÉSEAUX SOCIAUX</h3>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Twitter
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Discord
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram
            </a>
            <a href="https://substack.com" target="_blank" rel="noopener noreferrer" className="social-link">
              Substack
            </a>
          </div>
        </div>

        {/* Discord Section */}
        <div className="stay-connected-section">
          <h3 className="section-title">💬 DISCORD</h3>
          <div className="discord-channels">
            <span className="channel-tag">#feuilleton-discussions</span>
            <span className="channel-tag">#ia-et-litterature</span>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="stay-connected-section">
          <h3 className="section-title">✉️ CONTACT DIRECT</h3>
          <form onSubmit={handleContactSubmit} className="contact-form">
            <input
              type="text"
              value={contactSubject}
              onChange={(e) => setContactSubject(e.target.value)}
              placeholder="Sujet"
              required
              className="contact-input"
            />
            <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              placeholder="Votre message"
              required
              className="contact-textarea"
              rows={4}
            />
            <button type="submit" className="contact-button">
              Envoyer
            </button>
          </form>
          {contactStatus && <p className="status-message success">{contactStatus}</p>}
        </div>
      </div>
    </div>
  );
}
