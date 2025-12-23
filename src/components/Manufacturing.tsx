import { Cog, Settings, TestTube, PackageCheck } from 'lucide-react';

export default function Manufacturing() {
  const processes = [
    {
      icon: Settings,
      title: 'Design & Engineering',
      description: 'Expert engineering team designs machinery with precision, focusing on efficiency and durability for various grinding applications.'
    },
    {
      icon: Cog,
      title: 'Component Manufacturing',
      description: 'High-grade stainless steel body construction with copper winding motors, ensuring longevity and optimal performance.'
    },
    {
      icon: TestTube,
      title: 'Quality Testing',
      description: 'Rigorous testing protocols including grinding capacity tests, motor performance checks, and safety standard verification.'
    },
    {
      icon: PackageCheck,
      title: 'Assembly & Finishing',
      description: 'Meticulous assembly process with standard quality emery stones, followed by comprehensive final inspection before dispatch.'
    }
  ];

  const features = [
    'Standard Quality 6-7 Inch Emery Stones',
    'Copper Winding Motors for Efficiency',
    'Stainless Steel Body Construction',
    'Compact Design for Easy Installation',
    'Energy Efficient Operation',
    'Low Maintenance Requirements',
    'Nutrient Lock Technology',
    'Easy Cleaning Mechanisms'
  ];

  return (
    <section id="manufacturing" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Manufacturing Process</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            State-of-the-art manufacturing facility employing modern technology and traditional craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Manufacturing process"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-white mb-6">Our Manufacturing Excellence</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              At Vitara Flour Mill, we employ advanced manufacturing techniques combined with skilled
              craftsmanship to produce flour milling machinery that meets international quality standards.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our manufacturing process ensures that every machine delivers consistent performance,
              maintains nutritional value of grains, and operates efficiently with minimal maintenance
              requirements.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((process, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-lg border border-amber-400/10 hover:border-amber-400/30 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                <process.icon className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{process.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{process.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-8 border border-amber-400/10 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Advanced Technology</h3>
              <p className="mb-6 text-slate-300 leading-relaxed">
                Our manufacturing facility is equipped with modern machinery and tools that enable
                precision manufacturing. We continuously invest in technology upgrades to maintain
                our competitive edge and deliver superior products.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  <span>CNC Machining for Precision Components</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  <span>Automated Quality Control Systems</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  <span>Advanced Motor Testing Equipment</span>
                </li>
                <li className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  <span>Skilled Workforce Training Programs</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Advanced technology"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
