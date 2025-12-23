import { Award, ShieldCheck, CheckCircle, FileCheck } from 'lucide-react';

export default function Quality() {
  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001:2015 Certified',
      description: 'International standard for quality management systems, ensuring consistent product quality and customer satisfaction.'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance',
      description: 'Comprehensive quality control at every stage from raw material inspection to final product testing.'
    },
    {
      icon: CheckCircle,
      title: 'Food Safety Standards',
      description: 'Adherence to food safety regulations ensuring our machinery meets hygiene and safety requirements.'
    },
    {
      icon: FileCheck,
      title: 'Registered Trademark',
      description: 'Registered trademark (No. 4937307) protecting our brand and ensuring authentic Vitara products.'
    }
  ];

  const qualityPoints = [
    'Premium Stainless Steel Construction',
    'Copper Winding Motors for Durability',
    'Standard Quality Emery Stones',
    'Rigorous Performance Testing',
    'One Year Motor Warranty',
    'Food Grade Materials',
    'Nutrient Preservation Technology',
    'Safety Certified Components',
    'Quality Control at Every Stage',
    'Compliance with Industry Standards'
  ];

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to excellence through stringent quality control and internationally recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-100 hover:border-red-900 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center mb-6 mx-auto">
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{cert.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Quality Commitment</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Vitara Flour Mill, quality is not just a goal but a fundamental principle that guides
              every aspect of our manufacturing process. Our ISO 9001:2015 certification validates our
              commitment to maintaining the highest standards.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We implement comprehensive quality control measures including incoming material inspection,
              in-process quality checks, and final product testing to ensure that every machine meets
              our exacting standards before reaching our customers.
            </p>
            <div className="bg-red-50 border-l-4 border-red-900 p-6 rounded">
              <p className="text-red-900 font-semibold mb-2">ISO 9001:2015 Certified Company</p>
              <p className="text-gray-700 text-sm">Registered Trade Mark No. 4937307</p>
            </div>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Quality control"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Quality Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
