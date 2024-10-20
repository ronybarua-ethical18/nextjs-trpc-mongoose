"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import frame from "../../public/images/on-board/Frame.svg";
import frame1 from "../../public/images/on-board/Frame (1).svg";
import frame2 from "../../public/images/on-board/Frame (2).svg";
import frame3 from "../../public/images/on-board/Frame (3).svg";
import frame4 from "../../public/images/on-board/Frame (4).svg";
import frame5 from "../../public/images/on-board/Frame (5).svg";
import frame6 from "../../public/images/on-board/Frame (6).svg";
import { cn } from "@/lib/utils";
import { FaQuestion } from "react-icons/fa";

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
  icon?: string | undefined;
};

// Steps configuration with nine steps
const stepsConfig: Step[] = [
  {
    title: "Health and Family",
    description:
      "This info allows Keeper to suggest tax savings. Select all that apply.",
    questions: [
      { question: "Have children aged 11 years or younger", key: "under_11" },
      {
        question: "I have children aged 12 or older with special care needs",
        key: "special_needs",
      },
      {
        question:
          "Have additional travel distance or expenses related to dropping off the child in a child day care centre or after-school supervision scheme",
        key: "child_care_expenses",
      },
      { question: "I am a single parent", key: "single_parent" },
    ],
    icon: frame,
  },
  {
    title: "Bank and Loans",
    description:
      "This info allows Keeper to suggest tax savings. Select all that apply.",
    questions: [
      { question: "Have a loan", key: "moved_for_job" },
      {
        question: "Have refinanced a loan in the last year",
        key: "long_commute",
      },
      {
        question: "Have taken out a joint loan with someone",
        key: "lived_in_norway",
      },
      {
        question: "Have young people’s housing savings (BSU)",
        key: "trade_union",
      },
      {
        question: "I have sold shares or securities at a loss",
        key: "sold_shares",
      },
    ],
    icon: frame1,
  },
  {
    title: "Work and education",
    description:
      "This info allows Keeper to suggest tax savings. Select all that apply.",
    questions: [
      { question: "Moved for a new job", key: "moved_for_job" },
      {
        question: "I work as a fisherman",
        key: "long_commute",
      },
      {
        question: "I work as a seafarer",
        key: "lived_in_norway",
      },
      {
        question:
          "The return distance between home and work is more than 37 kilometres",
        key: "trade_union",
      },
      {
        question:
          "Have expenses for road toll or ferry when travelling between your home and workplace",
        key: "lived_in_norway",
      },
      {
        question: "I stay away from home overnight because of work",
        key: "lived_in_norway",
      },
    ],
    icon: frame2,
  },
  {
    title: "Housing and Property",
    description:
      "This info allows Keeper to suggest tax savings. Select all that apply.",
    questions: [
      {
        question:
          "Housing in a housing association, housing company or jointly owned property",
        key: "ferry_toll",
      },
      {
        question: "I have rented out a residential property or a holiday home",
        key: "ferry_toll",
      },
      {
        question: "Sold a residential property or holiday home with a loss",
        key: "ferry_toll",
      },
    ],
    icon: frame3,
  },
  {
    title: "Gift and donations",
    description:
      "This info allows Keeper to suggest tax savings. Select all that apply.",
    questions: [
      {
        question: "I have made donations to voluntary organisations",
        key: "rent_apartment",
      },
    ],
    icon: frame4,
  },
  {
    title: "Hobby, Odd jobs and Extra incomes",
    description:
      "This info allows Keeper to suggest tax savings. Select all that apply.",
    questions: [
      { question: "I have a sole proprietorship", key: "received_bonus" },
      {
        question:
          "Sell goods or services, blog/influencer, practise e-sports (gaming), breed animals, or rent out property on a small scale.",
        key: "received_bonus",
      },
      {
        question: "I have received salary from odd jobs and services",
        key: "received_bonus",
      },
    ],
    icon: frame5,
  },
  {
    title: "Foreign Income",
    description:
      "This info allows Keeper to suggest tax savings. Select all that apply.",
    questions: [
      {
        question:
          "Have income or wealth in another country than Norway and pay tax in the other country",
        key: "stock_investments",
      },
    ],
    icon: frame6,
  },
];

// Multi-step form component
export default function QuestionariesModal() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Record<string, boolean>>({});

  // Handle question click (toggle selection)
  const handleQuestionClick = (key: string) => {
    setSelectedQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FaQuestion />{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="w-full">
          <Tabs
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
              <TabsContent
                key={index}
                value={index.toString()}
                className="w-full"
              >
                {/* Step title and description */}
                <div className="flex flex-col items-center justify-center space-y-1">
                  <Image
                    src={step.icon ?? "/images/default-icon.svg"}
                    alt="image"
                    height={30}
                    width={30}
                  />
                  <h2 className="text-[var(--700,#18181B)] font-inter text-[24px] font-bold leading-normal py-[12px]">
                    {step.title}
                  </h2>
                  {step.description && (
                    <p className="text-gray-600 text-center py-[12px] text-[var(--500,#71717A)] font-inter text-[12px] font-medium leading-normal">
                      {step.description}
                    </p>
                  )}
                </div>

               {/* Render clickable questions */}
                {step.questions?.map((q) => (
                  <label
                    key={q.key}
                    onClick={() => handleQuestionClick(q.key)}
                    className={cn(
                      "flex flex-col justify-center items-center cursor-pointer transition-colors",
                      "rounded-[6px] border", // Added border and border-radius
                      selectedQuestions[q.key]
                        ? "border-[var(--violet,#5B52F9)] bg-[var(--violet-2,#F0EFFE)]"
                        : "border-[var(--grey,#E4E4E7)] bg-white hover:bg-gray-100"
                    )}
                    style={{
                      display: "flex",
                      padding: "16px 8px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px", // Set gap between contents to 8px
                      alignSelf: "stretch",
                      marginBottom: "8px", // Added margin bottom for spacing between labels
                    }}
                  >
                    <span className="self-stretch text-black text-center font-inter text-sm font-normal leading-[150%]">
                      {q.question}
                    </span>
                  </label>
                ))}


                {/* Navigation buttons */}
                <div
                  className={cn(
                    "flex space-x-2 w-full justify-between",
                    currentStepIndex === 0 && "justify-end"
                  )}
                >
                  {/* Show 'Previous' button if not on the first step */}
                  <Button
                    className={cn("hidden", currentStepIndex > 0 && "block")}
                    type="button"
                    variant="white"
                    onClick={() => setCurrentStepIndex((prev) => prev - 1)}
                  >
                    Previous
                  </Button>

                  {/* Show 'Next' button if not the last step */}
                  {currentStepIndex < stepsConfig.length - 1 && (
                    <Button
                      type="button"
                      variant="purple"
                      onClick={() => setCurrentStepIndex((prev) => prev + 1)}
                    >
                      Next
                    </Button>
                  )}

                  {/* Show 'Complete' button if it's the last step */}
                  {currentStepIndex === stepsConfig.length - 1 && (
                    <Button
                      type="button"
                      variant="default"
                      onClick={() => alert("Completed!")}
                    >
                      Complete
                    </Button>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
