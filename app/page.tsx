'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: 'Newport Beach', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', phone: '', email: '', location: 'Newport Beach', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>

      {/* NAV */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 48px', background: '#4A3728',
        position: 'sticky', top: 0, zIndex: 50,
        borderBottom: '0.5px solid #5C4535'
      }}>
        <Image src="/logo-white.svg" alt="Glow Wellness" width={160} height={40} style={{ objectFit: 'contain' }} />
        <div style={{ display: 'flex', gap: '32px' }}>
          {['About', 'Modalities', 'Locations', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: '#E8C97A', fontSize: '12px', letterSpacing: '0.06em',
              textDecoration: 'none', textTransform: 'uppercase'
            }}>{item}</a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(180deg, #4A3728 0%, #5C4535 70%, #7A6050 100%)',
        padding: '96px 48px 80px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px'
      }}>
        <span style={{ color: '#E8B84B', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Acupuncture & Eastern Medicine</span>
        <h1 style={{ color: '#FFF8EE', fontSize: '48px', fontWeight: 500, letterSpacing: '0.04em', lineHeight: 1.1 }}>Glow Wellness</h1>
        <p style={{ color: '#D4C4B0', fontSize: '15px', lineHeight: 1.8, maxWidth: '440px' }}>
          Restoring balance through time-honored Eastern medicine.<br />Serving Orange and Los Angeles counties.
        </p>
        <p style={{ color: '#E8B84B', fontSize: '13px', marginTop: '8px' }}>
          Call or text to schedule &middot;{' '}
          <a href="tel:9495379265" style={{ color: '#FFF8EE', fontWeight: 500, textDecoration: 'none' }}>949-537-9265</a>
          {' · '}
          <a href="tel:5623158111" style={{ color: '#FFF8EE', fontWeight: 500, textDecoration: 'none' }}>562-315-8111</a>
        </p>
      </section>

      {/* WAVE hero→about */}
      <div style={{ background: '#7A6050' }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '56px' }}>
          <path d="M0,0 C240,56 480,56 720,28 C960,0 1200,0 1440,40 L1440,56 L0,56 Z" fill="#EDE3D8" />
        </svg>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ background: 'linear-gradient(180deg, #EDE3D8 0%, #FBF7F2 100%)', padding: '72px 48px' }}>
        <span style={{ display: 'inline-block', background: '#F5ECD8', color: '#A87820', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 12px', borderRadius: '20px', marginBottom: '16px' }}>Who we are</span>
        <h2 style={{ color: '#2C1E12', fontSize: '32px', fontWeight: 500, marginBottom: '16px' }}>Ancient medicine,<br />modern care</h2>
        <p style={{ color: '#7A6A58', fontSize: '15px', lineHeight: 1.8, maxWidth: '600px', marginBottom: '40px' }}>
          Glow Pacific Wellness is a second-generation family practice rooted in Eastern medicine. Our licensed practitioners combine deep traditional knowledge with modern clinical expertise to restore your body&apos;s natural balance.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '860px' }}>
          {[
            { name: 'Jiyeon Lee, L.Ac., DAcHM', title: 'Co-founder & Licensed Acupuncturist', bio: 'Licensed since 2015, Jiyeon brings a unique dual perspective — trained first as a registered nurse in South Korea, she bridges Western clinical care with the holistic principles of acupuncture and herbal medicine.' },
            { name: 'Jun Woo Kim, L.Ac., DAcHM', title: 'Co-founder & Licensed Acupuncturist', bio: 'Licensed since 2015, Jun Woo holds a Bachelor\'s in Biochemistry and a Doctorate in Acupuncture and Herbal Medicine. He serves as faculty at South Baylo, Dongguk, and Wongu University, bringing academic rigor to every patient visit.' },
          ].map(p => (
            <div key={p.name} style={{ background: 'rgba(255,255,255,0.8)', border: '0.5px solid #E0D4C4', borderRadius: '12px', padding: '28px' }}>
              <div style={{ width: '36px', height: '3px', background: '#D4A833', marginBottom: '16px', borderRadius: '2px' }} />
              <h3 style={{ color: '#2C1E12', fontSize: '15px', fontWeight: 500, marginBottom: '4px' }}>{p.name}</h3>
              <p style={{ color: '#D4A833', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>{p.title}</p>
              <p style={{ color: '#7A6A58', fontSize: '13px', lineHeight: 1.7 }}>{p.bio}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '20px', maxWidth: '860px', background: '#F5ECD8', border: '0.5px solid #E0D4C4', borderRadius: '12px', padding: '24px' }}>
          <p style={{ color: '#7A6A58', fontSize: '13px', lineHeight: 1.7 }}>
            <span style={{ color: '#A87820', fontWeight: 500 }}>A family rooted in healing — </span>
            Glow Pacific Wellness is a second-generation practice. Jun Woo&apos;s father is also a licensed acupuncturist, and this legacy of dedication to Eastern medicine flows through everything we do.
          </p>
        </div>
      </section>

      {/* WAVE about→modalities */}
      <div style={{ background: '#FBF7F2' }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '56px' }}>
          <path d="M0,40 C360,0 720,56 1080,28 C1260,14 1380,8 1440,0 L1440,56 L0,56 Z" fill="#FBF7F2" />
        </svg>
      </div>

      {/* MODALITIES */}
      <section id="modalities" style={{ background: 'linear-gradient(180deg, #FBF7F2 0%, #F0E6D8 100%)', padding: '72px 48px' }}>
        <span style={{ display: 'inline-block', background: '#F5ECD8', color: '#A87820', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 12px', borderRadius: '20px', marginBottom: '16px' }}>What we offer</span>
        <h2 style={{ color: '#2C1E12', fontSize: '32px', fontWeight: 500, marginBottom: '32px' }}>Our modalities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '900px' }}>
          {[
            { name: 'Acupuncture', desc: 'Classical and contemporary needling techniques for a wide range of conditions' },
            { name: 'Electroacupuncture', desc: 'Enhanced stimulation for pain management and nerve conditions' },
            { name: 'Moxibustion', desc: 'Warming therapy using moxa to tonify qi and promote circulation' },
            { name: 'Cupping', desc: 'Myofascial release and circulation support through suction therapy' },
          ].map(m => (
            <div key={m.name} style={{ background: 'rgba(255,255,255,0.85)', border: '0.5px solid #E0D4C4', borderRadius: '12px', padding: '24px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A833', marginBottom: '14px' }} />
              <h3 style={{ color: '#2C1E12', fontSize: '14px', fontWeight: 500, marginBottom: '6px' }}>{m.name}</h3>
              <p style={{ color: '#9A8A78', fontSize: '12px', lineHeight: 1.6 }}>{m.desc}</p>
            </div>
          ))}
          <div style={{ background: 'rgba(255,255,255,0.85)', border: '0.5px solid #E0D4C4', borderRadius: '12px', padding: '24px', gridColumn: 'span 2' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A833', marginBottom: '14px' }} />
            <h3 style={{ color: '#2C1E12', fontSize: '14px', fontWeight: 500, marginBottom: '6px' }}>Herbal Medicine</h3>
            <p style={{ color: '#9A8A78', fontSize: '12px', lineHeight: 1.6 }}>Custom formulas tailored to your constitution and condition</p>
            <p style={{ color: '#C4A860', fontSize: '11px', marginTop: '8px' }}>Available as Powder · Capsule · Decoction</p>
          </div>
        </div>
      </section>

      {/* WAVE modalities→locations */}
      <div style={{ background: '#F0E6D8' }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '56px' }}>
          <path d="M0,20 C200,56 500,0 800,36 C1000,56 1200,10 1440,28 L1440,56 L0,56 Z" fill="#E8DDD0" />
        </svg>
      </div>

      {/* LOCATIONS */}
      <section id="locations" style={{ background: 'linear-gradient(180deg, #E8DDD0 0%, #DDD0C0 100%)', padding: '72px 48px' }}>
        <span style={{ display: 'inline-block', background: '#F5ECD8', color: '#A87820', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 12px', borderRadius: '20px', marginBottom: '16px' }}>Find us</span>
        <h2 style={{ color: '#2C1E12', fontSize: '32px', fontWeight: 500, marginBottom: '32px' }}>Two locations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '800px' }}>
          {[
            { region: 'Orange County', name: 'Newport Beach', address: '2503 Eastbluff Dr. #206E\nNewport Beach, CA 92660', phone: '949-537-9265', tel: '9495379265' },
            { region: 'Los Angeles County', name: 'Hacienda Heights', address: '3120 S. Hacienda Blvd #203B\nHacienda Heights, CA 91745', phone: '562-315-8111', tel: '5623158111' },
          ].map(loc => (
            <div key={loc.name} style={{ background: 'rgba(255,255,255,0.75)', border: '0.5px solid #D8CEC0', borderRadius: '12px', padding: '28px' }}>
              <span style={{ display: 'inline-block', background: '#F5ECD8', color: '#A87820', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '20px', marginBottom: '12px' }}>{loc.region}</span>
              <h3 style={{ color: '#2C1E12', fontSize: '16px', fontWeight: 500, marginBottom: '16px' }}>{loc.name}</h3>
              <p style={{ color: '#7A6A58', fontSize: '13px', lineHeight: 1.7, marginBottom: '12px', whiteSpace: 'pre-line' }}>{loc.address}</p>
              <a href={`tel:${loc.tel}`} style={{ color: '#4A3728', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>{loc.phone}</a>
            </div>
          ))}
        </div>
      </section>

      {/* WAVE locations→contact */}
      <div style={{ background: '#DDD0C0' }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '56px' }}>
          <path d="M0,28 C300,56 600,0 900,36 C1100,60 1300,10 1440,20 L1440,56 L0,56 Z" fill="#6A5040" />
        </svg>
      </div>

      {/* CONTACT */}
      <section id="contact" style={{ background: 'linear-gradient(180deg, #6A5040 0%, #4A3728 50%, #3A2A1E 100%)', padding: '72px 48px' }}>
        <span style={{ display: 'inline-block', background: '#5C4535', color: '#E8B84B', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '3px 12px', borderRadius: '20px', marginBottom: '16px' }}>Get in touch</span>
        <h2 style={{ color: '#FFF8EE', fontSize: '32px', fontWeight: 500, marginBottom: '8px' }}>Send us a message</h2>
        <p style={{ color: '#C4B0A0', fontSize: '14px', marginBottom: '36px' }}>We&apos;ll get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '480px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { label: 'Name', key: 'name', type: 'text', placeholder: 'Your name' },
              { label: 'Phone', key: 'phone', type: 'tel', placeholder: '(949) 000-0000' },
            ].map(f => (
              <div key={f.key} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ color: '#E8B84B', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} value={form[f.key as keyof typeof form]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  style={{ background: '#5C4535', border: '0.5px solid #6A5040', borderRadius: '6px', padding: '10px 14px', color: '#FFF8EE', fontSize: '13px', outline: 'none' }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ color: '#E8B84B', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Email</label>
            <input type="email" placeholder="your@email.com" value={form.email}
              onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
              style={{ background: '#5C4535', border: '0.5px solid #6A5040', borderRadius: '6px', padding: '10px 14px', color: '#FFF8EE', fontSize: '13px', outline: 'none' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ color: '#E8B84B', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Preferred location</label>
            <select value={form.location} onChange={e => setForm(p => ({ ...p, location: e.target.value }))}
              style={{ background: '#5C4535', border: '0.5px solid #6A5040', borderRadius: '6px', padding: '10px 14px', color: '#FFF8EE', fontSize: '13px', outline: 'none' }}>
              <option>Newport Beach</option>
              <option>Hacienda Heights</option>
              <option>No preference</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ color: '#E8B84B', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Message</label>
            <textarea placeholder="Tell us how we can help..." value={form.message} rows={4}
              onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
              style={{ background: '#5C4535', border: '0.5px solid #6A5040', borderRadius: '6px', padding: '10px 14px', color: '#FFF8EE', fontSize: '13px', outline: 'none', resize: 'none', fontFamily: 'inherit' }} />
          </div>
          <button type="submit" disabled={status === 'sending'}
            style={{ background: '#E8B84B', color: '#2C1E12', border: 'none', padding: '12px 28px', borderRadius: '4px', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', alignSelf: 'flex-start' }}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'sent' && <p style={{ color: '#E8B84B', fontSize: '13px' }}>Message sent! We&apos;ll be in touch soon.</p>}
          {status === 'error' && <p style={{ color: '#F09595', fontSize: '13px' }}>Something went wrong. Please call us directly.</p>}
        </form>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#2C1E12', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#6B5E50', fontSize: '11px' }}>© 2026 Glow Pacific Wellness · Licensed Acupuncture & Eastern Medicine</span>
        <span style={{ color: '#D4A833', fontSize: '11px' }}>glowpw.com</span>
      </footer>
    </div>
  )
}
