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
    <section id="quality" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Quality & Certifications</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Committed to excellence through stringent quality control and internationally recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg border-2 border-amber-400/10 hover:border-amber-400/30 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                <cert.icon className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Quality Commitment</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              At Vitara Flour Mill, quality is not just a goal but a fundamental principle that guides
              every aspect of our manufacturing process. Our ISO 9001:2015 certification validates our
              commitment to maintaining the highest standards.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              We implement comprehensive quality control measures including incoming material inspection,
              in-process quality checks, and final product testing to ensure that every machine meets
              our exacting standards before reaching our customers.
            </p>
            <div className="bg-amber-500/10 border border-amber-400/30 p-6 rounded-lg">
              <p className="text-amber-400 font-semibold mb-2">ISO 9001:2015 Certified Company</p>
              <p className="text-slate-400 text-sm">Registered Trade Mark No. 4937307</p>
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

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-amber-400/10 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Quality Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualityPoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-700/50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
