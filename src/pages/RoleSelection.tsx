
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ProgressBar';
import { SelectionButton } from '@/components/SelectionButton';
import { ROLE_OPTIONS } from '@/types/assessment';
import { ArrowRight } from 'lucide-react';

interface RoleSelectionProps {
  selectedRoles: string[];
  onRoleToggle: (role: string) => void;
  onNext: () => void;
}

export const RoleSelection = ({ selectedRoles, onRoleToggle, onNext }: RoleSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <div className="mb-8">
          <ProgressBar currentStep={1} totalSteps={3} className="mb-4" />
          <p className="text-sm text-gray-500">Step 1 of 3</p>
        </div>

        <Card className="p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What roles are you hiring for?
          </h2>
          <p className="text-gray-600 mb-8">
            Select all that apply to get more targeted recommendations:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {ROLE_OPTIONS.map((role) => (
              <SelectionButton
                key={role}
                selected={selectedRoles.includes(role)}
                onClick={() => onRoleToggle(role)}
              >
                {role}
              </SelectionButton>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              onClick={onNext}
              disabled={selectedRoles.length === 0}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
