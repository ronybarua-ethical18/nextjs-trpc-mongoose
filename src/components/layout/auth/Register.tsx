"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from "react";
import QuestionariesModal from "@/components/QuestionariesModal";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();
  const router = useRouter(); // Use useRouter correctly

  console.log("logged user", session);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement custom Register logic here (or via signIn with credentials)
  };

  useEffect(() => {
    if (session?.user) {
      router.push("/customer");
    }
  }, [router, session]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <QuestionariesModal />

        <h2 className="text-2xl font-bold text-center">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              required
            />
          </div>

          {/* Sign In Button */}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="flex items-center justify-between">
          <span className="border-t w-full inline-block"></span>
          <span className="px-4 text-gray-500">or</span>
          <span className="border-t w-full inline-block"></span>
        </div>

        {/* Google Sign In Button */}
        <Button
          variant="outline"
          onClick={() => signIn("google")}
          className="w-full mt-4"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
