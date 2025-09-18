import ServiceCard from "../ServiceCard"
import { Service } from "@/lib/services/types"
import Image from "next/image"
import Link from "next/link"

export default function Services({ services }: { services: Service[] }) {
    return (
        <section className='bg-[#F7F7F7] py-8 sm:py-12 lg:py-16 xl:py-20'>
            <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 text-start mb-6 sm:mb-8 lg:mb-12'>
                    What We Offer for Your Pets
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            id={service.id}
                            name={service.name}
                            imageSrc={service.imageSrc}
                            imageAlt={service.imageAlt}
                            href={service.href}
                            linkText={service.linkText}
                        />
                    ))}
                </div>
                {/* Text and Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
                    {/* Column-1 */}
                    <div className="flex flex-col justify-between space-y-6 sm:space-y-8 lg:space-y-10">
                        {/* Content -1 */}
                        <div>
                            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-900 text-start md:text-end">
                                Your Pet’s Health, Our Priority
                            </h2>
                            <p className="text-xs sm:text-sm md:text-base lg:text-sm font-light text-gray-500 text-start md:text-end mt-2 sm:mt-3">
                                We provide compassionate veterinary care to keep your pets healthy and happy. From routine checkups to advanced treatments, our team is here for every paw with love and expertise.
                            </p>
                        </div>
                        {/* Content -2 */}
                        <div>
                            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-900 text-start md:text-end">
                                Because Your Pet Deserves the Finest Grooming
                            </h2>
                            <p className="text-xs sm:text-sm md:text-base lg:text-sm font-light text-gray-500 text-start md:text-end mt-2 sm:mt-3">
                                Our grooming services are designed to provide your pet with the care they deserve. From regular grooming to special occasions, our team is here to keep your pet looking their best.
                            </p>
                        </div>
                    </div>

                    {/* Column-2 */}
                    <div className="flex justify-center items-center">
                        <Image
                            src="/services-col-2.jpeg"
                            alt="Service 2"
                            width={160}
                            height={160}
                            className="w-40 sm:w-44 md:w-48 lg:w-52 xl:w-60 object-cover rounded-full"
                        />
                    </div>

                    {/* Column-3 */}
                    <div className="flex flex-col items-start md:items-end justify-between space-y-6 sm:space-y-8 lg:space-y-10">
                        {/* Text + Button */}
                        <div>
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-base font-medium text-gray-500 mb-4 sm:mb-5 lg:mb-6">
                                <span className="text-gray-900 font-med">With over a decade of experience,</span> we provide expert and compassionate care to keep every paw healthy and happy.
                            </h3>
                            <Link
                                href="/services"
                                className="inline-block text-xs sm:text-sm md:text-base font-light text-white px-3 sm:px-4 py-1.5 sm:py-2 bg-[#E16349] rounded-full hover:bg-[#F54A00]/80 transition-colors duration-200"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Image */}
                        <Image
                            src="/services-col-3.jpeg"
                            alt="Service 1"
                            width={320}
                            height={160}
                            className="w-full sm:w-64 md:w-72 lg:w-80 h-32 sm:h-36 md:h-40 object-cover rounded-full border border-gray-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}