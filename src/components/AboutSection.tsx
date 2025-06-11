import React from 'react';
import { Target, Users, Lightbulb, Award, ArrowRight, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We believe in pushing boundaries and creating solutions that transform lives and industries across Zambia.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Our strength lies in collaboration, knowledge sharing, and lifting each other up in the tech ecosystem.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We foster an environment where learning never stops and everyone can grow their technical expertise.'
    },
    {
      icon: Award,
      title: 'Excellence & Impact',
      description: 'We strive for excellence in everything we do, focusing on creating meaningful impact for Zambia.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Active Members', description: 'Tech professionals across Zambia' },
    { number: '150+', label: 'Projects Launched', description: 'Innovative solutions built by our community' },
    { number: '80+', label: 'Job Placements', description: 'Career opportunities facilitated' },
    { number: '48', label: 'Events Hosted', description: 'Workshops, meetups, and conferences' }
  ];

  const team = [
    {
      name: 'Sarah Mwanza',
      role: 'Community Lead',
      expertise: 'Full Stack Development',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Passionate about building inclusive tech communities and mentoring the next generation of developers.'
    },
    {
      name: 'James Phiri',
      role: 'Technical Director',
      expertise: 'Cloud Architecture',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Expert in scalable systems with 8+ years experience in enterprise software development.'
    },
    {
      name: 'Grace Banda',
      role: 'Programs Manager',
      expertise: 'Data Science',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Leading initiatives to bridge the gap between academia and industry in Zambian tech sector.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About SciNeers Zambia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building Zambia's premier community for computer scientists, engineers, 
            and tech innovators who are passionate about transforming our nation through technology.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              To empower Zambia's technology ecosystem by connecting brilliant minds, fostering innovation, 
              and creating opportunities that drive economic growth and social impact. We believe that by 
              bringing together our nation's best technical talent, we can solve local challenges and 
              compete on the global stage.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-600">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="h-64">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <div className="text-blue-600 font-medium mb-1">{member.role}</div>
                  <div className="text-sm text-gray-500 mb-3">{member.expertise}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What We Offer</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Project collaboration opportunities with leading tech companies',
              'Exclusive job board with vetted opportunities in Zambia and beyond',
              'Monthly tech meetups and networking events',
              'Mentorship programs connecting junior and senior professionals',
              'Skills development workshops and technical training',
              'Access to funding opportunities for innovative projects',
              'Platform to showcase your work and build your professional brand',
              'Direct connection with industry leaders and decision makers'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;