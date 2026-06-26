import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, phone, email, location, message } = await req.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: `"Glow Wellness Website" <${process.env.GMAIL_USER}>`,
    to: 'glowpw@gmail.com',
    replyTo: email,
    subject: `New message from ${name} — ${location}`,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Preferred location:</strong> ${location}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
