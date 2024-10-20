// QuestionariesModal.tsx
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaQuestion } from "react-icons/fa";
import StepComponent from "./StepComponent";
import NavigationButtons from "./NavigationButtons";
import frame from "../../public/images/on-board/Frame.svg";
import frame1 from "../../public/images/on-board/Frame (1).svg";
import frame2 from "../../public/images/on-board/Frame (2).svg";
import frame3 from "../../public/images/on-board/Frame (3).svg";
import frame4 from "../../public/images/on-board/Frame (4).svg";
import frame5 from "../../public/images/on-board/Frame (5).svg";
import frame6 from "../../public/images/on-board/Frame (6).svg";
const stepsConfig = [ {
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
      key: "lived_in_norwa",
    },
    {
      question:
        "The return distance between home and work is more than 37 kilometres",
      key: "trade_union",
    },
    {
      question:
        "Have expenses for road toll or ferry when travelling between your home and workplace",
      key: "lived_in_nrway",
    },
    {
      question: "I stay away from home overnight because of work",
      key: "overnight",
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
      key: "ferry_tol",
    },
    {
      question: "I have rented out a residential property or a holiday home",
      key: "ferry_tll",
    },
    {
      question: "Sold a residential property or holiday home with a loss",
      key: "fery_toll",
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
    { question: "I have a sole proprietorship", key: "receive_bonus" },
    {
      question:
        "Sell goods or services, blog/influencer, practise e-sports (gaming), breed animals, or rent out property on a small scale.",
      key: "receved_bonus",
    },
    {
      question: "I have received salary from odd jobs and services",
      key: "reeived_bonus",
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
},];

export default function QuestionariesModal() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState<Record<string, boolean>>({});

  // Handle question click
  const handleQuestionClick = (key: string) => {
    setSelectedQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Navigation handlers
  const goToNextStep = () => setCurrentStepIndex((prev) => prev + 1);
  const goToPreviousStep = () => setCurrentStepIndex((prev) => prev - 1);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FaQuestion /> 
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[560px] w-full p-4">
        <div className="w-full">
          {/* Render Current Step */}
          <StepComponent
            step={stepsConfig[currentStepIndex]}
            selectedQuestions={selectedQuestions}
            handleQuestionClick={handleQuestionClick}
          />

          {/* Render Navigation */}
          <NavigationButtons
            currentStepIndex={currentStepIndex}
            totalSteps={stepsConfig.length}
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
