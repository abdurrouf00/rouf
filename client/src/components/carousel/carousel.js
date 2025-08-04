'use client';

import Image from 'next/image';

const images = [
  '/assets/images/carousel-img-hover-1.png',
  '/assets/images/carousel-img-hover-2.png',
  '/assets/images/carousel-img-hover-3.png',
  '/assets/images/carousel-img-hover-4.png',
  '/assets/images/carousel-img-hover-5.png',
];

export default function Carousel() {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex items-center justify-center  animate-scroll gap-4 w-max bg-black h-[220px]">
            {[...images, ...images].map((src, i) => (
            <div key={i} className="w-[20vw] h-[7vh] flex-shrink-0 relative rounded-lg overflow-hidden">
                <Image src={src} alt={`image-${i}`} fill className="object-cover "/>
            </div>))} </div>
      
      <div className="flex items-center justify-center  animate-scroll-medium gap-4 w-max bg-whait h-[220px]">
            {[...images, ...images].map((src, i) => (
            <div key={i} className="w-[20vw] h-[7vh] flex-shrink-0 relative rounded-lg overflow-hidden">
                <Image src={src} alt={`image-${i}`} fill className="object-cover " />
            </div>))} 
      </div>    

      <div className="flex items-center justify-center  animate-scroll gap-4 w-max bg-black h-[220px]">
            {[...images, ...images].map((src, i) => (
            <div key={i} className="w-[20vw] h-[7vh] flex-shrink-0 relative rounded-lg overflow-hidden">
                <Image src={src} alt={`image-${i}`} fill className="object-cover " />
            </div>))}
      </div>
    </div>
  );
}
