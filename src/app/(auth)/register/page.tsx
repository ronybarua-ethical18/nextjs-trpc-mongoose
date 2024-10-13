"use client"

import React from 'react';
import { useSession } from 'next-auth/react';

const ProtectedPage = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>; // Show a loading state while session is being fetched
  }

  if (status === 'unauthenticated') {
    return <div>You are not logged in.</div>; // Show message for unauthenticated users
  }

  const loggedInUser = session?.user?.name || session?.user?.email;

  return (
    <div>
      Congrats {loggedInUser}, Good Evening!
    </div>
  );
};

export default ProtectedPage;
