import React from 'react'
import Hero from '@/components/home/Hero'
import MeetOurVets from '@/components/home/MeetOurVets'
import Adoption from '@/components/home/Adoption'
import Services from '@/components/home/Services'
import BestSeller from '@/components/home/BestSeller'

export default function Homepage() {
  const services = [
    {
      id: 1,
      name: 'Trusted Veterinary Care for Every Paw',
      imageSrc: '/service-1.jpeg',
      imageAlt: 'Veterinary Care',
      href: '/services',
      linkText: 'Read More',
    },
    {
      id: 2,
      name: 'Give Your Pet the Luxury Grooming Experience',
      imageSrc: '/service-2.jpeg',
      imageAlt: 'Grooming',
      href: '/services',
      linkText: 'Book Now',
    },
    {
      id: 3,
      name: 'Bring Home a Friend',
      imageSrc: '/service-3.jpeg',
      imageAlt: 'Adoption',
      href: '/services',
      linkText: 'Adopt Now',
    }
  ]
  
  const vets = [
    {
        id: 1,
        name: 'Dr. Jane Smith',
        imageSrc: '/vet-1.jpeg',
        imageAlt: 'Dr. Jane Smith',
        specialization: 'Veterinarian',
        bio: 'Dr. Smith has over 15 years of experience in pet care, specializing in small animals and preventative medicine.',
    },
    
    {
        id: 2,
        name: 'Dr. Michael Brown',
        imageSrc: '/vet-2.jpeg',
        imageAlt: 'Dr. Michael Brown',
        specialization: 'Veterinary Surgeon',
        bio: 'Dr. Brown is an expert in surgical procedures, ensuring your pets receive top-notch care during complex treatments.',
    },
    {
        id: 3,
        name: 'Dr. Emily Davis',
        imageSrc: '/vet-3.jpeg',
        imageAlt: 'Dr. Emily Davis',
        specialization: 'Animal Behaviorist',
        bio: 'Dr. Davis helps pets overcome behavioral challenges with compassionate and effective training techniques.',
    },
  ]

  const products = [
    {
        id: 1,
        name: 'Chicken & Lamb Feast',
        imageSrc: '/bestseller-1.jpeg',
        imageAlt: 'Chicken & Lamb Feast',
        price: '$12.99',
        href: '/products/chicken-lamb-feast',
    },
    {
        id: 2,
        name: 'Puppy Love',
        imageSrc: '/bestseller-2.jpeg',
        imageAlt: 'Puppy Love',
        price: '$12.99',
        href: '/products/puppy-love',
    },
    {
        id: 3,  
        name: 'Grass-Fed Lamb',
        imageSrc: '/bestseller-3.jpeg',
        imageAlt: 'Grass-Fed Lamb',
        price: '$12.99',
        href: '/products/grass-fed-lamb',
    },
    {
        id: 4,
        name: 'Ollie Beef & Sweet Potato',
        imageSrc: '/bestseller-4.jpeg',
        imageAlt: 'Ollie Beef & Sweet Potato',
        price: '$12.99',
        href: '/products/ollie-beef-sweet-potato',
    },
    {
        id: 5,
        name: 'Ollie Chicken & Carrot',
        imageSrc: '/bestseller-5.jpeg',
        imageAlt: 'Ollie Chicken & Carrot',
        price: '$12.99',
        href: '/products/ollie-chicken-carrot',
    },
    {
        id: 6,
        name: 'Ollie Training Treats',
        imageSrc: '/bestseller-6.jpeg',
        imageAlt: 'Ollie Training Treats',
        price: '$12.99',
        href: '/products/ollie-training-treats',
    },
]
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <MeetOurVets vets={vets}/>
      <Adoption />
      <Services services={services} />
      <BestSeller products={products} />
    </div>
  )
}
  