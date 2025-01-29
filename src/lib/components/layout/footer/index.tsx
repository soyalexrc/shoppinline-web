// src/components/Footer/Footer.tsx

import React from 'react';
import {
  Facebook,
  Instagram,
  MailOpen,
  PhoneCall,
  Twitter,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="px-20">
      {/*Let's keep in touch*/}

      <div className="max-w-7xl mx-auto grid grid-cols-2 border-t px-4 border-gray-100  py-10 ">
        <div className="grid grid-cols-3">
          <div className="flex flex-col gap-2">
            <PhoneCall />
            <h6 className="text-lg font-bold mb-2">Call</h6>
            <p className="text-sm">
              Call us from 8am to <br /> 12am ET.
            </p>
            <Link className="text-sm hover:underline" href="tel:1001202">
              1-1020-1203123
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <MailOpen />
            <h6 className="text-lg font-bold mb-2">Email</h6>
            <p className="text-sm">
              Our response time is <br /> 1 to 3 business days.
            </p>
            <Link
              className="text-sm hover:underline"
              href="mailto:alexcarvajal2404@gmail.com"
            >
              Send Message
            </Link>
          </div>
          <div></div>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="text-3xl font-bold">Let’s keep in touch</h6>
          <p className="text-sm mb-2">
            Get recommendations, tips, updates, promotions and more.
          </p>
          <div className="flex gap-5">
            <div className="flex-1 flex items-center px-4 py-2 h-12 rounded-lg shadow-md">
              <input
                type="text"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-500 bg-transparent border-none focus:outline-none"
              />
            </div>
            <button
              className="flex items-center justify-center px-10 h-12 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              aria-label="Search"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <footer className="text-gray-700 border-t border-gray-100">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-100">
          {/* Company Info */}
          <div>
            <Image
              src="/next.svg"
              alt="Logo"
              width={100}
              height={50}
              className="mb-5"
            />
            <p className="mt-2 text-sm">Best For Shopping</p>
            <p className="mt-1 text-sm text-gray-600">
              Sed do eiusmod tempor incididuntut labore dolore magna.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Twitter className="text-gray-500 hover:text-blue-400 cursor-pointer" />
              <Facebook className="text-gray-500 hover:text-blue-600 cursor-pointer" />
              <Youtube className="text-gray-500 hover:text-red-500 cursor-pointer" />
              <Instagram className="text-gray-500 hover:text-pink-500 cursor-pointer" />
              {/*<Whatsapp className="text-gray-500 hover:text-green-500 cursor-pointer" />*/}
            </div>
          </div>

          {/* Get to Know Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Get to Know Us
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Carrers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Customer Service
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  FAQ&#39;s
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Payment Method
                </Link>
              </li>
            </ul>
          </div>

          {/* Orders & Returns */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Orders & Returns
            </h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Return & Exchange
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:underline">
                  Price Match Guarantee
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          {/* Left Section */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="hover:underline">
              Legal
            </Link>
            <Link href="#" className="hover:underline">
              Site Map
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>Copyright © 2025 Motta, All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
