import React from 'react';
import { MapPin, Clock, DollarSign, Building, ArrowRight } from 'lucide-react';

const JobsSection = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechZed Solutions',
      location: 'Lusaka, Zambia',
      type: 'Full-time',
      salary: 'ZMW 8,000 - 12,000',
      posted: '2 days ago',
      description: 'Join our growing team to build innovative fintech solutions for the Zambian market.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      urgent: true
    },
    {
      id: 2,
      title: 'Mobile App Developer',
      company: 'Digital Innovations Ltd',
      location: 'Ndola, Zambia',
      type: 'Contract',
      salary: 'ZMW 6,000 - 9,000',
      posted: '5 days ago',
      description: 'Develop mobile applications for agriculture and healthcare sectors.',
      tags: ['Flutter', 'Firebase', 'API Integration'],
      urgent: false
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'CloudTech Zambia',
      location: 'Remote',
      type: 'Full-time',
      salary: 'ZMW 10,000 - 15,000',
      posted: '1 week ago',
      description: 'Lead cloud infrastructure and deployment automation for enterprise clients.',
      tags: ['Docker', 'Kubernetes', 'Azure', 'Terraform'],
      urgent: false
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Zambia Analytics Hub',
      location: 'Kitwe, Zambia',
      type: 'Full-time',
      salary: 'ZMW 7,500 - 11,000',
      posted: '3 days ago',
      description: 'Analyze large datasets to drive insights for mining and agriculture industries.',
      tags: ['Python', 'Machine Learning', 'SQL', 'Tableau'],
      urgent: true
    }
  ];

  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Career Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exciting career opportunities with leading tech companies in Zambia. 
            Your next big career move starts here.
          </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-6 mb-12">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {job.title}
                        </h3>
                        {job.urgent && (
                          <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-gray-600 mb-2">
                        <div className="flex items-center space-x-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-medium text-green-600">{job.salary}</span>
                      </div>
                      <span>Posted {job.posted}</span>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2 group">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Job Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { name: 'Software Development', count: 45 },
            { name: 'Data Science', count: 23 },
            { name: 'DevOps & Cloud', count: 18 },
            { name: 'Mobile Development', count: 31 }
          ].map((category) => (
            <div key={category.name} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
              <div className="text-2xl font-bold text-blue-600 mb-1">{category.count}</div>
              <div className="text-sm text-gray-600">{category.name}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;