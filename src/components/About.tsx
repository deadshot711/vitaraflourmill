import { Factory, Target, Eye, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Vitara Flour Mill</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A division of Madhuvan Industries, dedicated to manufacturing superior flour milling machinery
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/7937462/pexels-photo-7937462.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Manufacturing facility"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Vitara Flour Mill, operating under Madhuvan Industries, has established itself as a trusted
              manufacturer of high-quality flour milling machinery. Our commitment to excellence has made
              us a preferred choice for businesses across various sectors.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We specialize in manufacturing Aata Chakki machines that serve diverse industries including
              hotels, restaurants, catering services, masala industries, chemical industries, pharmaceuticals,
              ayurvedic manufacturing, and small-scale Gruh Udyog enterprises.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our ISO 9001:2015 certification reflects our dedication to maintaining international quality
              standards in every machine we manufacture.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Factory className="w-12 h-12 text-red-900 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing Excellence</h3>
            <p className="text-gray-600">
              State-of-the-art manufacturing facility with advanced machinery and quality control systems
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Target className="w-12 h-12 text-red-900 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide reliable, efficient flour milling solutions that meet the highest standards of quality
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Eye className="w-12 h-12 text-red-900 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading manufacturer of flour milling machinery in India through innovation
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-red-900 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              Dedicated support team ensuring customer satisfaction and long-term relationships
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
