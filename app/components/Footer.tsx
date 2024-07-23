import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 pb-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">2215 US-1 SOUTH, North Brunswick Township, NJ 08902
            </p>
            <p className="mb-2">Food City, FC 12345</p>
            <p className="mb-2">Phone:(732) 398-9022
            </p>
            <p>Email: contact@restaurant.com</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Menu</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>

        {/* Subscribe Form */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="mb-6">Get the latest updates and offers directly to your inbox.</p>
          <form className="flex flex-col sm:flex-row justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded-l-lg border border-gray-700 bg-gray-800 text-white mb-2 sm:mb-0 sm:mr-2"
            />
            <button 
              type="submit" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className=" text-gray-400 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Garu Palace All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
