import { Check } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: 'Deluxe Model',
      motor: '1/1.25 HP Motor',
      image: 'https://images.pexels.com/photos/7937471/pexels-photo-7937471.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        '1 Hp, 1.25 Hp Motor',
        'Copper Winding Motor',
        'Only 1 Unit Per Hour',
        'Standard Quality 6 Inch Emery Stone',
        'Stainless Steel Body',
        'Per Hour 8-13 Kg Grinding Capacity',
        '1 Year Motor Warranty',
        'Lock All Nutrients Of Grain',
        'Compact Size',
        'Ease Of Cleaning'
      ]
    },
    {
      name: 'Super Gold Model',
      motor: '1/1.25 HP Motor',
      image: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        '1 Hp, 1.25 Hp Motor',
        'Copper Winding Motor',
        'Only 1 Unit Per Hour',
        'Standard Quality 6 Inch Emery Stone',
        'Stainless Steel Body',
        'Per Hour 8-13 Kg Grinding Capacity',
        '1 Year Motor Warranty',
        'Lock All Nutrients Of Grain',
        'Compact Size',
        'Ease Of Cleaning'
      ]
    },
    {
      name: 'Deluxe Model',
      motor: '1.5 HP Motor',
      image: 'https://images.pexels.com/photos/7937466/pexels-photo-7937466.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        '1.5 Hp Motor',
        'Copper Winding Motor',
        'Only 1 Unit Per Hour',
        'Standard Quality 7 Inch Emery Stone',
        'Stainless Steel Body',
        'Per Hour 14 - 15 kg Grinding Capacity',
        '1 Year Motor Warranty',
        'Lock All Nutrients Of Grain',
        'Compact Size',
        'Ease Of Cleaning'
      ]
    },
    {
      name: 'Pulveriser Model',
      motor: '2 HP, 3 HP, 5 HP Motor',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Multiple Motor Options',
        'Heavy Duty Construction',
        'High Grinding Capacity',
        'Industrial Grade Performance',
        'Suitable for Spice Grinding',
        'Durable Components',
        'Easy Maintenance',
        'Professional Grade Equipment'
      ]
    },
    {
      name: 'Platinum Model',
      motor: 'Premium Design',
      image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Elegant Cabinet Design',
        'Space Saving Vertical Design',
        'Decorative Panel Finish',
        'Compact Footprint',
        'Modern Aesthetics',
        'Home & Commercial Use',
        'Easy Storage',
        'Premium Build Quality'
      ]
    },
    {
      name: 'Diamond & Imperial Models',
      motor: 'Designer Series',
      image: 'https://images.pexels.com/photos/4110168/pexels-photo-4110168.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Attractive Cabinet Designs',
        'Multiple Design Options',
        'Space Efficient',
        'Modern Finishes',
        'Decorative Panels',
        'Suitable for Modern Kitchens',
        'Premium Appearance',
        'Compact & Functional'
      ]
    }
  ];

  const grindingCapacity = [
    { grain: 'Wheat', capacity: '1 H.p. 7 to 8 Kg, 1.5 H.p. 13 to 14 Kg' },
    { grain: 'Dhaniya', capacity: '1 H.p. 10 to 11 Kg, 1.5 H.p. 19 to 20 Kg' },
    { grain: 'Jowar', capacity: '1 H.p. 7 to 8 Kg, 1.5 H.p. 13 to 14 Kg' },
    { grain: 'Bajari', capacity: '1 H.p. 7 to 9 Kg, 1.5 Hp 13 to 14 Kg' },
    { grain: 'Moong', capacity: '1 H.p. 10 to 45 Kg, 1.5 Hp 80 to 90 Kg' },
    { grain: 'Udad', capacity: '1 H.p. 40 To 45 Kg, 1.5 H.p. 80 to 90 Kg' },
    { grain: 'Rice', capacity: '1 H.p. 9 to 10 Kg, 1.5 H.p. 15 to 17 Kg' },
    { grain: 'Besan', capacity: '1 H.p. 9 to 10 Kg, 1.5 H.p. 15 to 17 Kg' },
    { grain: 'Maize', capacity: '1 H.p. 8 To 9 Kg, 1.5 H.p. 13 to 14 Kg' }
  ];

  return (
    <section id="products" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Product Range</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Comprehensive range of flour milling machinery designed for various applications and capacities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden border border-amber-400/10 hover:border-amber-400/30 transition-colors">
              <div className="h-48 overflow-hidden bg-slate-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                <p className="text-amber-400 font-semibold text-sm mb-4">{product.motor}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-slate-300">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8 border border-amber-400/10 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Grinding Capacity Per Hour (Approx)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {grindingCapacity.map((item, index) => (
              <div key={index} className="bg-slate-700/50 p-4 rounded-lg border border-amber-400/10">
                <h4 className="text-base font-semibold text-amber-400 mb-2">{item.grain}</h4>
                <p className="text-slate-300 text-sm">{item.capacity}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-slate-800 border border-amber-400/20 rounded-lg">
            <h4 className="text-lg font-bold text-amber-400 mb-3">Multipurpose Use For:</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center">
                <Check className="w-4 h-4 text-amber-400 mr-2" />
                <span>Hotel & Restaurant</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-amber-400 mr-2" />
                <span>Catering Services</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-amber-400 mr-2" />
                <span>Masala Industries</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-amber-400 mr-2" />
                <span>Chemical Industries</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-amber-400 mr-2" />
                <span>Pharmaceuticals</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-amber-400 mr-2" />
                <span>Ayurvedic Manufacturing</span>
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 text-amber-400 mr-2" />
                <span>Gruh Udyog (Home Industries)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
