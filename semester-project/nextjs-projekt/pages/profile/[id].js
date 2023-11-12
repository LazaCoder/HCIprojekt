import { createClient } from 'contentful';
import { useRouter } from 'next/router';

export default function Profile({ userProfile }) {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userProfile.name}</h1>
      <p>{userProfile.bio}</p>
      {/* Display other profile fields as needed */}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: 'userProfile',
    'fields.userId': params.userId,
  });

  if (!response.items.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userProfile: response.items[0].fields,
    },
  };
}
