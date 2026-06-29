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

  const inputStyle = { background: '#5C4535', border: '0.5px solid #6A5040', borderRadius: '6px', padding: '10px 14px', color: '#FFF8EE', fontSize: '13px', outline: 'none', width: '100%' }
  const labelStyle = { color: '#E8B84B', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase' as const }
  const tagStyle = { display: 'inline-block', background: '#F5ECD8', color: '#A87820', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '3px 12px', borderRadius: '20px', marginBottom: '16px' }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <style>{`
        .serif { font-family: 'Playfair Display', Georgia, serif; }
        .nav { display: flex; justify-content: space-between; align-items: center; padding: 16px 48px; background: #4A3728; position: sticky; top: 0; z-index: 50; border-bottom: 0.5px solid #5C4535; }
        .nav-links { display: flex; gap: 32px; }
        .nav-logo { width: 280px; height: 56px; }
        .section-pad { padding-left: 48px; padding-right: 48px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; align-items: start; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .herbal-span { grid-column: span 2; }
        .footer { background: #2C1E12; padding: 24px 48px; display: flex; justify-content: space-between; align-items: center; }
        .hero-pad { padding: 80px 48px 56px; }
        .hero-phones { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
        @media (max-width: 768px) {
          .nav { padding: 12px 20px; }
          .nav-logo { width: 160px; height: 32px; }
          .nav-links { gap: 18px; }
          .nav-links a { font-size: 11px !important; }
          .hero-pad { padding: 48px 20px 40px; }
          .hero-h1 { font-size: 34px !important; }
          .hero-sub { font-size: 14px !important; }
          .about-top { padding-top: 48px !important; }
          .section-pad { padding-left: 20px; padding-right: 20px; }
          .grid-2, .grid-3, .contact-grid, .form-grid { grid-template-columns: 1fr; }
          .contact-grid { gap: 32px; }
          .herbal-span { grid-column: span 1; }
          .footer { padding: 20px; flex-direction: column; gap: 8px; text-align: center; }
        }
        @media (max-width: 480px) {
          .nav-links { display: none; }
          .nav-phone { display: flex !important; }
        }
        .nav-phone { display: none; gap: 16px; }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <Image src="/logo-simple.svg" alt="Glow Wellness" width={280} height={56} className="nav-logo" style={{ objectFit: 'contain' }} />
        <div className="nav-links">
          {['About', 'Modalities', 'Locations', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#E8C97A', fontSize: '12px', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase' }}>{item}</a>
          ))}
        </div>
        <div className="nav-phone">
          <a href="tel:9495379265" style={{ color: '#E8B84B', fontSize: '12px', fontWeight: 500, textDecoration: 'none' }}>949-537-9265</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-pad" style={{ background: 'linear-gradient(180deg, #4A3728 0%, #5C4535 70%, #7A6050 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
        <span style={{ color: '#E8B84B', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Acupuncture & Eastern Medicine</span>
        <h1 className="serif hero-h1" style={{ color: '#FFF8EE', fontSize: '52px', fontWeight: 500, letterSpacing: '0.01em', lineHeight: 1.1 }}>Glow Wellness</h1>
        <p className="hero-sub" style={{ color: '#D4C4B0', fontSize: '15px', lineHeight: 1.8, maxWidth: '420px' }}>
          Restoring balance through time-honored Eastern medicine. Serving Orange and Los Angeles counties.
        </p>
        <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#E8B84B', fontSize: '12px', letterSpacing: '0.04em' }}>Call or text to schedule</span>
          <div className="hero-phones">
            <a href="tel:9495379265" style={{ color: '#FFF8EE', fontWeight: 500, fontSize: '14px', textDecoration: 'none' }}>949-537-9265</a>
            <span style={{ color: '#7A6A58' }}>·</span>
            <a href="tel:5623158111" style={{ color: '#FFF8EE', fontWeight: 500, fontSize: '14px', textDecoration: 'none' }}>562-315-8111</a>
          </div>
        </div>
      </section>

      {/* WAVE hero→about */}
      <div style={{ background: '#7A6050' }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '56px' }}>
          <path d="M0,20 C200,56 500,0 800,36 C1000,56 1200,10 1440,28 L1440,56 L0,56 Z" fill="#EDE3D8" />
        </svg>
      </div>

      {/* ABOUT */}
      <section id="about" className="section-pad about-top" style={{ background: 'linear-gradient(180deg, #EDE3D8 0%, #FBF7F2 100%)', paddingTop: '72px', paddingBottom: 0 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span style={tagStyle}>Who we are</span>
          <h2 className="serif" style={{ color: '#2C1E12', fontSize: '32px', fontWeight: 500, marginBottom: '16px' }}>Ancient medicine,<br />modern care</h2>
          <p style={{ color: '#7A6A58', fontSize: '15px', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 40px' }}>
            Glow Wellness is a second-generation family practice rooted in Eastern medicine. Our licensed practitioners combine deep traditional knowledge with modern clinical expertise to restore your body&apos;s natural balance.
          </p>

          <div className="grid-2" style={{ marginBottom: '20px' }}>
            {[
              { name: 'Jiyeon Lee, L.Ac., DAcHM', title: 'Co-founder & Practitioner', photo: '/dr-lee.jpg', bio: 'Licensed since 2015, Dr. Lee brings a unique dual perspective — trained first as a registered nurse in South Korea, she bridges Western clinical care with the holistic principles of acupuncture and herbal medicine.' },
              { name: 'Jun Woo Kim, L.Ac., DAcHM', title: 'Co-founder & Practitioner', photo: '/dr-kim.jpg', bio: 'Licensed since 2015, Dr. Kim holds a Bachelor\'s in Biochemistry and a Doctorate in Acupuncture and Herbal Medicine. He serves as faculty at South Baylo, Dongguk, and Wongu University, bringing academic rigor to every patient visit.' },
            ].map(p => (
              <div key={p.name} style={{ background: 'rgba(255,255,255,0.6)', borderRadius: '12px', padding: '28px', textAlign: 'left', position: 'relative' }}>
                <Image src={p.photo} alt={p.name} width={56} height={56} style={{ position: 'absolute', top: '20px', right: '20px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top' }} />
                <div style={{ width: '36px', height: '3px', background: '#D4A833', borderRadius: '2px', marginBottom: '16px' }} />
                <h3 style={{ color: '#2C1E12', fontSize: '15px', fontWeight: 500, marginBottom: '4px' }}>{p.name}</h3>
                <p style={{ color: '#D4A833', fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>{p.title}</p>
                <p style={{ color: '#7A6A58', fontSize: '13px', lineHeight: 1.7 }}>{p.bio}</p>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(245,236,216,0.7)', borderRadius: '12px', padding: '24px', textAlign: 'left' }}>
            <p style={{ color: '#7A6A58', fontSize: '13px', lineHeight: 1.7 }}>
              <span style={{ color: '#A87820', fontWeight: 500 }}>A family rooted in healing — </span>
              Glow Wellness is a second-generation practice. Dr. Kim&apos;s father is also a Doctor of Eastern Medicine, and this legacy of dedication to Eastern medicine flows through everything we do. Together, Dr. Lee and Dr. Kim have created a clinic where tradition, science, and compassionate care come together.
            </p>
          </div>
        </div>
      </section>

      {/* WAVE about→modalities */}
      <div style={{ background: '#FBF7F2' }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '56px' }}>
          <path d="M0,40 C360,0 720,56 1080,28 C1260,14 1380,8 1440,0 L1440,56 L0,56 Z" fill="#FBF7F2" />
        </svg>
      </div>

      {/* MODALITIES */}
      <section id="modalities" className="section-pad" style={{ background: 'linear-gradient(180deg, #FBF7F2 0%, #F0E6D8 100%)', paddingTop: '48px', paddingBottom: '72px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span style={tagStyle}>What we offer</span>
          <h2 className="serif" style={{ color: '#2C1E12', fontSize: '32px', fontWeight: 500, marginBottom: '32px' }}>Our modalities</h2>
          <div className="grid-3">
            {[
              { name: 'Acupuncture', desc: 'Classical and contemporary needling techniques for a wide range of conditions' },
              { name: 'Electroacupuncture', desc: 'Enhanced stimulation for pain management and nerve conditions' },
              { name: 'Moxibustion', desc: 'Warming therapy using moxa to tonify qi and promote circulation' },
              { name: 'Cupping', desc: 'Myofascial release and circulation support through suction therapy' },
            ].map(m => (
              <div key={m.name} style={{ background: 'rgba(255,255,255,0.85)', border: '0.5px solid #E0D4C4', borderRadius: '12px', padding: '24px', textAlign: 'left' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A833', marginBottom: '14px' }} />
                <h3 style={{ color: '#2C1E12', fontSize: '14px', fontWeight: 500, marginBottom: '6px' }}>{m.name}</h3>
                <p style={{ color: '#9A8A78', fontSize: '12px', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            ))}
            <div className="herbal-span" style={{ background: 'rgba(255,255,255,0.85)', border: '0.5px solid #E0D4C4', borderRadius: '12px', padding: '24px', textAlign: 'left' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D4A833', marginBottom: '14px' }} />
              <h3 style={{ color: '#2C1E12', fontSize: '14px', fontWeight: 500, marginBottom: '6px' }}>Herbal Medicine</h3>
              <p style={{ color: '#9A8A78', fontSize: '12px', lineHeight: 1.6 }}>Custom formulas tailored to your constitution and condition</p>
              <p style={{ color: '#C4A860', fontSize: '11px', marginTop: '8px' }}>Available as Powder · Capsule · Decoction</p>
            </div>
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
      <section id="locations" className="section-pad" style={{ background: 'linear-gradient(180deg, #E8DDD0 0%, #DDD0C0 100%)', paddingTop: '72px', paddingBottom: '72px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <span style={tagStyle}>Find us</span>
          <div className="grid-2">
            {[
              { region: 'Orange County', name: 'Newport Beach', address: '2503 Eastbluff Dr. #206E\nNewport Beach, CA 92660', phone: '949-537-9265', tel: '9495379265' },
              { region: 'Los Angeles County', name: 'Hacienda Heights', address: '3120 S. Hacienda Blvd #203B\nHacienda Heights, CA 91745', phone: '562-315-8111', tel: '5623158111' },
            ].map(loc => (
              <div key={loc.name} style={{ background: 'rgba(255,255,255,0.75)', border: '0.5px solid #D8CEC0', borderRadius: '12px', padding: '28px', textAlign: 'left' }}>
                <span style={{ display: 'inline-block', background: '#F5ECD8', color: '#A87820', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '20px', marginBottom: '12px' }}>{loc.region}</span>
                <h3 style={{ color: '#2C1E12', fontSize: '16px', fontWeight: 500, marginBottom: '16px' }}>{loc.name}</h3>
                <p style={{ color: '#7A6A58', fontSize: '13px', lineHeight: 1.7, marginBottom: '12px', whiteSpace: 'pre-line' }}>{loc.address}</p>
                <a href={`tel:${loc.tel}`} style={{ color: '#4A3728', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>{loc.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAVE locations→contact */}
      <div style={{ background: '#DDD0C0' }}>
        <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '56px' }}>
          <path d="M0,28 C300,56 600,0 900,36 C1100,60 1300,10 1440,20 L1440,56 L0,56 Z" fill="#6A5040" />
        </svg>
      </div>

      {/* CONTACT */}
      <section id="contact" className="section-pad" style={{ background: 'linear-gradient(180deg, #6A5040 0%, #4A3728 50%, #3A2A1E 100%)', paddingTop: '72px', paddingBottom: '72px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="contact-grid">

            {/* 왼쪽 텍스트 */}
            <div>
              <span style={{ display: 'inline-block', background: '#5C4535', color: '#E8B84B', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '3px 12px', borderRadius: '20px', marginBottom: '16px' }}>Get in touch</span>
              <h2 className="serif" style={{ color: '#FFF8EE', fontSize: '32px', fontWeight: 500, marginBottom: '16px', lineHeight: 1.2 }}>Send us a message</h2>
              <p style={{ color: '#C4B0A0', fontSize: '14px', lineHeight: 1.8, marginBottom: '24px' }}>We&apos;ll get back to you as soon as possible.</p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                <a href="tel:9495379265" style={{ color: '#E8B84B', fontSize: '13px', textDecoration: 'none' }}>Newport Beach · 949-537-9265</a>
                <a href="tel:5623158111" style={{ color: '#E8B84B', fontSize: '13px', textDecoration: 'none' }}>Hacienda Heights · 562-315-8111</a>
              </div>
            </div>

            {/* 오른쪽 폼 */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
              <div className="form-grid">
                {[
                  { label: 'Name', key: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Phone', key: 'phone', type: 'tel', placeholder: '(949) 000-0000' },
                ].map(f => (
                  <div key={f.key} style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
                    <label style={labelStyle}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                      style={inputStyle} />
                  </div>
                ))}
              </div>
              <div className="form-grid">
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
                  <label style={labelStyle}>Email</label>
                  <input type="email" placeholder="your@email.com" value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
                  <label style={labelStyle}>Preferred location</label>
                  <select value={form.location} onChange={e => setForm(p => ({ ...p, location: e.target.value }))}
                    style={inputStyle}>
                    <option>Newport Beach</option>
                    <option>Hacienda Heights</option>
                    <option>No preference</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
                <label style={labelStyle}>Message</label>
                <textarea placeholder="Tell us how we can help..." value={form.message} rows={4}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ ...inputStyle, resize: 'none' as const, fontFamily: 'inherit' }} />
              </div>
              <button type="submit" disabled={status === 'sending'}
                style={{ background: '#E8B84B', color: '#2C1E12', border: 'none', padding: '12px 28px', borderRadius: '4px', fontSize: '12px', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' as const, cursor: 'pointer', alignSelf: 'flex-start' }}>
                {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
              {status === 'sent' && <p style={{ color: '#E8B84B', fontSize: '13px' }}>Message sent! We&apos;ll be in touch soon.</p>}
              {status === 'error' && <p style={{ color: '#F09595', fontSize: '13px' }}>Something went wrong. Please call us directly.</p>}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span style={{ color: '#6B5E50', fontSize: '11px' }}>© 2026 Glow Wellness · Licensed Acupuncture & Eastern Medicine</span>
        <span style={{ color: '#D4A833', fontSize: '11px' }}>glowpw.com</span>
      </footer>

    </div>
  )
}
