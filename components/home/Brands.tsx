import Image from 'next/image'

export function Brands() {
  return (
    <div className="w-full bg-black py-6 lg:py-8 lg:-mt-[9.9vmin]">
      <div className="max-w-[145vmin] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-items-center lg:justify-between lg:mr-[12vmin]">
          <Image 
            src="/brands/versace.svg" 
            alt="Versace" 
            width={140} 
            height={32} 
            className="h-6 lg:h-8 w-auto brightness-0 invert"
          />
          <Image 
            src="/brands/zara.svg" 
            alt="Zara" 
            width={140} 
            height={32} 
            className="h-6 lg:h-8 w-auto brightness-0 invert"
          />
          <Image 
            src="/brands/gucc.svg" 
            alt="Gucci" 
            width={140} 
            height={32} 
            className="h-6 lg:h-8 w-auto brightness-0 invert"
          />
          {/* Center last two logos on small screens */}
          <div className="col-span-3 sm:col-span-2 flex justify-center space-x-8 lg:ml-[10vmin]">
            <Image 
              src="/brands/prada.svg" 
              alt="Prada" 
              width={140} 
              height={32} 
              className="h-6 lg:h-8 w-auto brightness-0 invert lg:mr-[6vmin]"
            />
            <Image 
              src="/brands/calvin.svg" 
              alt="Calvin Klein" 
              width={140} 
              height={32} 
              className="h-6 lg:h-8 w-auto brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
