
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ProgressBar';
import { ROLE_TESTIMONIALS, PAIN_SOLUTIONS, RoleTestimonial } from '@/types/assessment';
import { ExternalLink, ArrowLeft, Users, ArrowRight, Search, MessageSquare } from 'lucide-react';

interface ResultsProps {
  selectedRoles: string[];
  selectedPains: string[];
  onDemoClick: () => void;
  onBack: () => void;
}

export const Results = ({ selectedRoles, selectedPains, onDemoClick, onBack }: ResultsProps) => {
  // Get unique testimonials for selected roles and sort by information completeness
  const getUniqueTestimonials = (): RoleTestimonial[] => {
    const allTestimonials: RoleTestimonial[] = [];
    const seen = new Set<string>();

    selectedRoles.forEach(role => {
      const testimonials = ROLE_TESTIMONIALS[role] || [];
      testimonials.forEach(testimonial => {
        const key = `${testimonial.company}-${testimonial.role}`;
        if (!seen.has(key)) {
          seen.add(key);
          allTestimonials.push(testimonial);
        }
      });
    });

    // Sort by completeness: outcome + link > outcome only > link only > basic
    return allTestimonials.sort((a, b) => {
      const scoreA = (a.outcome && a.link ? 3 : (a.outcome ? 2 : (a.link ? 1 : 0)));
      const scoreB = (b.outcome && b.link ? 3 : (b.outcome ? 2 : (b.link ? 1 : 0)));
      return scoreB - scoreA;
    });
  };

  const testimonials = getUniqueTestimonials();

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <ProgressBar currentStep={3} totalSteps={3} className="mb-4" />
          <p className="text-sm text-gray-500">Step 3 of 3</p>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Here's How Paraform Solves Your Challenges
          </h1>
          <p className="text-xl text-gray-600">
            Based on your selections, here are relevant success stories and solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Selected Roles & Testimonials */}
          <Card className="p-6 shadow-lg border border-gray-200 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Hiring Roles</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedRoles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200"
                >
                  {role}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4 text-gray-800">Success Stories:</h4>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-l-4 border-black pl-4 py-2 bg-gray-50 rounded-r-lg">
                  <div className="font-semibold text-gray-900">
                    {testimonial.company} – {testimonial.role}
                  </div>
                  {testimonial.outcome && (
                    <div className="text-green-600 font-medium text-sm">
                      {testimonial.outcome}
                    </div>
                  )}
                  {testimonial.link && (
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-black hover:text-gray-700 text-sm mt-1 underline"
                    >
                      Read case study <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Selected Pains & Solutions */}
          <Card className="p-6 shadow-lg border border-gray-200 bg-white">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Pain Points</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedPains.map((pain) => (
                <span
                  key={pain}
                  className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium border border-orange-200"
                >
                  {pain}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4 text-gray-800">How Paraform Helps:</h4>
            <div className="space-y-6">
              {selectedPains.map((pain) => {
                const solution = PAIN_SOLUTIONS[pain];
                if (!solution) return null;

                return (
                  <div key={pain} className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded-r-lg">
                    <h5 className="font-semibold text-lg mb-2">{solution.title}</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* How Paraform Works */}
        <Card className="p-8 shadow-lg border border-gray-200 bg-white mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Paraform Works</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
              </div>
              <p className="text-sm text-gray-700">
                Companies <strong>post their hard-to-fill job positions</strong> on the platform
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
              </div>
              <p className="text-sm text-gray-700">
                Paraform matches them with a <strong>network of vetted, expert recruiters</strong> who specialize in their industry and role
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
              </div>
              <p className="text-sm text-gray-700">
                Recruiters source and <strong>submit high-quality, pre-screened candidates</strong>
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
              </div>
              <p className="text-sm text-gray-700">
                Companies <strong>interview and manage the hiring process</strong> directly on the platform, often via Slack integration
              </p>
            </div>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-black">~26 days</div>
                <div className="text-sm text-gray-600">Average hiring time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">35-40%</div>
                <div className="text-sm text-gray-600">Cheaper than traditional recruiting</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-black">70%</div>
                <div className="text-sm text-gray-600">Of submitted candidates get interviewed</div>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="flex justify-between items-center">
          <Button
            onClick={onBack}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <Button
            onClick={onDemoClick}
            size="lg"
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200"
          >
            Get a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};
