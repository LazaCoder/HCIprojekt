// pages/blog.js
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import BlogGrid from '../components/BlogGrid'; 
import styles from '../../styles/Blog.module.css'; 
import client from '../api/contentfulClient'; 
import Sidebar from '../components/Sidebar';


export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await client.getEntries({ content_type: 'post' }); 
      const fetchedPosts = res.items.map(item => {
        return {
          title: item.fields.title,
          imageUrl: item.fields.image.fields.file.url, 
          writer: item.fields.writer,
          dateCreated: item.fields.dateCreated,
          text: item.fields.text,
          id: item.sys.id
        };
      });
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Inspiration</title>
      </Head>

      <div className={styles.header}><Header /></div>
      <div className={styles.blogLayout}>
        <BlogGrid posts={posts} />
        <Sidebar stories={posts} />
      </div>
      <Footer />
    </div>
  );
}
