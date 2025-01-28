import ProductCard from "@/lib/components/products/ProductCard";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/lib/components/ui/carousel";

export default function ProductCarousel() {
    return (
        <div className="container mx-auto">
            <Carousel
                opts={{
                    loop: true,
                    align: 'center'
                }}
            >
                <CarouselContent>
                    {
                        Array.from({length: 10}).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5 mb-5">
                                <ProductCard
                                    isOffer={index === 6 || index === 2}
                                    isHot={index === 3 || index === 6}
                                    title="Wooden Time Clock"
                                    price={69.23}
                                    rating={5}
                                    reviews={1}
                                    brand="Bordo"
                                    image="/images/product/product-1.webp"
                                />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
