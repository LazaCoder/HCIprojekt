import { createClient } from 'contentful';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const users = await client.getEntries({
    content_type: 'userProfile', // Replace with your user content type ID
    'fields.name': username,
  });

  if (!users.items.length) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const user = users.items[0].fields;
  if (password !== user.password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Implement session management or token generation as per your auth strategy
  res.status(200).json({ message: 'Login successful', user });
}
