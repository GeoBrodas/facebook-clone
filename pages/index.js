import Head from 'next/head';
import Header from '@/components/Header';
import { getSession } from 'next-auth/client';
import SideBar from '@/components/SideBar';
import Feed from '@/components/Feed';

function Home() {
  return (
    <div>
      <Head>
        <title>StoryBook</title>
      </Head>

      <Header />

      <main className="flex bg-gray-100">
        <SideBar />
        <Feed />
        {/* Widgets */}
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
