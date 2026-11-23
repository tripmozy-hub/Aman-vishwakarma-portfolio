import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Copy, Check, ArrowUpRight, Download, Send, Sparkles, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioConfig } from '../../data/portfolioConfig';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web Development',
    message: ''
  });

  const { personal, contact, socialLinks } = portfolioConfig;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
      setFormData({ name: '', email: '', service: 'Full-Stack Web Development', message: '' });
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full bg-[#08080A] text-white flex flex-col justify-between pt-16 pb-8 px-6 sm:px-8 lg:px-12 overflow-hidden select-none"
    >
      {/* Top Deliverables Ticker Marquee (Frames 28 & 29) */}
      <div className="w-full border-y border-white/10 py-3 overflow-hidden select-none opacity-60">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap font-mono-code text-xs tracking-widest text-gray-400 uppercase flex gap-8"
        >
          <span>{contact.ticker}</span>
          <span>{contact.ticker}</span>
          <span>{contact.ticker}</span>
        </motion.div>
      </div>

      {/* CENTERPIECE: Massive Glowing "LET'S TALK" Headline & Pill Buttons (Frames 28 & 29) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto py-16 sm:py-24 text-center space-y-10">
        
        {/* Subtle subheader */}
        <p className="font-mono-code text-xs sm:text-sm font-bold tracking-[0.25em] text-[#f20d20] uppercase">
          // HAVE A VISIONARY PROJECT IN MIND?
        </p>

        {/* Huge glowing LET'S TALK headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-anton text-5xl sm:text-8xl md:text-[150px] lg:text-[180px] font-black tracking-tight text-white uppercase leading-none select-none"
          style={{
            textShadow: '0 0 50px rgba(255,255,255,0.7), 0 0 100px rgba(255,255,255,0.3)'
          }}
        >
          {contact.heading}
        </motion.h2>

        {/* Row of Pill Buttons matching Frame 28 & 29 */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-3xl mx-auto">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-black font-mono-code text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:scale-105"
            >
              {s.label}
            </a>
          ))}

          {/* Send an Email Button (Frame 28) */}
          <button
            onClick={() => setFormOpen(true)}
            className="px-6 py-2.5 rounded-full bg-white text-black hover:bg-[#f20d20] hover:text-white font-mono-code text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-md hover:scale-105"
          >
            SEND AN EMAIL
          </button>
        </div>

        {/* Direct Contacts & Download CV Bar */}
        <div className="pt-8 flex flex-wrap justify-center items-center gap-4 text-xs font-mono-code">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#f20d20]" />
            <span>{personal.email}</span>
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
          </button>

          <button
            onClick={handleCopyPhone}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>{personal.phone}</span>
            {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-gray-500" />}
          </button>

          <a
            href={personal.resumeUrl}
            download="Aman_Vishwakarma_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#f20d20]" />
            <span>DOWNLOAD CV (PDF)</span>
          </a>
        </div>

      </div>

      {/* FOOTER CREDITS (Frames 28 & 29) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono-code text-gray-500">
        <p>{contact.copyright}</p>

        <p className="text-gray-400">{contact.credit}</p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0f1016] border border-white/15 rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative space-y-6"
              style={{
                paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))'
              }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono-code text-xs text-[#f20d20] font-bold uppercase tracking-widest">// DIRECT INQUIRY</span>
                  <h3 className="font-anton text-3xl uppercase tracking-tight text-white mt-1">LET'S COLLABORATE</h3>
                  <p className="text-xs text-gray-400 mt-1 font-body">Direct message to Aman Vishwakarma</p>
                </div>
                <button
                  onClick={() => setFormOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-white/5 rounded-2xl border border-white/10">
                  <Sparkles className="w-8 h-8 text-[#f20d20] mx-auto animate-bounce" />
                  <h4 className="font-anton text-2xl uppercase text-white">MESSAGE SENT!</h4>
                  <p className="text-xs text-gray-300">Thank you! Aman will respond to your email within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#f20d20] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#f20d20] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#f20d20] outline-none"
                    >
                      <option value="Full-Stack Web Development">Full-Stack Web Development (MERN)</option>
                      <option value="Landing Page Design">High-Impact Landing Page Design</option>
                      <option value="Creative Technology & Motion">Creative Technology & Motion</option>
                      <option value="UI/UX Architecture">UI/UX Architecture</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-gray-400 uppercase mb-1">Project Details</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project timeline and vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-[#f20d20] outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-[#f20d20] hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
