import ProductCard from "@/lib/components/products/ProductCard";

export default function ProductCarousel() {
    return (
        <div className="flex justify-center">
            <div className="flex gap-5 container">
                <ProductCard
                    title="Wooden Time Clock"
                    price={69.23}
                    rating={5}
                    reviews={1}
                    brand="Bordo"
                    image="/images/product/product-1.webp"
                />
                <ProductCard
                    title="Wooden Time Clock"
                    price={69.23}
                    rating={5}
                    reviews={1}
                    brand="Bordo"
                    image="/images/product/product-1.webp"
                />
                <ProductCard
                    title="Wooden Time Clock"
                    price={69.23}
                    rating={5}
                    reviews={1}
                    brand="Bordo"
                    image="/images/product/product-1.webp"
                />
                <ProductCard
                    title="Wooden Time Clock"
                    price={69.23}
                    rating={5}
                    reviews={1}
                    brand="Bordo"
                    image="/images/product/product-1.webp"
                />
                <ProductCard
                    title="Wooden Time Clock"
                    price={69.23}
                    rating={5}
                    reviews={1}
                    brand="Bordo"
                    image="/images/product/product-1.webp"
                />
                <ProductCard
                    title="Wooden Time Clock"
                    price={69.23}
                    rating={5}
                    reviews={1}
                    brand="Bordo"
                    image="/images/product/product-1.webp"
                />
            </div>
        </div>
    )
}
