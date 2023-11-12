import { createClient } from 'contentful';
 import styles from '../../styles/Profile.module.css'// Assuming you have a CSS module for styling

export default function Profile({ userProfile }) {
  if (!userProfile) {
    return <div>Loading...</div>; // This will show when the page is being statically generated
  }

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileTitle}>{userProfile.name}</h1>
      <p className={styles.profileBio}>{userProfile.bio}</p>
      <p className={styles.profileBio}>{userProfile.password}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const entries = await client.getEntries({ content_type: 'userProfile' });
  const paths = entries.items.map((item) => ({
    params: { id: item.fields.userId.toString() },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: 'userProfile',
    'fields.userId': params.id,
  });

  if (!response.items.length) {
    return { notFound: true };
  }

  return {
    props: {
      userProfile: response.items[0].fields,
    },
    revalidate: 60, // ISR: Revalidate at most once per minute
  };
}
