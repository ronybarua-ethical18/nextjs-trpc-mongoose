// src/components/layout/auth/Register.tsx
"use client";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import QuestionariesModal from "@/components/QuestionariesModal";
import { FormInput } from "@/components/FormInput";
import { trpc } from "@/utils/trpc"; // Adjust the import according to your project structure
import toast from "react-hot-toast";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
};

export default function Register() {
  const { data: session } = useSession();
  console.log(session);

  const router = useRouter();
  const { handleSubmit, control, reset } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null); // State to track error

  useEffect(() => {
    if (session?.user) router.push("/customer");
  }, [session, router]);

  const mutation = trpc.auth.signup.useMutation({
    onSuccess: () => {

      toast.success("Email verification link has been sent to your email please check", {
        duration: 4000, // Duration in milliseconds
      });

      reset(); // Reset form after successful submission
      // router.push("/login"); // Redirect to login page after successful registration
    },
    onError: (error) => {
      setError(error.message || "Failed to register. Please try again.");
    },
  });

  const onSubmit = (data: FormData) => {
    setError(null); // Reset error state before submission
    mutation.mutate(data); // Call the tRPC mutation
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <QuestionariesModal />
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Display error message */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex space-x-2">
            {/* First Name */}
            <FormInput
              name="firstName"
              control={control}
              type="text"
              placeholder="First Name"
              required
            />

            {/* Last Name */}
            <FormInput
              name="lastName"
              control={control}
              type="text"
              placeholder="Last Name"
              required
            />
          </div>

          {/* Email */}
          <FormInput
            name="email"
            control={control}
            type="email"
            placeholder="Email"
            required
          />

          {/* Password */}
          <FormInput
            name="password"
            control={control}
            type="password"
            placeholder="Password"
            required
          />

          {/* Role (Select) */}
          <FormInput
            name="role"
            control={control}
            type="select"
            placeholder="Select Role"
            options={[
              { title: "Auditor", value: "auditor" },
              { title: "Customer", value: "customer" },
            ]}
            required
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full text-white">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
