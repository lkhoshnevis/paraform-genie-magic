
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ProgressBar';
import { ROLE_TESTIMONIALS, PAIN_SOLUTIONS, RoleTestimonial } from '@/types/assessment';
import { ExternalLink, ArrowRight, Users, Clock, DollarSign } from 'lucide-react';

interface ResultsProps {
  selectedRoles: string[];
  selectedPains: string[];
  onDemoClick: () => void;
}

export const Results = ({ selectedRoles, selectedPains, onDemoClick }: ResultsProps) => {
  // Get unique testimonials for selected roles (remove duplicates)
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

    return allTestimonials;
  };

  const testimonials = getUniqueTestimonials();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
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
          <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Hiring Roles</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedRoles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {role}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4 text-gray-800">Success Stories:</h4>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="font-semibold text-gray-900">
                    {testimonial.company} – {testimonial.role}
                  </div>
                  {testimonial.outcome && (
                    <div className="text-green-600 font-medium">
                      {testimonial.outcome}
                    </div>
                  )}
                  {testimonial.link && (
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-1"
                    >
                      Read case study <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Selected Pains & Solutions */}
          <Card className="p-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Pain Points</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedPains.map((pain) => (
                <span
                  key={pain}
                  className="px-3 py-1 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-full text-sm font-medium"
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
                  <div key={pain} className="border-l-4 border-purple-500 pl-4 py-2">
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
        <Card className="p-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Paraform Works</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm text-gray-700">
                Companies <strong>post their hard-to-fill job positions</strong> on the platform
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-sm text-gray-700">
                Paraform matches them with a <strong>network of vetted, expert recruiters</strong> who specialize in their industry and role
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm text-gray-700">
                Recruiters source and <strong>submit high-quality, pre-screened candidates</strong>
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-sm text-gray-700">
                Companies <strong>interview and manage the hiring process</strong> directly on the platform, often via Slack integration
              </p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Results</h4>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">~26 days</div>
                <div className="text-sm text-gray-600">Average hiring time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">35-40%</div>
                <div className="text-sm text-gray-600">Cheaper than traditional recruiting</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">70%</div>
                <div className="text-sm text-gray-600">Of submitted candidates get interviewed</div>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={onDemoClick}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Get a Demo
          </Button>
        </div>
      </div>
    </div>
  );
};
