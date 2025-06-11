import React, { useState } from 'react';
import { ArrowRight, Users, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';
import JoinCommunityModal from './JoinCommunityModal';

const Hero = () => {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <>
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Zambia's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  Tech Future
                </span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Connect with brilliant minds, share innovative projects, discover career opportunities, 
                and build the technology ecosystem that will transform Zambia.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsJoinModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center space-x-2 group"
                >
                  <span>Join the Community</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold"
                >
                  Explore Projects
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Tech Professionals</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-green-600">150+</div>
                  <div className="text-gray-600">Active Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-orange-600">80+</div>
                  <div className="text-gray-600">Job Opportunities</div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Network & Connect</h3>
                <p className="text-gray-600 text-sm">Build meaningful relationships with fellow engineers and tech enthusiasts.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 mt-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Share Ideas</h3>
                <p className="text-gray-600 text-sm">Showcase your projects and collaborate on innovative solutions.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Find Opportunities</h3>
                <p className="text-gray-600 text-sm">Discover exciting career paths and job openings in tech.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 mt-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Grow Together</h3>
                <p className="text-gray-600 text-sm">Learn from experts and mentor the next generation of tech leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community Modal */}
      <JoinCommunityModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />
    </>
  );
};

export default Hero;