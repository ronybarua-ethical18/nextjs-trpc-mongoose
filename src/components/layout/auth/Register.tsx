"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import frame from "../../../../public/images/on-board/Frame.svg";
import frame1 from "../../../../public/images/on-board/Frame (1).svg"
import frame2 from "../../../../public/images/on-board/Frame (2).svg";
import frame3 from "../../../../public/images/on-board/Frame (3).svg";
import frame4 from "../../../../public/images/on-board/Frame (4).svg";
import frame5 from "../../../../public/images/on-board/Frame (5).svg";
import frame6 from "../../../../public/images/on-board/Frame (6).svg";
import frame7 from "../../../../public/images/on-board/Frame (7).svg";
import { cn } from "@/lib/utils";


// Define the shape of each question
type Question = {
  question: string;
  key: string;
};

// Define the shape of each step
type Step = {
  title: string;
  description?: string;
  questions?: Question[];
  isFinalStep?: boolean;
  icon?: string   | undefined ;
};

// Define the structure for form values (all keys will map to boolean values)
type FormValues = Record<string, boolean>;

// Steps configuration with nine steps
const stepsConfig: Step[] = [
  {
    title: "Health and Family",
    description:
      "This info allows Keeper to suggest tax savings. Select all that apply.",
    questions: [
      { question: "Have children aged 11 years or younger", key: "under_11" },
      {
        question: "Have children with special care needs",
        key: "special_needs",
      },
      { question: "Travel for childcare expenses", key: "child_care_expenses" },
      { question: "I am a single parent", key: "single_parent" },
    ],
    icon: frame,
  },
  {
    title: "Work and Education",
    description:
      "This info allows Keeper to suggest tax savings. Select all that apply.",
    questions: [
      { question: "Moved for a new job", key: "moved_for_job" },
      {
        question: "The return distance between home and work is > 37 km",
        key: "long_commute",
      },
      {
        question: "I lived in Norway for part of the year",
        key: "lived_in_norway",
      },
      { question: "Member of a trade union", key: "trade_union" },
    ],
    icon: frame1,
  },
  {
    title: "Travel",
    questions: [{ question: "Used ferry/toll for work", key: "ferry_toll" }],
    icon: frame2,
  },
  {
    title: "Housing",
    questions: [{ question: "Rent an apartment", key: "rent_apartment" }],
    icon: frame3,
  },
  {
    title: "Income",
    questions: [{ question: "Received bonuses", key: "received_bonus" }],
    icon: frame4,
  },
  {
    title: "Investments",
    questions: [
      { question: "Made stock investments", key: "stock_investments" },
    ],
    icon: frame5,
  },
  {
    title: "Donations",
    questions: [{ question: "Donated to charity", key: "charity_donations" }],
    icon: frame6,
  },

  {
    title: "Signup",
    description: "Enter your personal information to complete the signup.",
    isFinalStep: true,
    icon: frame7,
  },
];

// Multi-step form component
export default function Register() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  // Form handling with react-hook-form
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: stepsConfig.reduce<FormValues>((acc, step) => {
      step.questions?.forEach((q) => {
        acc[q.key] = false; // Initialize all questions with `false` values
      });
      return acc;
    }, {} as FormValues), // Assert type of accumulator
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    reset(); // Reset form on submission
    if (currentStepIndex < stepsConfig.length - 1) {
      setCurrentStepIndex((prev) => prev + 1); // Move to the next step
    }
  };

  return (
    <div className="space-y-6 flex w-[560px] p-6 flex-col items-center gap-6 rounded-lg border border-gray-200 bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.08),0_3px_10px_0_rgba(0,0,0,0.10)]" >
      {/* Tabs for navigation */}
      <div className="w-full"><Tabs
        value={currentStepIndex.toString()}
        onValueChange={(value) => setCurrentStepIndex(Number(value))}
      >
        <TabsList className="hidden w-full">
          {stepsConfig.map((step, index) => (
            <TabsTrigger key={index} value={index.toString()}>
              {step.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {stepsConfig.map((step, index) => (
          <TabsContent key={index} value={index.toString()} className="w-full border">
            {/* Step title and description */}

            <div className="flex flex-col items-center justify-center space-y-1">
            <Image src={step.icon ?? "/images/default-icon.svg"} alt="image" height={30} width={30} />

              <h2 className="text-2xl font-semibold text-center">{step.title}</h2>
              {step.description && (
                <p className="text-gray-600 text-center">{step.description}</p>
              )}
            </div>


            {/* Render questions if present */}
            {step.questions?.map((q) => (
              <label key={q.key} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  {...register(q.key)}
                  className="rounded border-gray-300"
                />
                <span>{q.question}</span>
              </label>
            ))}

            {/* Render inputs for final step (signup) */}
            {step.isFinalStep && (
              <div className="space-y-4">
                <Input
                  type="text"
                  {...register("name")}
                  placeholder="Name"
                  className="w-full"
                />
                <Input
                  type="text"
                  {...register("phone")}
                  placeholder="Phone"
                  className="w-full"
                />
                <Input
                  type="text"
                  {...register("email")}
                  placeholder="Email"
                  className="w-full"
                />
              </div>
            )}

            {/* Navigation buttons */}
            <div className={cn("flex space-x-2 w-full justify-between", currentStepIndex == 0 && "justify-end")}>
              {(
                <Button className={cn("hidden",currentStepIndex > 0 && "block",)}
                  type="button"
                  variant="white"
                  onClick={() => setCurrentStepIndex((prev) => prev - 1)}
                >
                  Previous
                </Button>
              )}

              <Button type="submit"  variant="purple" onClick={handleSubmit(onSubmit)}>
                {step.isFinalStep ? "Submit" : "Next"}
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs></div>
    </div>
  );
}
