'use client'

import { useState, FormEvent } from 'react'

const serviceTypes = [
  'Scheduled Maintenance',
  'Battery Health Check & Diagnostics',
  'Software & OTA Update',
  'Tyre & Brake Service',
  'Accident Repair & Bodywork',
  'Genuine Parts Replacement',
  'General Inspection',
  'Other',
]

const bikeModels = [
  'X-47 Original',
  'X-47 Original+',
  'X-47 Recon',
  'X-47 Recon+',
  'X-47 Desert Wing',
  'F77 Mach 2',
  'F77 SuperStreet',
  'Other',
]

export default function WorkshopBookingForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    model: bikeModels[0],
    serviceType: serviceTypes[0],
    date: '',
    description: '',
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
      const res = await fetch('/api/workshop-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3
          className="text-2xl font-bold uppercase text-white mb-2"
          style={{ fontFamily: 'var(--font-barlow), "Barlow Condensed", sans-serif' }}
        >
          SERVICE BOOKED
        </h3>
        <p className="text-[#888] text-sm leading-relaxed">
          Your service appointment has been requested. We&apos;ll confirm the date and time via phone within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
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
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#888] text-xs uppercase tracking-widest mb-2">Your Model *</label>
          <select className="form-input" name="model" value={form.model} onChange={handleChange} required>
            {bikeModels.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[#888] text-xs uppercase tracking-widest mb-2">Service Required *</label>
          <select className="form-input" name="serviceType" value={form.serviceType} onChange={handleChange} required>
            {serviceTypes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-[#888] text-xs uppercase tracking-widest mb-2">Preferred Drop-off Date *</label>
        <input
          className="form-input"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          type="date"
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
      <div>
        <label className="block text-[#888] text-xs uppercase tracking-widest mb-2">Describe the Issue (Optional)</label>
        <textarea
          className="form-input min-h-[100px] resize-y"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Any symptoms, error codes, or specific concerns you'd like us to check..."
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
        {status === 'loading' ? 'BOOKING...' : 'BOOK SERVICE APPOINTMENT'}
      </button>
    </form>
  )
}
