
import { useState, useEffect } from 'react';
import { Welcome } from './Welcome';
import { RoleSelection } from './RoleSelection';
import { PainSelection } from './PainSelection';
import { Results } from './Results';
import { useAssessment } from '@/hooks/useAssessment';
import { toast } from '@/hooks/use-toast';

type Step = 'welcome' | 'roles' | 'pains' | 'results';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const {
    selectedRoles,
    setSelectedRoles,
    selectedPains,
    setSelectedPains,
    saveSession,
    trackDemoClick,
    isLoading
  } = useAssessment();

  const handleRoleToggle = (role: string) => {
    setSelectedRoles(prev => 
      prev.includes(role) 
        ? prev.filter(r => r !== role)
        : [...prev, role]
    );
  };

  const handlePainToggle = (pain: string) => {
    setSelectedPains(prev => 
      prev.includes(pain) 
        ? prev.filter(p => p !== pain)
        : [...prev, pain]
    );
  };

  const handleShowResults = async () => {
    if (selectedRoles.length === 0 || selectedPains.length === 0) {
      toast({
        title: "Please make selections",
        description: "You need to select at least one role and one pain point.",
        variant: "destructive"
      });
      return;
    }

    await saveSession();
    setCurrentStep('results');
  };

  const handleDemoClick = async () => {
    await trackDemoClick();
    // Redirect to Paraform demo page
    window.open('https://www.paraform.com/get-a-demo', '_blank');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <Welcome onStart={() => setCurrentStep('roles')} />;
      case 'roles':
        return (
          <RoleSelection
            selectedRoles={selectedRoles}
            onRoleToggle={handleRoleToggle}
            onNext={() => setCurrentStep('pains')}
          />
        );
      case 'pains':
        return (
          <PainSelection
            selectedPains={selectedPains}
            onPainToggle={handlePainToggle}
            onNext={handleShowResults}
          />
        );
      case 'results':
        return (
          <Results
            selectedRoles={selectedRoles}
            selectedPains={selectedPains}
            onDemoClick={handleDemoClick}
          />
        );
      default:
        return <Welcome onStart={() => setCurrentStep('roles')} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentStep()}
    </div>
  );
};

export default Index;
