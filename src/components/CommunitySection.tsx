import React from 'react';
import { MessageCircle, Calendar, Users, Award, ArrowRight, MapPin } from 'lucide-react';

const CommunitySection = () => {
  const events = [
    {
      id: 1,
      title: 'Zambia Tech Meetup',
      date: 'March 15, 2024',
      time: '18:00 - 21:00',
      location: 'Innovation Hub, Lusaka',
      attendees: 85,
      type: 'Networking',
      description: 'Monthly gathering of tech professionals, entrepreneurs, and enthusiasts.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      date: 'March 22, 2024',
      time: '09:00 - 17:00',
      location: 'University of Zambia',
      attendees: 120,
      type: 'Workshop',
      description: 'Hands-on workshop covering practical applications of AI in African context.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for mobile app development in Zambia',
      author: 'Peter Mulenga',
      replies: 24,
      lastActivity: '2 hours ago',
      category: 'Mobile Development'
    },
    {
      id: 2,
      title: 'Opportunities in fintech for young developers',
      author: 'Mary Chilufya',
      replies: 18,
      lastActivity: '5 hours ago',
      category: 'Career'
    },
    {
      id: 3,
      title: 'Building scalable applications with limited resources',
      author: 'David Tembo',
      replies: 31,
      lastActivity: '1 day ago',
      category: 'Architecture'
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with like-minded individuals, attend exclusive events, and be part of 
            conversations that shape Zambia's technology landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Events Section */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <Calendar className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
            </div>

            <div className="space-y-6 mb-8">
              {events.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="h-40">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-500 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium mt-4">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium">
              View All Events
            </button>
          </div>

          {/* Discussions Section */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <MessageCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">Community Discussions</h3>
            </div>

            <div className="space-y-4 mb-8">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-white rounded-lg p-5 hover:shadow-md transition-shadow duration-200 border border-gray-100">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                      {discussion.title}
                    </h4>
                    <ArrowRight className="w-4 h-4 text-gray-400 mt-1" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-4">
                      <span>by {discussion.author}</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {discussion.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.lastActivity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium mb-8">
              Join Discussion
            </button>

            {/* Community Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Community Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">1.2K</div>
                  <div className="text-sm text-gray-600">Discussions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">48</div>
                  <div className="text-sm text-gray-600">Events Hosted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;