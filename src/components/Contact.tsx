import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Get in touch with us for inquiries, orders, or support
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-400/20 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-400/20 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-400/20 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-amber-400/20 rounded-lg bg-slate-800 text-white focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                >
                  <option value="" className="bg-slate-800">Select a subject</option>
                  <option value="product-inquiry" className="bg-slate-800">Product Inquiry</option>
                  <option value="price-quote" className="bg-slate-800">Price Quote</option>
                  <option value="bulk-order" className="bg-slate-800">Bulk Order</option>
                  <option value="technical-support" className="bg-slate-800">Technical Support</option>
                  <option value="dealership" className="bg-slate-800">Dealership Opportunity</option>
                  <option value="other" className="bg-slate-800">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-amber-400/20 rounded-lg bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4 bg-slate-800 p-6 rounded-lg border border-amber-400/10">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Our Location</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Madhuvan Industries<br />
                    Ramnagar-1, National Highway 8-b<br />
                    B/h. Khodiyar Garage<br />
                    Near Lijjat Papad Rajkot - 360 002<br />
                    Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-800 p-6 rounded-lg border border-amber-400/10">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Email Us</h4>
                  <a href="mailto:vitaraflourmill@gmail.com" className="text-amber-400 hover:text-amber-300">
                    vitaraflourmill@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-800 p-6 rounded-lg border border-amber-400/10">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Call Us</h4>
                  <p className="text-slate-400 text-sm">Available for inquiries and support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-slate-800 p-6 rounded-lg border border-amber-400/10">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Business Hours</h4>
                  <p className="text-slate-400 text-sm">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg p-6 text-slate-900">
              <h4 className="text-lg font-bold mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>ISO 9001:2015 Certified Quality</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>Wide Range of Products</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>Competitive Pricing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>Expert Technical Support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-slate-900 rounded-full mr-3"></div>
                  <span>Nationwide Distribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
