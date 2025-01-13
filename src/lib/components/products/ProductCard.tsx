'use client';
import React, { useState } from 'react';
import { Button } from "@/lib/components/ui/button"
import { Heart, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image";

type Props = {
    title: string;
    price: number;
    rating: number;
    reviews: number;
    brand: string;
    image: string;
}

const ProductCard = ({
                         title,
                         price,
                         rating,
                         reviews,
                         brand,
                         image
                     }: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-[250px] relative transition-all duration-300 ease-in-out hover:shadow-lg rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-0">
                {/* Image Container */}
                <div className="relative">
                    {/* Product Image */}
                    <Image
                        width={209}
                        height={208}
                        src={image}
                        objectFit="cover"
                        alt={title}
                        className="w-full "
                    />

                    {/* Overlay elements that appear on hover */}
                    <div
                        className={`absolute inset-0 transition-opacity duration-300 ${
                            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    >
                        {/* Navigation Arrows */}
                        <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-white rounded-full shadow-md"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-white rounded-full shadow-md"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>

                        {/* Wishlist Button */}
                        <button
                            className="absolute right-2 top-2 p-1 bg-white rounded-full shadow-md"
                            aria-label="Add to wishlist"
                        >
                            <Heart className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                    <h3 className="font-medium text-md text-[#1d2128]">{title}</h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        {[...Array(rating)].map((_, i) => (
                            <span key={i} className="text-orange-400">★</span>
                        ))}
                        <span className="text-gray-500 ml-1">({reviews})</span>
                    </div>

                    {/* Price and Brand */}
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">${price.toFixed(2)}</span>
                        <div className="flex items-center gap-2">
                            <span className="w-6 h-6 bg-black rounded-full"></span>
                            <span className="text-sm text-gray-600">{brand}</span>
                        </div>
                    </div>

                    {/* Buttons - Only visible on hover */}
                    <div
                        className={`space-y-2 transition-all duration-300 ${
                            isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
                        }`}
                    >
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Add to cart
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                        >
                            Quick View
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
