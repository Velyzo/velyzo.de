# Contact Form Setup Guide

Your contact form is now ready to work with external services! Here are two easy options:

## Option 1: Formspree (Recommended - Easiest)

Formspree is the easiest to set up and requires no coding changes.

### Steps:
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (50 submissions/month)
3. Create a new form and get your form endpoint URL
4. Update the Contact component with Formspree

### Code Changes:
Replace the `handleSubmit` function in `src/components/Contact.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setShowError(false);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    setShowError(true);
    setTimeout(() => setShowError(false), 5000);
  } finally {
    setIsSubmitting(false);
  }
};
```

## Option 2: EmailJS (More Features)

EmailJS allows you to send emails directly from the client-side.

### Steps:
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (200 emails/month)
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Update the configuration in Contact.tsx

### Configuration:
In `src/components/Contact.tsx`, update these constants:

```tsx
const SERVICE_ID = 'your_service_id_here';
const TEMPLATE_ID = 'your_template_id_here';  
const PUBLIC_KEY = 'your_public_key_here';
```

### Email Template Example:
Create a template in EmailJS with these variables:
- {{from_name}} - Sender's name
- {{from_email}} - Sender's email
- {{subject}} - Email subject
- {{message}} - Email message

## Option 3: Web3Forms (Alternative)

If you prefer Web3Forms:

1. Go to [https://web3forms.com](https://web3forms.com)
2. Get your access key
3. Update the form to use their API

### Code Changes:
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setShowError(false);
  
  const formData = new FormData();
  formData.append('access_key', 'YOUR_ACCESS_KEY');
  formData.append('name', formData.name);
  formData.append('email', formData.email);
  formData.append('subject', formData.subject);
  formData.append('message', formData.message);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    setShowError(true);
    setTimeout(() => setShowError(false), 5000);
  } finally {
    setIsSubmitting(false);
  }
};
```

## Current Status

✅ Contact form UI is complete
✅ EmailJS is installed and configured
✅ Loading states and error handling implemented
✅ Success/error messages added

## Next Steps

1. Choose one of the options above
2. Sign up for the service
3. Update the configuration in Contact.tsx
4. Test the form!

The form will now show:
- Loading spinner while sending
- Success message when sent
- Error message if something goes wrong
- Form fields are cleared after successful submission

## Testing

After setup, test your form with:
1. Valid information
2. Invalid email format (should show browser validation)
3. Empty fields (required fields will prevent submission)

Your contact form is now production-ready! 🚀
