// app/signin/page.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  console.log("logged user", session);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Sign in using next-auth credentials provider
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.log("something went wrong with login");
      toast.error(result?.error, {
        duration: 4000, // Duration in milliseconds
      });
    } else {
      // router.push('/dashboard'); // Redirect to dashboard or another page after successful login
      toast.success("Login Successful", {
        duration: 2000, // Duration in milliseconds
      });
    }
  };

  useEffect(() => {
    if (session?.user) {
      router.push("/customer");
    }
  }, [router, session]);

  return (
    <div className="flex items-center text-black  justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 text-center bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-[28px] font-semibold">Welcome Back</h2>
          <p className="text-sm">Log in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
          <Button type="submit" className="w-full text-white">
            Sign In
          </Button>
        </form>
        <div className="flex justify-between text-[#71717A] ">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" className=" " />
            <label htmlFor="remember" className="text-sm font-medium ">
              Remember me
            </label>
          </div>
          <p className="text-sm font-medium">Forgot password</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="border-t w-full   inline-block"></span>
          <span className="px-4 min-w-[145px] text-gray-500">
            or continue with
          </span>
          <span className="border-t w-full inline-block"></span>
        </div>

        {/* Google Sign In Button */}
        <Button
          variant="outline"
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center"
        >
          <FcGoogle className="text-lg" />
          <span className="flex-1 text-center ms-[-16px] text-[#1B1B28] font-medium">
            Google
          </span>
        </Button>
        <p className="text-sm text-[#71717A] font-medium">
          Don’t have an account{" "}
          <Link href="/register" className="text-[#00104B]">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
