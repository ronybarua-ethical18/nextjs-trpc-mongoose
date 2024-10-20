"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from 'next/navigation'; 
import { useEffect, useState } from "react";
import QuestionariesModal from "@/components/QuestionariesModal";
import { FormInput } from "@/components/FormInput";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { data: session } = useSession();
  const router = useRouter(); 

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
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <QuestionariesModal />

      <h2 className="text-2xl font-bold text-center">Sign Up</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          {/* FirstName Input */}
          <div>
            <label htmlFor="first_name" className="sr-only">
              First Name
            </label>
            <Input
              type="text"
              id="first_name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full"
              required
            />
          </div>
          {/* LastName Input */}
          <div>
            <label htmlFor="last_name" className="sr-only">
              Last Name
            </label>
            <Input
              type="text"
              id="last_name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className="w-full"
              required
            />
          </div>
        </div>

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
        {/* Role Input */}
        <FormInput role={role} setRole={setRole} />
        {/* Sign In Button */}
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
