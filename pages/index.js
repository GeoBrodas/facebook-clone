import Head from 'next/head';
import Header from '@/components/Header';
import { getSession } from 'next-auth/client';
import SideBar from '@/components/SideBar';
import Feed from '@/components/Feed';

import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from 'firebase-config';

// Linear Progress
import { LinearProgress } from '@material-ui/core';
import Widgets from '@/components/Widgets';

function Home() {
  const [realtimePosts, loading] = useCollection(
    db.collection('posts').orderBy('timestamp', 'desc')
  );

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>StoryBook</title>
      </Head>

      <Header />
      {loading && <LinearProgress color="primary" />}

      <main className="flex">
        <SideBar />
        <Feed posts={realtimePosts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default Home;
