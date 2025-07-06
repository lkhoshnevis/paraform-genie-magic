
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ProgressBar';
import { SelectionButton } from '@/components/SelectionButton';
import { ROLE_OPTIONS } from '@/types/assessment';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface RoleSelectionProps {
  selectedRoles: string[];
  onRoleToggle: (role: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const RoleSelection = ({ selectedRoles, onRoleToggle, onNext, onBack }: RoleSelectionProps) => {
  const seniorityLevels = ['Senior', 'C-Suite', 'Founding', 'VP'];
  const jobTypes = ['Engineering', 'Sales', 'Growth', 'Design'];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="mb-8">
          <ProgressBar currentStep={1} totalSteps={3} className="mb-4" />
          <p className="text-sm text-gray-500">Step 1 of 3</p>
        </div>

        <Card className="p-8 shadow-lg border border-gray-200 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What roles are you hiring for?
          </h2>
          <p className="text-gray-600 mb-8">
            Select all that apply to get more targeted recommendations:
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Seniority Level</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {seniorityLevels.map((role) => (
                <SelectionButton
                  key={role}
                  selected={selectedRoles.includes(role)}
                  onClick={() => onRoleToggle(role)}
                  className="bg-gray-50 hover:bg-gray-100 border-gray-200"
                >
                  {role}
                </SelectionButton>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Job Function</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {jobTypes.map((role) => (
                <SelectionButton
                  key={role}
                  selected={selectedRoles.includes(role)}
                  onClick={() => onRoleToggle(role)}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  {role}
                </SelectionButton>
              ))}
            </div>
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
              disabled={selectedRoles.length === 0}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
