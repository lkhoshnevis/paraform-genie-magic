
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ProgressBar';
import { SelectionButton } from '@/components/SelectionButton';
import { PAIN_OPTIONS } from '@/types/assessment';
import { ArrowRight } from 'lucide-react';

interface PainSelectionProps {
  selectedPains: string[];
  onPainToggle: (pain: string) => void;
  onNext: () => void;
}

export const PainSelection = ({ selectedPains, onPainToggle, onNext }: PainSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="mb-8">
          <ProgressBar currentStep={2} totalSteps={3} className="mb-4" />
          <p className="text-sm text-gray-500">Step 2 of 3</p>
        </div>

        <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Select your top challenges
          </h2>
          <p className="text-gray-600 mb-8">
            Choose all that apply so we can provide relevant solutions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {PAIN_OPTIONS.map((pain) => (
              <SelectionButton
                key={pain}
                selected={selectedPains.includes(pain)}
                onClick={() => onPainToggle(pain)}
                className="text-sm"
              >
                {pain}
              </SelectionButton>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              onClick={onNext}
              disabled={selectedPains.length === 0}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get My Results <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
