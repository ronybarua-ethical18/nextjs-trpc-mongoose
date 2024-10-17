"use client";

import React from "react";
// import { useSession } from "next-auth/react";
import Register from "@/components/layout/auth/Register";

const ProtectedPage = () => {
  // const { data: session, status } = useSession();

  // if (status === 'loading') {
  //   return <div>Loading...</div>; // Show a loading state while session is being fetched
  // }

  // if (status === 'unauthenticated') {
  //   return <div>You are not logged in.</div>; // Show message for unauthenticated users
  // }

  // const loggedInUser = session?.user?.name || session?.user?.email;

  return (
    <div className="flex justify-center items-center border h-[100vh]">
      {/* Congrats {loggedInUser}, Good Evening! */}
      <Register />
    </div>
  );
};

export default ProtectedPage;
