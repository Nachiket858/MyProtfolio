'use client';

import { FormEvent, useState } from 'react';

const CONTACT_ITEMS = [
  {
    icon: 'bi-envelope-fill',
    label: 'Email',
    val: 'nachiketshinde2004@gmail.com',
    href: 'mailto:nachiketshinde2004@gmail.com',
  },
  {
    icon: 'bi-telephone-fill',
    label: 'Phone',
    val: '+91 87660 55949',
    href: 'tel:+918766055949',
  },
  {
    icon: 'bi-geo-alt-fill',
    label: 'Location',
    val: 'Chhatrapati Sambhajinagar, Maharashtra',
    href: null,
  },
];

export default function ContactClient() {
  const [contact, setContact] = useState({
    name: '', email: '', projectType: 'Automation project', message: '',
  });
  const [submitMsg, setSubmitMsg] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.message) {
      setSubmitMsg('Please fill all required fields.');
      return;
    }

    setSubmitMsg('Sending message...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          // Make sure this matches your Next.js env config (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY works in browser) 
          // If you kept VITE_ from earlier, standard NEXT doesn't auto-bundle VITE_ vars to the client.
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: contact.name,
          email: contact.email,
          subject: `[Portfolio] ${contact.projectType}`,
          message: contact.message,
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitMsg('Message sent successfully! I will get back to you soon.');
        setContact({ name: '', email: '', projectType: 'Automation project', message: '' });
      } else {
        setSubmitMsg(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setSubmitMsg('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" style={{ paddingTop: '150px' }}>
      <div className="container">
        <div className="aos-fade-up">
          <p className="sec-eyebrow">Contact</p>
          <h2 className="sec-title">Let&#39;s Build Something<br />That Moves the Needle</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-block aos-fade-right" style={{ transitionDelay: '100ms' }}>
            {CONTACT_ITEMS.map(item =>
              item.href ? (
                <a key={item.label} className="contact-item" href={item.href}>
                  <div className="contact-item-icon">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-val">{item.val}</div>
                  </div>
                </a>
              ) : (
                <div key={item.label} className="contact-item" style={{ cursor: 'default' }}>
                  <div className="contact-item-icon">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    <div className="contact-item-val">{item.val}</div>
                  </div>
                </div>
              )
            )}

            <div className="contact-socials">
              {[
                { href: 'https://github.com/Nachiket858', label: 'GitHub', icon: 'bi-github' },
                { href: 'https://www.linkedin.com/in/nachiket-shinde2004', label: 'LinkedIn', icon: 'bi-linkedin' },
                { href: '/Nachiket_Shinde_Resume.pdf', label: 'Resume', icon: 'bi-file-person-fill', download: true },
              ].map(s => (
                <a
                  key={s.label}
                  className="contact-social-btn"
                  href={s.href}
                  target={s.download ? undefined : '_blank'}
                  rel="noreferrer"
                  download={s.download}
                >
                  <i className={`bi ${s.icon}`} /> {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="aos-fade-left" style={{ transitionDelay: '150ms' }}>
            <form className="glass-card contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="c-name">
                    <i className="bi bi-person-fill" /> Name *
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    className="form-input"
                    value={contact.name}
                    onChange={e => setContact({ ...contact, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="c-email">
                    <i className="bi bi-envelope-fill" /> Email *
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    className="form-input"
                    value={contact.email}
                    onChange={e => setContact({ ...contact, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="c-type">
                  <i className="bi bi-tag-fill" /> Project Type
                </label>
                <select
                  id="c-type"
                  className="form-select"
                  value={contact.projectType}
                  onChange={e => setContact({ ...contact, projectType: e.target.value })}
                >
                  <option>Automation project</option>
                  <option>Backend/API system</option>
                  <option>AI/ML implementation</option>
                  <option>Freelance collaboration</option>
                  <option>Full-time opportunity</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="c-msg">
                  <i className="bi bi-chat-left-text-fill" /> Message *
                </label>
                <textarea
                  id="c-msg"
                  className="form-textarea"
                  value={contact.message}
                  onChange={e => setContact({ ...contact, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              {submitMsg && <div className="submit-msg"><i className="bi bi-check-circle-fill" /> {submitMsg}</div>}

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button type="submit" className="btn-primary">
                  <i className="bi bi-send-fill" /> Send Inquiry
                </button>
                <span className="submit-note">
                  <i className="bi bi-shield-lock-fill" /> Securely delivered directly to my inbox via Web3Forms.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
