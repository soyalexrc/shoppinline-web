import Link from "next/link";
import Image from "next/image";

export default function BestDeals() {
    return (
        <div className="flex justify-center">
            <div className="container p-5">
                <h3 className="text-2xl mb-5 font-bold">Today&#39;s Best Deals</h3>
                <div className="grid grid-cols-4 gap-5">
                    <div className={`p-8 -xl relative h-[500px]`}>
                        <Image
                            src="/images/home/featured-1.webp"
                            alt="featured one"
                            fill
                            objectFit="cover"
                            className="w-full z-10"
                        />
                        <div className="z-20 absolute">
                            <h5 className="text-3xl font-bold text-[#648014] mb-4">Small <br/> Appliances</h5>
                            <p className="text-[#648014]">Up to 40% off Kitchen Products.</p>
                            <Link href="/" className="underline text-[#648014] font-bold">Shop Now</Link>
                        </div>
                    </div>

                    <div className={`p-8 -xl relative h-[500px]`}>
                        <Image
                            src="/images/home/featured-2.webp"
                            alt="featured one"
                            fill
                            objectFit="cover"
                            className="w-full z-10"
                        />
                        <div className="z-20 absolute">
                            <h5 className="text-3xl font-bold text-[#94226d] mb-4">Small <br/> Appliances</h5>
                            <p className="text-[#94226d]">Up to 40% off Kitchen Products.</p>
                            <Link href="/" className="underline text-[#94226d] font-bold">Shop Now</Link>
                        </div>
                    </div>

                    <div className={`p-8 -xl relative h-[500px]`}>
                        <Image
                            src="/images/home/featured-3.webp"
                            alt="featured one"
                            fill
                            objectFit="cover"
                            className="w-full z-10"
                        />
                        <div className="z-20 absolute">
                            <h5 className="text-3xl font-bold text-[#285e8d] mb-4">Small <br/> Appliances</h5>
                            <p className="text-[#285e8d]">Up to 40% off Kitchen Products.</p>
                            <Link href="/" className="underline text-[#285e8d] font-bold">Shop Now</Link>
                        </div>
                    </div>

                    <div className={`p-8 -xl relative h-[500px]`}>
                        <Image
                            src="/images/home/featured-4.webp"
                            alt="featured one"
                            fill
                            objectFit="cover"
                            className="w-full z-10"
                        />
                        <div className="z-20 absolute">
                            <h5 className="text-3xl font-bold text-[#91553a] mb-4">Small <br/> Appliances</h5>
                            <p className="text-[#91553a]">Up to 40% off Kitchen Products.</p>
                            <Link href="/" className="underline text-[#91553a] font-bold">Shop Now</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
