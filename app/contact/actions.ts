'use server';

import nodemailer from 'nodemailer';

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[character] ?? character));

export async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  message: string;
}) {
  const firstName = data.firstName?.trim();
  const lastName = data.lastName?.trim();
  const email = data.email?.trim();
  const institution = data.institution?.trim();
  const message = data.message?.trim();

  if (!firstName || !lastName || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return { success: false, error: 'Please complete the required fields with a valid email address.' };
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_RECIPIENT ?? smtpUser;

  if (!smtpUser || !smtpPass || !recipient) {
    console.error('Contact email is not configured. Set SMTP_USER, SMTP_PASS, and CONTACT_RECIPIENT.');
    return { success: false, error: 'Email service is not configured. Please try again later.' };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? smtpUser,
      to: recipient,
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `New contact form submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nInstitution: ${institution || 'Not provided'}\n\nMessage:\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;padding:24px;color:#1e293b"><h2 style="margin:0 0 20px;color:#0047ab">New Contact Form Submission</h2><p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p><p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a></p><p><strong>Institution:</strong> ${escapeHtml(institution || 'Not provided')}</p><hr style="border:0;border-top:1px solid #e2e8f0;margin:24px 0"/><p><strong>Message</strong></p><div style="padding:16px;border-left:4px solid #00aeef;background:#f8fafc;line-height:1.6">${escapeHtml(message).replace(/\n/g, '<br/>')}</div></div>`,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error: 'Failed to send email. Please try again later.' };
  }
}
