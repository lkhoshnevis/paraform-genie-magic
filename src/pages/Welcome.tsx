import { Button } from '@/components/ui/button';
import { CompanyLogos } from '@/components/CompanyLogos';
import { Sparkles, Clock, Users } from 'lucide-react';
interface WelcomeProps {
  onStart: () => void;
}
export const Welcome = ({
  onStart
}: WelcomeProps) => {
  return <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Paraform Genie 🧞‍♂️</h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-sm font-medium text-orange-800 mb-6">
            <Sparkles className="w-4 h-4" />
            Demos take too long
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Answer 2 questions about how your startup hires</h2>
        <p className="text-xl text-gray-600 mb-8">
          We'll provide you with your <span className="font-semibold text-black">Solution</span>
        </p>

        <div className="flex justify-center items-center gap-6 mb-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Takes 30 seconds
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            No signup required
          </div>
        </div>

        <Button onClick={onStart} size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200">
          Start Your AI Consultation
        </Button>

        <CompanyLogos />
      </div>
    </div>;
};