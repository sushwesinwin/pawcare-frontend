import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Service } from '@/lib/services/types'

export default function ServiceCard({ name, imageSrc, imageAlt, href, linkText }: Service) {
    return (
        <div
            className={`border border-gray-200 rounded-lg p-6 flex items-center justify-between hover:scale-105 transition-transform duration-300
            ${imageSrc === '/service-1.jpeg' ? 'bg-white' : imageSrc === '/service-2.jpeg' ? 'bg-[#099FD8] text-white' : 'bg-gray-200 text-gray-900'}`}
        >
            <div className="flex flex-col items-start text-left max-w-[60%]">
                <h3 className="text-lg sm:text-xl">
                    {name}
                </h3>
                <Link
                    href={href}
                    className="text-sm hover:text-orange-600 underline mt-2"
                >
                    {linkText}
                </Link>
            </div>
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={500}
                className="w-35 h-35 object-cover rounded-lg"
            />
        </div>
    )
}
