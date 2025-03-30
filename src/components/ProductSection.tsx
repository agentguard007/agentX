import React from 'react';
import { Shield, LineChart, CheckCircle, RefreshCw } from 'lucide-react';

const ProductSection = () => {
  return (
    <section id="product" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Product</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Comprehensive Monitoring Capabilities
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            AgentGuard provides end-to-end monitoring and optimization for your LLM-powered agent systems
          </p>
        </div>

        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-2">
            <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Misalignment Detection</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Detect potential misalignment or unsafe behavior in agent systems before it causes harm. 
                Our early warning system monitors outputs and reasoning patterns to identify issues.
              </dd>
            </div>

            <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <LineChart className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Reasoning Verification</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Validate the reasoning process of your AI agents through step-by-step verification. 
                Identify logical fallacies, assumption errors, and other reasoning failures.
              </dd>
            </div>

            <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Output Quality Assurance</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Ensure high-quality outputs from your agent systems through automated assessment
                of relevance, accuracy, completeness, and usefulness.
              </dd>
            </div>

            <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-teal-600 to-blue-500 text-white">
                  <RefreshCw className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Adaptive Optimization</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Continuously improve agent performance with our adaptive optimization engine
                that learns from monitoring data to suggest parameter adjustments and prompt refinements.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl shadow-inner overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Real-time Dashboard
                </h3>
              </div>
              <div className="mt-6 lg:mt-0 lg:col-span-2">
                <dl className="space-y-8 sm:space-y-6">
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Comprehensive Monitoring
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Get a bird's-eye view of all your agent systems with real-time metrics, alerts, and performance indicators.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Detailed Analytics
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Dive deep into performance data, identify trends, and understand the reasoning behind agent decisions.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Actionable Insights
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Receive clear recommendations for improving agent performance, safety, and efficiency.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
