'use client';
import React from 'react';
import Image from 'next/image';

export default function Clothing() {
  return (
    <div className="max-h-[73px]">
      <div className="flex gap-4 items-center self-stretch p-4 h-full bg-white rounded-2xl border border-gray-100 border-solid">
        <Image
          src="/Clothing.png"
          alt="Description of image"
          width={41} // matches the w-[41px] class
          height={40} // derived from the aspect ratio of 1.02 (41 / 1.02 ≈ 40)
          className="object-contain shrink-0 self-stretch my-auto"
        />
        <div className="flex flex-col self-stretch my-auto">
          <div className="text-base font-bold text-stone-950">$500</div>
          <div className="text-xs font-semibold leading-loose text-zinc-500">
            Clothing (15)
          </div>
        </div>
      </div>
    </div>
  );
}
