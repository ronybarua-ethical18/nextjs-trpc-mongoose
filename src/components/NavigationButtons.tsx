// NavigationButtons.tsx
import { Button } from "@/components/ui/button";

type NavigationButtonsProps = {
  currentStepIndex: number;
  totalSteps: number;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
};

export default function NavigationButtons({
  currentStepIndex,
  totalSteps,
  goToNextStep,
  goToPreviousStep,
}: NavigationButtonsProps) {
  return (
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
      {currentStepIndex < totalSteps - 1 ? (
        <Button type="button" variant="purple" onClick={goToNextStep}>
          Next
        </Button>
      ) : (
        <Button type="button" variant="purple" onClick={() => alert("Completed!")}>
          Complete
        </Button>
      )}
    </div>
  );
}
