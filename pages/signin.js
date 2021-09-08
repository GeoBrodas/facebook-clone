import { signIn, getSession } from 'next-auth/client';

import Image from 'next/image';
import Head from 'next/head';
import { Fragment } from 'react';

function Auth() {
  return (
    <Fragment>
      <Head>
        <title>SignIn to Facebook</title>
      </Head>
      <div className="grid place-items-center mt-20">
        <div className="max-w-lg m-4 bg-blue-50 rounded-xl p-10 grid place-items-center">
          <div className="grid place-items-center justify-center p-10 items-center">
            <Image
              layout="fixed"
              className="rounded-full"
              alt="Georgey V B"
              placeholder="blur"
              blurDataURL="LPEqNcOu4.tQ*KQ.Y4nOD3o{^4o}"
              src="/images/new.jpg"
              width={200}
              height={200}
            />
            <p className="mt-4 text-lg text-center">
              Hey there! I am Georgey, the developer of this project! Thanks for
              showing interest, this is merely a clone focussing more on the
              front-end of the application. Hope you enjoy!
            </p>
          </div>

          <button
            onClick={signIn}
            className="p-4 hover:bg-blue-500 select-none text-white md:animation bg-blue-300 rounded-full w-40 active:dis"
          >
            Sign In
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  // checks for the incoming request and sees whether a session token is available or not and accordingly takes action

  if (session) {
    return {
      redirect: {
        destination: '/',
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

export default Auth;
