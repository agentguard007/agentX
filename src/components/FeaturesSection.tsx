import React from 'react';
import { ShieldCheck, Cpu, Sparkles } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Benefits for Your Agent Systems
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            NeurAlign helps you build safer, more efficient, and continuously improving agent systems
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                          <ShieldCheck className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Enhanced Safety
                        </h3>
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      <p className="mb-3">
                        Prevent unwanted agent behavior through early detection of misalignment and reasoning errors.
                      </p>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>Continuous monitoring for safety violations</li>
                        <li>Specialized detection for hallucinations</li>
                        <li>Prompt injection identification</li>
                        <li>Real-time alerts for critical issues</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                          <Cpu className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Resource Optimization
                        </h3>
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      <p className="mb-3">
                        Maximize efficiency and reduce costs while maintaining high performance levels.
                      </p>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>Smart token optimization strategies</li>
                        <li>Model selection recommendations</li>
                        <li>Automatic prompt refinement</li>
                        <li>Performance vs. cost analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-600 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative p-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-600 to-blue-500 text-white">
                          <Sparkles className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Evolution Management
                        </h3>
                      </div>
                    </div>
                    <div className="text-base text-gray-500">
                      <p className="mb-3">
                        Guide the continuous improvement of your agent systems with data-driven insights.
                      </p>
                      <ul className="space-y-1 list-disc pl-5">
                        <li>A/B testing for agent variations</li>
                        <li>Long-term performance trending</li>
                        <li>Automated improvement suggestions</li>
                        <li>Behavior regression detection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Integrate with Any Agent Platform
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                NeurAlign works with all major LLM providers and agent frameworks, offering flexible 
                deployment options to fit your existing infrastructure.
              </p>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-teal-500">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Simple API Integration</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Add monitoring to your agent systems with just a few lines of code. Our API seamlessly 
                    integrates with your existing workflows.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-teal-500">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Real-time Processing</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Get immediate insights with our real-time monitoring system. Critical safety issues are 
                    flagged instantly to prevent potential harm.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0">
              <div className="relative space-y-4">
                <div className="h-64 flex items-end justify-center lg:h-96 overflow-hidden rounded-lg">
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 p-6 flex flex-col">
                    <div className="text-white/80 text-sm mb-4">Integration Example</div>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 font-mono text-sm text-teal-100 flex-1 overflow-hidden">
                      <div className="opacity-70">
                        <span className="text-blue-300">import</span> NeurAlign <span className="text-blue-300">from</span> 'NeurAlign';<br /><br />
                        
                        <span className="text-blue-300">const</span> monitor = NeurAlign.<span className="text-teal-300">init</span>&#40;&#123;<br />
                        &nbsp;&nbsp;apiKey: <span className="text-amber-300">'your_api_key'</span>,<br />
                        &nbsp;&nbsp;project: <span className="text-amber-300">'agent_system_name'</span><br />
                        &#125;&#41;;<br /><br />
                        
                        <span className="text-blue-300">async function</span> <span className="text-teal-300">runAgent</span>&#40;input&#41; &#123;<br />
                        &nbsp;&nbsp;<span className="text-green-300">// Start monitoring this agent run</span><br />
                        &nbsp;&nbsp;<span className="text-blue-300">const</span> session = monitor.<span className="text-teal-300">startSession</span>&#40;&#41;;<br /><br />
                        
                        &nbsp;&nbsp;<span className="text-green-300">// Your agent processing</span><br />
                        &nbsp;&nbsp;<span className="text-blue-300">const</span> result = <span className="text-blue-300">await</span> agent.<span className="text-teal-300">process</span>&#40;input&#41;;<br /><br />
                        
                        &nbsp;&nbsp;<span className="text-green-300">// Send data to NeurAlign</span><br />
                        &nbsp;&nbsp;<span className="text-blue-300">await</span> session.<span className="text-teal-300">track</span>&#40;&#123;<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;input,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;output: result,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;metadata: &#123; /* additional context */ &#125;<br />
                        &nbsp;&nbsp;&#125;&#41;;<br /><br />
                        
                        &nbsp;&nbsp;<span className="text-blue-300">return</span> result;<br />
                        &#125;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
