"use client";

import { trpc } from "@/config/trpc/client";
import React from 'react'

export default function UserList(): React.ReactNode {
    const getUsers = trpc.getUsers.useQuery()
  return (
    <div>
        <ul>
            {getUsers.data?.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}
