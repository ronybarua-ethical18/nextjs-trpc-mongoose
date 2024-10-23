'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react'; // Import session hook
// import Search from '../Search';
// import ProfileDropdown from '../Dropdown';
import Sidebar from '../Sidebar';
// import MobileNav from '../MobileNav';
import { useRouter } from 'next/navigation';
import DashboardItem1 from './DashboardItem1';
import ExpenseIcons from './ExpenseIcons';
import DashboardItem2 from './DashboardItem2';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({}: ProtectedLayoutProps) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Prevent redirect while session is loading
    if (status !== 'authenticated') {
      router.push('/login'); // Redirect to login if no user found
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>; // Optional loading state
  }

  return (
    <div className="flex mx-[128px] bg-[var(--select-box,#EEF0F4)]">
      <div className="flex flex-col justify-between items-center w-[270px] h-[812px] p-[48px] pt-[48px] pb-[16px] rounded-b-[16px] border border-[#EEF0F4] bg-white">
        <Sidebar role="customer" />
      </div>
      <div className="pl-[8px] pt-[32px]">
        <DashboardItem1 />
      </div>
      <div className="pt-[32px]">
        <DashboardItem2 />
      </div>
      <ExpenseIcons />
    </div>
  );
}
