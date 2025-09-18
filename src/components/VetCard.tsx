import Image from "next/image";
import { VetCardProps } from "@/lib/vets/types";

export default function VetCard({ name, imageSrc, imageAlt, specialization, bio }: VetCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={300}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4"
        sizes="(max-width: 640px) 128px, 160px"
      />
      <h3 className="text-lg sm:text-xl font-medium text-gray-900">{name}</h3>
      <p className="text-sm sm:text-base text-gray-400 font-light mb-2">{specialization}</p>
      <p className="text-sm sm:text-base text-gray-600 max-w-xs">
        {bio}
      </p>
    </div>
  )
}
