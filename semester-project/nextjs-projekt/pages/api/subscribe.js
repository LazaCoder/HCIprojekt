// pages/api/subscribe.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;

    const params = new URLSearchParams();
    params.append('apikey', '6C36A8FD9F7FED7D670D1864157A1078C3E2D3EFB08B024295373FCEDF007476F2D496A44A173424D3B71EA999E4820E');
    params.append('subject', 'Newsletter Subscription');
    params.append('from', 'ivanlazarusic4@gmail.com');
    params.append('to', email);
    params.append('bodyText', 'Thank you for subscribing to our newsletter.');

    try {
      const response = await fetch('https://api.elasticemail.com/v2/email/send', {
        method: 'POST',
        body: params
      });

      if (response.ok) {
        return res.status(200).json({ message: 'Subscription successful' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error in subscription:', error);
      return res.status(500).json({ message: 'Error subscribing to newsletter' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
