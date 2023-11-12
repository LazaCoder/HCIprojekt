// index.js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
app.use(cors()); // Use it before your routes


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define routes here

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Import Contentful Management SDK
const { createClient } = require('contentful-management');

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body; // Get user details from the request body

  // Initialize the Contentful Management client
  const client = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  });

  try {
    // Get your Contentful space and environment
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment('master');

    // Create a new entry in Contentful
    const newUser = await environment.createEntry('userProfile', {
      fields: {
        username: { 'en-US': username },
        email: { 'en-US': email },
        // IMPORTANT: Never store plain-text passwords
      },
    });

    // Send response back to the client
    res.status(201).json({ message: 'User registered successfully', userId: newUser.sys.id });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});
