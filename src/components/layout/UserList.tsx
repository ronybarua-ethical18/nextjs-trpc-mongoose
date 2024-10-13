/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { trpc } from "@/config/trpc/client";
import React from "react";

export default function UserList(): React.ReactNode {
  const { data, isLoading, error } = trpc.users.getUsers.useQuery();
  console.log("trpc error", error)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="text-2xl mb-5">You are viewing the data of <span className="font-normal">{data?.loggedUser?.name}</span></h1>
      <ul>
        {data?.users?.map((user: any) => (
          <li className="text-xl text-center font-light" key={user._id.toString()}>User: {user.name}</li>
        ))}
      </ul>
    </div>
  );
}
