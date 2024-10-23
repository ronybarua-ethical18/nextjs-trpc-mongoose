import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi'; // Import a menu icon

// Define the type for a menu item

// Define the type for menuConfig based on roles

interface SidebarProps {
  role: string;
}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to toggle sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-full">
      {/* Menu button for mobile */}
      <div className="block lg:hidden p-2">
        <button
          onClick={toggleSidebar}
          className="text-2xl p-2 bg-indigo-500 text-white rounded-lg"
          aria-label="Open menu"
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 w-64 h-full bg-white z-50 lg:relative lg:flex lg:flex-col transition-all`}
      >
        <div className="flex flex-col w-full text-sm font-semibold leading-none">
          {/* Dashboard Section */}
          <Link
            href="/"
            className="flex gap-2 items-center p-2 w-full bg-white rounded-lg min-h-[36px] text-stone-950"
          >
            <Image
              src="/Dashboard.png"
              alt="Dashboard Icon"
              width={20}
              height={20}
              className="object-contain shrink-0 self-stretch my-auto"
            />
            <span className="flex-1">Dashboard</span>
          </Link>

          {/* Expense Section */}
          <Link
            href="/expense"
            className="flex flex-col mt-2 w-full font-medium whitespace-nowrap"
          >
            <div className="flex gap-2 items-center px-2 py-1.5 w-full text-white bg-indigo-500 rounded-lg">
              <Image
                src="/Expense.png"
                alt="Expense Icon"
                width={20}
                height={20}
                className="object-contain shrink-0 self-stretch my-auto"
              />
              <span className="flex-1">Expense</span>
              <Image
                src="/DownArrow.png"
                alt="Arrow Icon"
                width={20}
                height={20}
                className="object-contain shrink-0 self-stretch my-auto"
              />
            </div>
          </Link>
          <Link
            href="/expense/categories"
            className="flex gap-2 items-center px-2 py-1.5 w-full bg-white rounded-lg text-zinc-500"
          >
            <Image
              src="/Category.png"
              alt="Category Icon"
              width={20}
              height={20}
              className="object-contain shrink-0 self-stretch my-auto"
            />

            <div className="flex-1">Categories</div>
          </Link>

          {/* Rule Section */}
          <Link
            href="/rule"
            className="flex gap-2 items-center px-2 py-1.5 mt-2 w-full whitespace-nowrap bg-white rounded-lg text-stone-950"
          >
            <Image
              src="/Rule.png"
              alt="Rule Icon"
              width={20}
              height={20}
              className="object-contain shrink-0 self-stretch my-auto"
            />
            <span className="flex-1">Rule</span>
          </Link>

          {/* Deductions Section */}
          <Link
            href="/deductions"
            className="flex gap-2 items-center px-2 py-1.5 mt-2 w-full bg-white rounded-lg text-zinc-500"
          >
            <Image
              src="/Deductions.png"
              alt="Deductions Icon"
              width={20}
              height={20}
              className="object-contain shrink-0 self-stretch my-auto"
            />
            <span className="flex-1">Deductions</span>
            <Image
              src="/DownArrowBlack.png"
              alt="Arrow Icon"
              width={20}
              height={20}
              className="object-contain shrink-0 self-stretch my-auto"
            />
          </Link>

          {/* Tax File Section */}
          <Link
            href="/tax-file"
            className="flex gap-2 items-center p-2 mt-2 w-full bg-white rounded-lg min-h-[36px] text-stone-950"
          >
            <Image
              src="/TaxFile.png"
              alt="Tax File Icon"
              width={20}
              height={20}
              className="object-contain shrink-0 self-stretch my-auto"
            />
            <span className="flex-1">Tax file</span>
          </Link>

          {/* Write-offs Section */}
          <Link
            href="/write-offs"
            className="flex gap-2 items-center p-2 mt-2 w-full whitespace-nowrap bg-white rounded-lg min-h-[36px] text-stone-950"
          >
            <Image
              src="/WriteOff.png"
              alt="Write-offs Icon"
              width={20}
              height={20}
              className="object-contain shrink-0 self-stretch my-auto"
            />
            <span className="flex-1">Write-offs</span>
          </Link>
        </div>

        {/* Help Section */}
        <div className="flex flex-col mt-52 w-full">
          <div className="flex flex-col items-center px-6 py-6 w-full bg-indigo-50 rounded-2xl min-h-[213px]">
            <Image
              src="/Expert.png"
              alt="Expert Icon"
              width={51}
              height={51}
              className="object-contain aspect-square"
            />
            <div className="flex flex-col mt-6 w-full max-w-[165px]">
              <div className="flex flex-col items-center self-center text-zinc-500">
                <div className="text-sm font-semibold leading-none">
                  Need help?
                </div>
                <div className="text-xs leading-loose">
                  Please check your docs
                </div>
              </div>
              <Link
                href="/documentation"
                className="flex gap-2.5 justify-center items-center px-4 py-1.5 mt-4 w-full text-sm font-medium leading-6 text-white whitespace-nowrap bg-indigo-500 rounded-md min-h-[36px]"
              >
                <Image
                  src="/Documentation.png"
                  alt="Documentation Icon"
                  width={20}
                  height={20}
                  className="object-contain shrink-0 self-stretch my-auto"
                />
                <span className="self-stretch my-auto">Documentation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for closing sidebar on mobile */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
