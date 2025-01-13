// src/components/SearchBar/SearchBar.tsx
'use client';

import React, { useState } from "react";
import styles from "./styles.module.css";
import {ChevronDownIcon, Search} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/lib/components/ui/dropdown-menu";

const categories = [
    "Smart Appliances",
    "Smart TV",
    "Air Purifiers",
    "Automobiles & Motorcycles",
    "Beauty & Health",
    "Collectibles & Art",
    "Electronics",
    "Fashion",
    "Footwear",
    "Home & Garden",
    "Jewelry & Accessories",
    "Kitchen & Dining",
    "Mother & Kids",
    "Sports & Entertainment",
    "Tools & Home Improvement",
    "Toys & Games",
    "All Categories",
];

const Index = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");

    return (
        <div className=" flex items-center gap-2  bg-white ">
            <div className="min-w-[580px] flex items-center px-4 py-2 h-12 rounded-lg shadow-md">
                <input
                    type="text"
                    placeholder="Search for anything"
                    className="flex-1 px-4 py-2 text-gray-700 placeholder-gray-500 bg-transparent border-none focus:outline-none"
                />

                {/* Category Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            className="flex items-center gap-1 px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-200"
                        >
                            {selectedCategory}
                            <ChevronDownIcon className="w-4 h-4"/>
                        </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end"
                        sideOffset={8}
                        className={`z-50 w-[580px] p-4 bg-white rounded-lg shadow-md`}
                    >
                        <div className="grid grid-cols-2 gap-2">
                            {categories.map((category) => (
                                <DropdownMenuItem
                                    key={category}
                                    className="px-2 py-1 text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer"
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </DropdownMenuItem>
                            ))}
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {/* Search Input */}


            {/* Search Button */}
            <button
                className="flex items-center justify-center w-12 h-12 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                aria-label="Search"
            >
                <Search className="w-5 h-5"/>
            </button>
        </div>
    );
};

export default Index;
