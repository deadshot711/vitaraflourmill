import { Factory, Target, Eye, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Vitara Flour Mill</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
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
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Vitara Flour Mill, operating under Madhuvan Industries, has established itself as a trusted
              manufacturer of high-quality flour milling machinery. Our commitment to excellence has made
              us a preferred choice for businesses across various sectors.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              We specialize in manufacturing Aata Chakki machines that serve diverse industries including
              hotels, restaurants, catering services, masala industries, chemical industries, pharmaceuticals,
              ayurvedic manufacturing, and small-scale Gruh Udyog enterprises.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our ISO 9001:2015 certification reflects our dedication to maintaining international quality
              standards in every machine we manufacture.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800 p-6 rounded-lg border border-amber-400/10 hover:border-amber-400/30 transition-colors">
            <Factory className="w-10 h-10 text-amber-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Manufacturing Excellence</h3>
            <p className="text-slate-400 text-sm">
              State-of-the-art manufacturing facility with advanced machinery and quality control systems
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-amber-400/10 hover:border-amber-400/30 transition-colors">
            <Target className="w-10 h-10 text-amber-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Our Mission</h3>
            <p className="text-slate-400 text-sm">
              To provide reliable, efficient flour milling solutions that meet the highest standards of quality
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-amber-400/10 hover:border-amber-400/30 transition-colors">
            <Eye className="w-10 h-10 text-amber-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Our Vision</h3>
            <p className="text-slate-400 text-sm">
              To become the leading manufacturer of flour milling machinery in India through innovation
            </p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-amber-400/10 hover:border-amber-400/30 transition-colors">
            <Users className="w-10 h-10 text-amber-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Customer Focus</h3>
            <p className="text-slate-400 text-sm">
              Dedicated support team ensuring customer satisfaction and long-term relationships
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
