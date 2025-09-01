import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitStatus === 'validation') setSubmitStatus('');
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('validation');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('sending');

    try {
      const web3FormData = new FormData();
      web3FormData.append('access_key', '5f042f53-f23f-48cc-9755-fc57edff8e6a'); // replace with your key
      web3FormData.append('name', formData.name);
      web3FormData.append('email', formData.email);
      web3FormData.append('subject', formData.subject);
      web3FormData.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData,
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Web3Forms Error:', data);
      }
    } catch (err) {
      console.error('Network Error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'nachiketshinde2004@gmail.com', href: 'mailto:nachiketshinde2004@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8766055949', href: 'tel:+918766055949' },
    { icon: MapPin, label: 'Location', value: 'Chh.Sambhajinagar, MH', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Nachiket858', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nachiket-shinde2004', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/Nachiket8766', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-6xl" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-mono">
            Contact
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Let's collaborate and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.href}
                  className="flex items-center space-x-4 group cursor-pointer transition-all duration-300 hover:translate-x-2"
                  onClick={(e) => info.href === '#' && e.preventDefault()}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-cyan-400/25">
                    <info.icon className="text-black" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/20 backdrop-blur-sm rounded-full border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-400/20"
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg backdrop-blur-sm border ${
                  submitStatus === 'sending'
                    ? 'bg-blue-500/20 border-blue-500/40 text-blue-400'
                    : submitStatus === 'success'
                    ? 'bg-green-500/20 border-green-500/40 text-green-400'
                    : submitStatus === 'error'
                    ? 'bg-red-500/20 border-red-500/40 text-red-400'
                    : 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400'
                }`}
              >
                {submitStatus === 'sending' && '📤 Sending message...'}
                {submitStatus === 'success' && '✅ Form Submitted Successfully!'}
                {submitStatus === 'error' && '❌ Something went wrong. Please try again.'}
                {submitStatus === 'validation' && '⚠️ Please fill in all required fields.'}
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject *"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <textarea
                name="message"
                placeholder="Your Message *"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
              />
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg text-black font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-cyan-400/25"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
