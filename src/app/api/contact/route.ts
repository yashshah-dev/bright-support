import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, integrate with email service (SendGrid, Resend, etc.)
    // For now, log the form data
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email using email service
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@brightsupport.com.au',
    //   to: 'care@brightsupport.com.au',
    //   subject: `Contact Form: ${subject}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p>
    //          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
    //          <p><strong>Subject:</strong> ${subject}</p>
    //          <p><strong>Message:</strong></p>
    //          <p>${message}</p>`
    // });

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
