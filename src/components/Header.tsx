'use client'; // Add this line

import * as React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <>
      <div className="flex flex-wrap gap-10 justify-between items-center px-32 whitespace-nowrap bg-indigo-950 max-md:px-5">
        <div className="flex flex-col self-stretch my-auto text-xs font-medium leading-loose text-white w-[114px]">
          <Image
            src="/title.png"
            alt="Description of image"
            width={114}
            height={24} // Adjust based on the actual aspect ratio
            className="object-contain w-[114px]"
          />

          <div>Welcome</div>
        </div>
        <div className="flex gap-8 items-center self-stretch my-auto text-sm leading-none min-w-[240px] text-zinc-500 max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[322px]">
            <div className="flex gap-2 items-start w-full bg-white">
              <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
                <div className="flex gap-10 justify-between items-center px-3 py-2 w-full rounded-md border border-solid border-zinc-200">
                  <div className="self-stretch my-auto">Search</div>

                  <Image
                    src="/Search.png"
                    alt="Description of image"
                    width={16} // width of 4 units (4*4 = 16px)
                    height={16} // height of 16px to maintain the aspect ratio as square
                    className="object-contain shrink-0 self-stretch my-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-8">
            <Image
              src="/Bell.png" // Replace with your icon path
              alt="icon"
              width={20}
              height={20}
            />
          </button>

          <Image
            src="/Avatar.png"
            alt="Description of image"
            width={38}
            height={38}
            className="object-contain shrink-0 self-stretch py-2.5 my-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
