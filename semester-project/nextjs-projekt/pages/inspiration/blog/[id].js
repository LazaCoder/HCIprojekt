import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import BlogPost from '../../components/BlogPost';
import styles from '../../../styles/BlogPage.module.css';
import { useEffect,useState } from 'react';
import client from '../../api/contentfulClient';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';
import classNames from 'classnames';


// Dummy data for the blog post
const post = {
  title: "How Details Make a Difference",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
  author: "Jane Doe"
};






const BlogPage = () => {


  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const [post, setPost] = useState(null);

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


  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
  
      client.getEntry(id).then(entry => {
        setPost(entry.fields);
       
      }).catch(err => {
        console.error(err);
  
      });
    }
  }, [router.isReady, router.query]);





  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Post</title>
      </Head>
      <div className={styles.header}><Header /></div>
      <div className={styles.blogLayout}>
        <div className={styles.con}>
        <BlogPost post={post} />
        </div>
        <Sidebar className={classNames(styles.sidebar,styles.desktopOnly)} stories={posts} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;