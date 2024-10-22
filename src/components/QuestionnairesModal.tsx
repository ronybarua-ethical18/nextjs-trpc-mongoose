// QuestionariesModal.tsx
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaQuestion } from 'react-icons/fa';
import { questionnaires } from '@/lib/questionnaires';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type questionariesModalProps = {
  isOpen: boolean | undefined;
};
export default function QuestionnairesModal({
  isOpen,
}: questionariesModalProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const step = questionnaires[currentStepIndex];
  const [selectedQuestions, setSelectedQuestions] = useState<
    Record<string, boolean>
  >({});
  console.log({ selectedQuestions });

  // Handle question click
  const handleQuestionClick = (question: string) => {
    setSelectedQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  // Navigation handlers
  const goToNextStep = () => setCurrentStepIndex((prev) => prev + 1);
  const goToPreviousStep = () => setCurrentStepIndex((prev) => prev - 1);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild className="sr-only">
        <Button variant="outline">
          <FaQuestion />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[560px] flex flex-col justify-between items-center h-[539px] w-full p-6">
        {/* Render Current Step */}

        <div className="text-center space-y-6">
          {/* Icon */}
          <Image
            src={step.icon ?? '/images/default-icon.svg'}
            alt="image"
            height={24}
            width={24}
            className="mx-auto"
          />

          <div className="space-y-3">
            {/* Title */}
            <h2 className="text-[var(--700,#18181B)] font-inter text-[20px] md:text-[24px] font-bold leading-normal">
              {step.category}
            </h2>

            {/* Description */}
            {step.description && (
              <p className="text-gray-600 text-center   text-[var(--500,#71717A)] font-inter text-[12px] font-medium leading-normal">
                {step.description}
              </p>
            )}
          </div>
        </div>
        {/* Questions */}
        <div className="space-y-2 w-full flex flex-col max-h-[297px] overflow-y-auto [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-[#5B52F9] [&::-webkit-scrollbar-thumb]:rounded-full">
          {step.questions?.map((q, i) => (
            <label
              key={i}
              onClick={() => handleQuestionClick(q.question)}
              className={cn(
                'cursor-pointer text-center transition-colors p-4 rounded-[6px] border',
                selectedQuestions[q.key]
                  ? 'border-[var(--violet,#5B52F9)] bg-[var(--violet-2,#F0EFFE)]'
                  : 'border-[var(--grey,#E4E4E7)] bg-white hover:bg-gray-100'
              )}
            >
              <span
                className={cn(
                  'self-stretch text-center font-inter text-sm font-normal leading-[150%]',
                  selectedQuestions[q.key]
                    ? 'text-[var(--violet,#5B52F9)]'
                    : 'text-black'
                )}
              >
                {q.question}
              </span>
            </label>
          ))}
        </div>
        <div className="flex space-x-2 w-full justify-between">
          {/* Show Previous Button if not on the first step */}
          {currentStepIndex > 0 ? (
            <Button type="button" variant="white" onClick={goToPreviousStep}>
              Previous
            </Button>
          ) : (
            <span />
          )}

          {/* Show Next or Complete Button */}
          {currentStepIndex < questionnaires.length - 1 ? (
            <Button type="button" variant="purple" onClick={goToNextStep}>
              Next
            </Button>
          ) : (
            <Button
              type="button"
              variant="purple"
              onClick={() => alert('Completed!')}
            >
              Complete
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
