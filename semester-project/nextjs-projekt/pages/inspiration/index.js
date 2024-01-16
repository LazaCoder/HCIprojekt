// pages/blog.js

import Head from 'next/head';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import BlogGrid from '../components/BlogGrid'; 
import Sidebar from '../components/Sidebar'; 
import styles from '../../styles/Blog.module.css'; 

const posts = [
  {
    title: "How Details Make a Difference",
    imageUrl: "/blogpost1.jpg" // Replace with your image paths
  },
  {
    title: "Preparing for the Holiday Spirit",
    imageUrl: "/images/post2.jpg"
  },
  {
    title: "Design the Bedroom Like the Pros",
    imageUrl: "/images/post3.jpg"
  },
  {
    title: "Exploring Spanish Interiors",
    imageUrl: "/images/post4.jpg"
  },
  {
    title: "Fresh Ideas for Your Home",
    imageUrl: "/images/post5.jpg"
  },
  {
    title: "Timeless Design Trends",
    imageUrl: "/images/post6.jpg"
  },
  // ...add more posts as needed
];

const stories = [
  {
    title: "Artisanal Craft in Modern Design",
    imageUrl: "/blogpost1.jpg"
},
{
title: "The Future of Furniture",
imageUrl: "/images/story2.jpg"
},
{
title: "Sustainable Fabrics: The New Trend",
imageUrl: "/images/story3.jpg"
},
{
title: "Colors of the Year",
imageUrl: "/images/story4.jpg"
},
{
title: "Minimalist Spaces",
imageUrl: "/images/story5.jpg"
},
{
title: "Reviving Vintage Decor",
imageUrl: "/images/story6.jpg"
},
// ...add more stories as needed
];

export default function Blog() {
return (
<div className={styles.container}>
<Head>
<title>Inspiration</title>
</Head>

<div className={styles.header}><Header /></div>
<div className={styles.blogLayout}>
<BlogGrid posts={posts} />
<Sidebar stories={stories} />
</div>
<Footer />
</div>
);
}