# EmailJS Setup Guide

This guide will help you set up EmailJS for real-time email functionality on the contact form.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account
5. Note down the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: Contact Form: {{subject}}

New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the ISD Solutions contact form.
```

4. Note down the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Contact Form
1. Open `client/src/pages/contact.tsx`
2. Replace these placeholders:
   - `YOUR_SERVICE_ID` with your actual Service ID
   - `YOUR_TEMPLATE_ID` with your actual Template ID
   - `YOUR_PUBLIC_KEY` with your actual Public Key

## Step 6: Test
1. Fill out the contact form
2. Submit the form
3. Check your email for the message
4. Check EmailJS dashboard for delivery status

## Troubleshooting
- Ensure all IDs are correct
- Check EmailJS dashboard for errors
- Verify email service connection
- Check browser console for errors

## Benefits
- Real-time email delivery
- No server setup required
- Professional email templates
- Delivery tracking
- Spam protection 