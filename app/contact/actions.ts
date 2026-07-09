'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  message: string;
}) {
  const { firstName, lastName, email, institution, message } = data;

  if (!firstName || !lastName || !email || !message) {
    return { success: false, error: 'Missing required fields' };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'Igyan.ai.team@gmail.com',
        pass: 'Akshat@pass2025',
      },
    });

    const mailOptions = {
      from: 'Igyan.ai.team@gmail.com', // sender address
      to: 'Igyan.ai.team@gmail.com', // list of receivers
      subject: `New Contact Form Submission from ${firstName} ${lastName}`, // Subject line
      text: `
You have received a new contact form submission:

Name: ${firstName} ${lastName}
Email: ${email}
Institution: ${institution || 'N/A'}

Message:
${message}
      `, // plain text body
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0047AB;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Institution:</strong> ${institution || 'N/A'}</p>
          <br/>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #00AEEF;">
            ${message.replace(/\n/g, '<br/>')}
          </p>
        </div>
      `, // html body
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email. Please try again later.' };
  }
}
