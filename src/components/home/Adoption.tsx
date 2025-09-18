import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Adoption() {
    return (
        <section
            className="min-h-[500px] sm:min-h-[600px] py-12 sm:py-16 lg:py-20 bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/adoption-bg.jpeg')`,
            }}
        >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center order-2 sm:order-1">
                    {/* Image */}
                    <div className="order-2 sm:order-1">
                        <Image
                            src="/adoption.jpeg"
                            alt="Adoption Image"
                            width={500}
                            height={500}
                            className="w-full h-auto object-cover rounded-lg max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] mx-auto"
                            sizes="(max-width: 640px) 350px, (max-width: 1024px) 450px, 500px"
                        />
                    </div>
                    {/* Text and Button */}
                    <div className="order-1 sm:order-2 pt-10 sm:pt-0 flex flex-col justify-center text-center sm:text-left order-1 sm:order-2">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-4">
                            Find Your <span className='text-orange-600'>New Best Friend</span>
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-light mb-6 sm:mb-8">
                            Discover pets waiting for a loving home. Start your adoption journey today and give a furry friend a forever family.
                        </p>
                        <a
                            href="/adopt"
                            className="group flex items-center justify-center gap-3 w-44 sm:w-48 lg:w-56 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 bg-white text-black shadow-md rounded-full font-medium transition-colors duration-300 hover:bg-[#E16349] hover:text-white mx-auto sm:mx-0"
                        >
                            <span>Adopt Now</span>
                            <ArrowLongRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}