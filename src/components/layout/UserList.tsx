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
      <ul>
        {data?.map((user: any) => (
          <li key={user._id.toString()}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
