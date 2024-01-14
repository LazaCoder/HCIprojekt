// In contentfulClient.js
import { createClient } from 'contentful';

const client = createClient({
  space: 'l4ebnf5l8c0s',
  accessToken: '_jOluy_iD2y-UN0B1o0HqaJEGkMac1q4MJPlf7XPb3s',
});

console.log("Space ID:", process.env.CONTENTFUL_SPACE_ID);
console.log("Access Token:", process.env.CONTENTFUL_ACCESS_TOKEN);


export default client;
