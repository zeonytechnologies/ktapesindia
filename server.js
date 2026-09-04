import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use 'gmail' specifically since it's a Gmail address
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP Connection Error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

// API Endpoint for Enquiry
app.post('/api/send-enquiry', async (req, res) => {
  try {
    const { name, company, phone, email, product, quantity, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and Phone are required fields.' });
    }

    // 1. Send Email to Admin (K Tapes India)
    const adminMailOptions = {
      from: `"${name}" <${process.env.SMTP_EMAIL}>`, // Send from authenticated email to avoid spam blocks
      to: process.env.SMTP_EMAIL, // Receive at the same email
      replyTo: email || undefined,
      subject: `New Enquiry from ${name} - K Tapes India`,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Product Interested:</strong> ${product || 'N/A'}</p>
        <p><strong>Quantity:</strong> ${quantity || 'N/A'}</p>
        <p><strong>Message:</strong><br/> ${message || 'N/A'}</p>
      `,
    };

    // 2. Send Welcome/Confirmation Email to User (only if they provided an email)
    const userMailOptions = email ? {
      from: `"K Tapes India" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: `Thank you for your enquiry - K Tapes India`,
      html: `
        <h2>Thank you for contacting K Tapes India!</h2>
        <p>Hi ${name},</p>
        <p>We have received your enquiry regarding <strong>${product || 'our products'}</strong>.</p>
        <p>Our team will review your requirements and get back to you shortly with a quotation.</p>
        <br/>
        <p>Best Regards,</p>
        <p><strong>K Tapes India Team</strong></p>
        <p>Phone: 074835 52250</p>
      `,
    } : null;

    // Send Admin Email
    await transporter.sendMail(adminMailOptions);

    // Send User Email (if applicable)
    if (userMailOptions) {
      await transporter.sendMail(userMailOptions);
    }

    res.status(200).json({ success: true, message: 'Enquiry sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send enquiry.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
