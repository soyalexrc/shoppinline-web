import Image from "next/image";
import Link from "next/link";
import {ShoppingCart, User} from "lucide-react";
import SearchBar from "@/lib/components/layout/header/search-bar";

export default function Header () {
    return (
        <div className="flex justify-center mt-5">
            <div className="container px-10 flex justify-between items-center gap-20">
                <Image src="/next.svg" alt="logo" width={100} height={50} />
                <SearchBar />
                <div className="flex gap-5">
                    <Link href="/" className="flex gap-2 text-sm font-bold">
                        <User size={20}/>
                        Account
                    </Link>
                    <Link href="/" className="flex gap-2 text-sm font-bold">
                        <ShoppingCart size={20}/>
                        Cart
                    </Link>
                </div>
            </div>
        </div>
    )
}
