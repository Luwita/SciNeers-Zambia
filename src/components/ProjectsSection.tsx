import React from 'react';
import { ExternalLink, Star, Users, Calendar } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'EduTech Zambia',
      description: 'A comprehensive digital learning platform designed to improve access to quality education across rural and urban areas of Zambia.',
      author: 'Sarah Mwanza',
      role: 'Software Engineer',
      tags: ['React', 'Node.js', 'MongoDB', 'Education'],
      stars: 24,
      collaborators: 8,
      lastUpdated: '2 days ago',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'AgriConnect Mobile',
      description: 'Mobile application connecting smallholder farmers with markets, weather data, and agricultural best practices.',
      author: 'James Phiri',
      role: 'Mobile Developer',
      tags: ['React Native', 'Firebase', 'Agriculture', 'IoT'],
      stars: 31,
      collaborators: 5,
      lastUpdated: '5 days ago',
      image: 'https://images.pexels.com/photos/2889690/pexels-photo-2889690.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      description: 'Digital solution for managing patient records, appointments, and medical inventory in rural health centers.',
      author: 'Grace Banda',
      role: 'Full Stack Developer',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Healthcare'],
      stars: 19,
      collaborators: 12,
      lastUpdated: '1 week ago',
      image: 'https://images.pexels.com/photos/3279209/pexels-photo-3279209.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Fintech Wallet Solution',
      description: 'Secure mobile wallet application for digital payments and financial inclusion in underbanked communities.',
      author: 'Michael Chanda',
      role: 'Blockchain Developer',
      tags: ['Flutter', 'Blockchain', 'FinTech', 'Security'],
      stars: 42,
      collaborators: 7,
      lastUpdated: '3 days ago',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Innovative Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover groundbreaking projects from Zambia's brightest tech minds. 
            Collaborate, contribute, and help build solutions that matter.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{project.stars}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Author Info */}
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {project.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">{project.author}</div>
                    <div className="text-xs text-gray-500">{project.role}</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.collaborators} collaborators</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;