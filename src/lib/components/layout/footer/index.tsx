// src/components/Footer/Footer.tsx

import React from "react";
import {Facebook, Instagram, Twitter, Youtube} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-gray-700 border-t border-gray-100">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-100">
                {/* Company Info */}
                <div>
                    <Image src="/next.svg" alt="Logo" width={100} height={50} className="mb-5" />
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
                    <h3 className="text-lg font-semibold text-gray-800">Get to Know Us</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:underline">About Us</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">News & Blog</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Carrers</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Investors</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Customer Service</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:underline">Help Center</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">FAQ&#39;s</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Accessibility</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Feedback</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Size Guide</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Payment Method</Link>
                        </li>
                    </ul>
                </div>

                {/* Orders & Returns */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Orders & Returns</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:underline">Track Order</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Shipping & Delivery</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Return & Exchange</Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:underline">Price Match Guarantee</Link>
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
    );
};

export default Footer;
