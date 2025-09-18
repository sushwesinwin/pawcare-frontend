import Image from 'next/image'
import { VetCardProps } from '@/lib/vets/types'
import VetCard from '../VetCard'

export default function MeetOurVets({ vets }: { vets: VetCardProps[] }) {
  return (
    <section className='bg-white py-12 sm:py-16 lg:py-20'>
        <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900 text-center mb-8 sm:mb-12'>
                Meet Our Vets
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'>
                {vets.map((vet) => (
                    <VetCard  
                        key={vet.id}    
                        id={vet.id}
                        name={vet.name}
                        imageSrc={vet.imageSrc}
                        imageAlt={vet.imageAlt}
                        specialization={vet.specialization}
                        bio={vet.bio}
                    />  
                ))}
            </div>
        </div>
    </section>
  )
}
