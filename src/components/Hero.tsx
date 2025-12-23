import { Award, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Premium Flour Mill Machinery
            </h2>
            <p className="text-lg mb-8 text-slate-300">
              Manufacturing excellence in flour grinding technology since inception.
              ISO 9001:2015 certified manufacturer of high-quality Aata Chakki machines.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-300 transition-colors"
              >
                View Products
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-slate-900 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-amber-400/20">
              <img
                src="https://images.pexels.com/photos/7937473/pexels-photo-7937473.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Flour mill machinery"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-colors">
            <Award className="w-10 h-10 mb-4 text-amber-400" />
            <h3 className="text-lg font-semibold mb-2">ISO Certified</h3>
            <p className="text-slate-400 text-sm">ISO 9001:2015 certified manufacturing processes ensuring top quality</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-colors">
            <Shield className="w-10 h-10 mb-4 text-amber-400" />
            <h3 className="text-lg font-semibold mb-2">Durable Design</h3>
            <p className="text-slate-400 text-sm">Stainless steel construction with copper winding motors for longevity</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-colors">
            <Zap className="w-10 h-10 mb-4 text-amber-400" />
            <h3 className="text-lg font-semibold mb-2">High Performance</h3>
            <p className="text-slate-400 text-sm">Multiple motor options from 1.25 HP to 5 HP for varied requirements</p>
          </div>
        </div>
      </div>
    </section>
  );
}
