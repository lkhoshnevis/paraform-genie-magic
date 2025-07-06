
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ProgressBar';
import { SelectionButton } from '@/components/SelectionButton';
import { PAIN_OPTIONS, PAIN_DESCRIPTIONS } from '@/types/assessment';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface PainSelectionProps {
  selectedPains: string[];
  onPainToggle: (pain: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const PainSelection = ({ selectedPains, onPainToggle, onNext, onBack }: PainSelectionProps) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="mb-8">
          <ProgressBar currentStep={2} totalSteps={3} className="mb-4" />
          <p className="text-sm text-gray-500">Step 2 of 3</p>
        </div>

        <Card className="p-8 shadow-lg border border-gray-200 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Select your top challenges
          </h2>
          <p className="text-gray-600 mb-8">
            Choose all that apply so we can provide relevant solutions:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {PAIN_OPTIONS.map((pain) => (
              <div key={pain} className="space-y-2">
                <SelectionButton
                  selected={selectedPains.includes(pain)}
                  onClick={() => onPainToggle(pain)}
                  className="w-full text-left bg-gray-50 hover:bg-gray-100 border-gray-200 p-4"
                >
                  <div className="font-medium text-gray-900">{pain}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {PAIN_DESCRIPTIONS[pain]}
                  </div>
                </SelectionButton>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <Button
              onClick={onBack}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>
            <Button
              onClick={onNext}
              disabled={selectedPains.length === 0}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get My Results <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
