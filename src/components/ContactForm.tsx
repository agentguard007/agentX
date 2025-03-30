import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Success!",
        description: "We've received your demo request and will be in touch shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Request a Demo
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Interested in seeing NeurAlign in action? Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <div className="mt-1">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-teal-500 focus:border-teal-500 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg shadow-lg overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                Ready to elevate your agent systems?
              </h3>
              <p className="mt-4 text-lg leading-6 text-blue-50">
                Start monitoring today and build safer, more efficient AI agents.
              </p>
              <a
                href="mailto:agentguard007@gmail.com"
                className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-900 bg-white hover:bg-blue-50"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
