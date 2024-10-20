// StepComponent.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

type Question = {
  question: string;
  key: string;
};

type Step = {
  title: string;
  description?: string;
  questions?: Question[];
  icon?: string;
};

type StepComponentProps = {
  step: Step;
  selectedQuestions: Record<string, boolean>;
  handleQuestionClick: (key: string) => void;
};

export default function StepComponent({ step, selectedQuestions, handleQuestionClick }: StepComponentProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {/* Icon */}
      <Image src={step.icon ?? "/images/default-icon.svg"} alt="image" height={30} width={30} />

      {/* Title */}
      <h2 className="text-[var(--700,#18181B)] font-inter text-[20px] md:text-[24px] font-bold leading-normal py-[12px]">
        {step.title}
      </h2>

      {/* Description */}
      {step.description && (
        <p className="text-gray-600 text-center py-[12px] text-[var(--500,#71717A)] font-inter text-[12px] font-medium leading-normal">
          {step.description}
        </p>
      )}

      {/* Questions */}
      {step.questions?.map((q) => (
        <label
          key={q.key}
          onClick={() => handleQuestionClick(q.key)}
          className={cn(
            "flex flex-col justify-center items-center cursor-pointer transition-colors rounded-[6px] border",
            selectedQuestions[q.key]
              ? "border-[var(--violet,#5B52F9)] bg-[var(--violet-2,#F0EFFE)]"
              : "border-[var(--grey,#E4E4E7)] bg-white hover:bg-gray-100"
          )}
          style={{
            padding: "12px",
            marginBottom: "8px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            alignSelf: "stretch",
          }}
        >
          <span
            className={cn(
              "self-stretch text-center font-inter text-sm font-normal leading-[150%]",
              selectedQuestions[q.key] ? "text-[var(--violet,#5B52F9)]" : "text-black"
            )}
          >
            {q.question}
          </span>
        </label>
      ))}
    </div>
  );
}
