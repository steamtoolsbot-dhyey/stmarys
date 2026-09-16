import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';
import { fullSchoolData } from '../data/fullSchoolData';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage({ onNavigate }) {
  const { contactPage, meta } = fullSchoolData;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <button onClick={() => onNavigate('home')} className="hover:text-navy-900 font-semibold">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-bold">Contact</span>
        </div>

        {/* Page Header */}
        <ScrollReveal animation="fade-up" className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-700 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 inline-block">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-navy-950 tracking-tight">
            {contactPage.title}
          </h1>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            {contactPage.intro}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address */}
            <ScrollReveal animation="pop" delay={100}>
              <div className="bg-white rounded-3xl p-6 border border-sand-200 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy-950 mb-1">
                    {contactPage.addressTitle}
                  </h3>
                  <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                    {contactPage.addressText}
                  </p>
                  <a
                    href={meta.address.mapQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-gold-700 mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Phone & Timings */}
            <ScrollReveal animation="pop" delay={200}>
              <div className="bg-white rounded-3xl p-6 border border-sand-200 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-navy-950 mb-1">
                    {contactPage.phoneTitle}
                  </h3>
                  <div className="text-sm text-slate-600 whitespace-pre-line font-medium leading-relaxed">
                    <a href="tel:02825297026" className="hover:text-navy-900 block font-bold">+91 – 2825 – 297026</a>
                    <a href="tel:919484798898" className="hover:text-navy-900 block font-bold">+91 9484798898</a>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-2">
                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                    <span>{contactPage.timingsText}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal animation="pop" delay={300}>
              <div className="bg-white rounded-3xl p-6 border border-sand-200 shadow-soft flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy-950 mb-1">
                    {contactPage.emailTitle}
                  </h3>
                  <a
                    href={`mailto:${contactPage.emailText}`}
                    className="text-sm text-navy-900 font-bold hover:underline"
                  >
                    {contactPage.emailText}
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-soft">
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-6">
                  Send Us a Message
                </h3>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-navy-950">
                      Message Sent Successfully
                    </h4>
                    <p className="text-slate-600 text-sm max-w-sm mx-auto">
                      Thank you for contacting St. Mary's School. Our office team will reply to your inquiry shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2 rounded-xl bg-navy-900 text-white text-xs font-bold"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          placeholder="Admission / Syllabus / General"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Your Message *
                      </label>
                      <textarea
                        rows="4"
                        required
                        placeholder="Please write your inquiry here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-gold-400" />
                      <span>Submit Message</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </div>
  );
}
