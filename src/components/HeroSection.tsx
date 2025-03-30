import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden hero-pattern pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="animate-fade-in">
              <h1>
                <span className="block text-sm font-semibold text-teal-600 tracking-wide mb-1">
                  INTRODUCING AGENTGUARD
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Intelligent Monitoring for</span>
                  <span className="gradient-text">AI Agent Systems</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                AgentGuard provides comprehensive monitoring and optimization for LLM-powered agent systems, 
                ensuring safety, quality, and continuous improvement.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:opacity-90 md:py-4 md:text-lg md:px-10"
                    >
                      Request Demo
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#product"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="h-64 sm:h-80 bg-gradient-to-r from-blue-800 to-teal-600 rounded-lg flex items-center justify-center">
                  <div className="relative w-5/6 h-5/6 bg-white/10 backdrop-blur-sm rounded-lg shadow-inner border border-white/20 p-4 flex flex-col animate-pulse-slow">
                    {/* Simulated dashboard elements */}
                    <div className="flex justify-between mb-4">
                      <div className="w-1/3 h-4 bg-white/30 rounded"></div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-4 bg-teal-400/30 rounded"></div>
                        <div className="w-8 h-4 bg-blue-400/30 rounded"></div>
                      </div>
                    </div>
                    <div className="flex space-x-2 mb-5">
                      <div className="w-20 h-6 bg-white/20 rounded"></div>
                      <div className="w-20 h-6 bg-white/20 rounded"></div>
                      <div className="w-20 h-6 bg-white/20 rounded"></div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-3">
                      <div className="bg-white/10 rounded p-2">
                        <div className="w-3/4 h-3 bg-white/30 rounded mb-2"></div>
                        <div className="w-full h-10 bg-teal-400/20 rounded"></div>
                      </div>
                      <div className="bg-white/10 rounded p-2">
                        <div className="w-3/4 h-3 bg-white/30 rounded mb-2"></div>
                        <div className="w-full h-10 bg-blue-400/20 rounded"></div>
                      </div>
                      <div className="bg-white/10 rounded p-2 col-span-2">
                        <div className="w-1/2 h-3 bg-white/30 rounded mb-2"></div>
                        <div className="w-full h-16 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
