import { ArrowLongRightIcon, StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="min-h-[700px] sm:min-h-[800px] bg-[#F7F7F7] flex items-center justify-center py-8 sm:py-12 lg:py-16">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    {/* Image */}
                    <div className="order-2 sm:order-1">
                        <Image
                            src="/hero.jpeg"
                            alt="Hero Image"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover rounded-lg max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] mx-auto"
                            sizes="(max-width: 640px) 350px, (max-width: 1024px) 450px, 500px"
                        />
                    </div>
                    {/* Text and Stats */}
                    <div className="order-1 sm:order-2 pt-10 sm:pt-0 flex flex-col justify-center text-center sm:text-left">
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 mb-4 sm:mb-6">
                            Welcome to <span className="text-orange-600">PawCare</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-500 font-light mb-6 sm:mb-8">
                            Tips, love, and care for your pets — plus the services they deserve.
                        </p>
                        <a
                            href="/register"
                            className="group flex items-center justify-center gap-3 w-44 sm:w-48 lg:w-56 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-black shadow-md rounded-full font-medium transition-colors duration-300 hover:bg-[#E16349] hover:text-white mx-auto sm:mx-0"
                        >
                            <span>Get Started</span>
                            <ArrowLongRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </a>
                        <div className="flex flex-col sm:flex-row justify-center sm:justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
                            <div className="flex w-full flex-col items-center gap-3 md:flex-row md:items-center">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-[#E16349] p-2">
                                    <StarIcon className="h-5 w-5 text-white" />
                                </div>
                                <p className="text-center text-sm font-light text-gray-500 md:text-base md:text-left">
                                    5-Star Reviews from Happy Customers
                                </p>
                            </div>
                            <div className="w-full sm:w-36 lg:w-50">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">16K+</h2>
                                <p className="text-sm sm:text-base font-light text-gray-500">Trusted by Owners</p>
                            </div>
                            <div className="w-full sm:w-36 lg:w-50">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">100%</h2>
                                <p className="text-sm sm:text-base font-light text-gray-500">Paw Approved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}