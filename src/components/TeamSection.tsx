import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

// Use this for base path handling in development vs production
const BASE_PATH = import.meta.env.DEV ? '' : '/agentX';

const TeamSection = () => {
  const team = [
    {
      name: 'Aadesh Ingle',
      role: 'Co-Founder & CEO',
      image: `${BASE_PATH}/images/aadesh-ingle.jpg`,
      bio: 'Experienced software engineer with a focus on AI and machine learning applications. Former engineer at Microsoft with a background in building scalable systems and applications.',
      linkedin: 'https://www.linkedin.com/in/aadesh-ingle/',
      email: 'adesh.ingle74@gmail.com'
    },
    {
      name: 'Abhay Kaushik',
      role: 'Co-Founder & CTO',
      image: `${BASE_PATH}/images/abhay-kaushik.jpg`,
      bio: 'Software engineer with experience in AI and machine learning systems development. Passionate about creating secure and reliable technological solutions.',
      linkedin: 'https://www.linkedin.com/in/abhay-kaushik/',
      email: 'abhay.gyanbharati@gmail.com'
    },
    {
      name: 'Pranshu Nema',
      role: 'Co-Founder & Head of Product',
      image: `${BASE_PATH}/images/pranshu-nema.jpg`,
      bio: 'Skilled product developer and engineer with a background in creating efficient solutions. Experienced in leading technical teams and delivering innovative products.',
      linkedin: 'https://www.linkedin.com/in/pranshu-nema/',
      email: 'pranshunema007@gmail.com'
    },
    {
      name: 'Meet Patel',
      role: 'Co-Founder & Head of Research',
      image: `${BASE_PATH}/images/meet-patel.jpg`,
      bio: 'Research-focused engineer with expertise in AI systems and data analysis. Committed to developing cutting-edge solutions for complex technical challenges.',
      linkedin: 'https://www.linkedin.com/in/meetdpatel18/',
      email: 'meetdpatel18@gmail.com'
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