import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Former AI safety researcher at OpenAI with expertise in alignment and monitoring systems. PhD in Computer Science from Stanford University.',
      linkedin: '#',
      email: 'alex@NeurAlign.ai'
    },
    {
      name: 'Priya Sharma',
      role: 'Co-Founder & CTO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'ML engineer with 10+ years of experience building AI systems at Google Brain. Specialized in designing monitoring and reliability frameworks.',
      linkedin: '#',
      email: 'priya@NeurAlign.ai'
    },
    {
      name: 'David Park',
      role: 'Co-Founder & Head of Product',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Former product leader at Microsoft responsible for enterprise AI solutions. MBA from Harvard Business School and BS in Computer Engineering.',
      linkedin: '#',
      email: 'david@NeurAlign.ai'
    },
    {
      name: 'Maya Johnson',
      role: 'Co-Founder & Head of Research',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Leading researcher in agent systems evaluation methodologies. Published numerous papers on LLM security and alignment at DeepMind.',
      linkedin: '#',
      email: 'maya@NeurAlign.ai'
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Our Team</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Meet the Founders
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We're a team of AI safety researchers, engineers, and product leaders passionate about ensuring 
            agent systems are safe, effective, and reliable.
          </p>
        </div>

        <div className="mt-12 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12 lg:space-y-0">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="space-y-4">
                <div className="aspect-w-3 aspect-h-3">
                  <img 
                    className="object-cover shadow-lg rounded-lg group-hover:opacity-90 transition-opacity" 
                    src={member.image} 
                    alt={member.name} 
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-gray-900">{member.name}</h3>
                    <p className="text-teal-600">{member.role}</p>
                  </div>
                  <div className="text-base text-gray-500">
                    <p>{member.bio}</p>
                  </div>
                  <div className="flex space-x-4">
                    <a href={member.linkedin} className="text-gray-600 hover:text-teal-600 transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-teal-600 transition-colors">
                      <span className="sr-only">Email</span>
                      <Mail size={20} />
                    </a>
                    <span className="text-sm text-gray-500">{member.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
