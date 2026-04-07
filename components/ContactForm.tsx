'use client'

import { useState, FormEvent } from 'react'

interface ContactFormProps {
  subjects?: string[]
}

export default function ContactForm({
  subjects = ['General Enquiry', 'Test Ride', 'Service Booking', 'Parts & Accessories', 'Career'],
}: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: subjects[0],
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', subject: subjects[0], message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[#161616] border border-[#C8FF00]/30 p-8 text-center">
        <svg className="w-12 h-12 text-[#C8FF00] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3
          className="text-2xl font-bold uppercase text-white mb-2"
          style={{ fontFamily: 'var(--font-barlow), "Barlow Condensed", sans-serif' }}
        >
          MESSAGE SENT
        </h3>
        <p className="text-[#888] text-sm">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-[#C8FF00] text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#888] text-xs uppercase tracking-widest mb-2">Full Name *</label>
          <input
            className="form-input"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-[#888] text-xs uppercase tracking-widest mb-2">Phone Number *</label>
          <input
            className="form-input"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            type="tel"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#888] text-xs uppercase tracking-widest mb-2">Email Address</label>
          <input
            className="form-input"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-[#888] text-xs uppercase tracking-widest mb-2">Subject</label>
          <select
            className="form-input"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          >
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-[#888] text-xs uppercase tracking-widest mb-2">Message *</label>
        <textarea
          className="form-input min-h-[120px] resize-y"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Tell us how we can help..."
        />
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[#C8FF00] text-black font-bold uppercase tracking-widest py-4 text-sm hover:bg-[#d4ff33] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}
      </button>
    </form>
  )
}
