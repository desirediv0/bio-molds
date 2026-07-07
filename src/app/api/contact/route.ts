import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, inquiry_type, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false, // false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Premium HTML template design
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Submission</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              background-color: #f4f7f6;
              color: #333333;
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
            }
            .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 15px rgba(0,0,0,0.05);
              border: 1px solid #eef2f5;
            }
            .header {
              background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
              padding: 30px;
              text-align: center;
              color: #ffffff;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
              letter-spacing: 0.5px;
            }
            .content {
              padding: 40px 30px;
            }
            .field-group {
              margin-bottom: 25px;
              border-bottom: 1px solid #f0f4f8;
              padding-bottom: 15px;
            }
            .field-group:last-child {
              border-bottom: none;
              padding-bottom: 0;
            }
            .label {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #0891b2;
              font-weight: 700;
              margin-bottom: 6px;
            }
            .value {
              font-size: 16px;
              line-height: 1.6;
              color: #2c3e50;
            }
            .message-box {
              background-color: #f8fafc;
              border-left: 4px solid #06b6d4;
              padding: 15px 20px;
              border-radius: 0 8px 8px 0;
              margin-top: 5px;
              font-style: italic;
            }
            .footer {
              background-color: #f8fafc;
              text-align: center;
              padding: 20px;
              font-size: 12px;
              color: #64748b;
              border-top: 1px solid #eef2f5;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>BioMolds Contact Inquiry</h1>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field-group">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="label">Phone Number</div>
                <div class="value">${phone || 'Not Provided'}</div>
              </div>
              <div class="field-group">
                <div class="label">Inquiry Type</div>
                <div class="value" style="display: inline-block; background-color: #e0f7fa; color: #006064; padding: 4px 12px; border-radius: 12px; font-size: 14px; font-weight: 600;">${inquiry_type || 'General Enquiry'}</div>
              </div>
              <div class="field-group">
                <div class="label">Message</div>
                <div class="value message-box">${message.replace(/\n/g, '<br/>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent dynamically from the BioMolds contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"${name}" <${process.env.FROM_EMAIL}>`,
      to: ['biomolediscsol@gmail.com', 'biomolediscsol@biomolds.com'],
      replyTo: email,
      subject: `[${inquiry_type || 'General Enquiry'}] New Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${inquiry_type || 'General'}\nMessage:\n${message}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error: unknown) {
    console.error('SMTP Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
