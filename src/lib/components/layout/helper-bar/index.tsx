import Link from "next/link";
import {ArrowRightLeft, CircleHelp, Heart, PackageSearch} from "lucide-react";

export default function HelperBar() {
    return (
        <div className="flex justify-center px-10 py-5">
            <nav className="flex justify-end gap-5 container">
                <Link href="/" className="flex gap-2 text-gray-500 text-xs font-medium">
                    <PackageSearch size={16}/>
                    Track Order
                </Link>
                <Link href="/" className="flex gap-2 text-gray-500 text-xs font-medium">
                    <CircleHelp size={16}/>
                    Help Center
                </Link>
                <Link href="/" className="flex gap-2 text-gray-500 text-xs font-medium">
                    <ArrowRightLeft size={16}/>
                    Compare
                </Link>
                <Link href="/" className="flex gap-2 text-gray-500 text-xs font-medium">
                    <Heart size={16}/>
                    Wishlist
                </Link>
            </nav>
        </div>
    )
}
