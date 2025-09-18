'use client';
import { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/lib/products/types';
import Link from 'next/link';

export default function BestSeller({ products }: { products: Product[] }) {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 mb-2 sm:mb-4 lg:mb-6">
                    Our Best Selling Pet Food
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-sm font-light text-gray-500 mb-3 sm:mb-4 lg:mb-6 w-full sm:w-4/5 lg:w-1/2">
                    Loved by pets and trusted by owners, our best-selling treat is made with natural ingredients that keep tails wagging and purrs coming. Packed with flavor and nutrition, it’s the perfect reward for your furry friend.
                </p>

                <div className="relative">
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide gap-6 py-4 mx-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {products.map((product) => (
                            <div key={product.id} className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center">
                                <ProductCard
                                    id={product.id}
                                    name={product.name}
                                    imageSrc={product.imageSrc}
                                    imageAlt={product.imageAlt}
                                    price={product.price}
                                    href={product.href}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Scroll left"
                    >
                        <ChevronLeftIcon className="w-6 h-6 text-gray-900" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Scroll right"
                    >
                        <ChevronRightIcon className="w-6 h-6 text-gray-900" />
                    </button>
                </div>

                <Link
                    href="/products"
                    className="inline-block text-xs sm:text-sm md:text-base font-light text-[#E16349] py-1.5 block text-center w-1/2 mx-auto underline hover:text-[#F54A00] transition-colors duration-200"
                >
                    See All Products
                </Link>
            </div>
        </section>
    );
}
