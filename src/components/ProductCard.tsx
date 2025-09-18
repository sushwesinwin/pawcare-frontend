import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Product } from '@/lib/products/types'

export default function ProductCard({ name, imageSrc, imageAlt, price, href }: Product) {
    return (
        <div className="group flex rounded-lg bg-black shadow-md min-h-[200px] sm:min-h-[240px] transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
            <div className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-white">{name}</h3>
                <p className="text-sm sm:text-base text-orange-600">{price}</p>
                <a
                    href={href}
                    className="group/link inline-flex items-center gap-2 text-sm sm:text-base font-light text-white underline hover:text-orange-600 transition-colors duration-300"
                >
                    <span>Buy Product</span>
                    <ArrowLongRightIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
            </div>
            <div className="relative w-[120px] sm:w-[140px]">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-r-lg"
                    sizes="(max-width: 640px) 120px, 140px"
                />
            </div>
        </div>
    )
}