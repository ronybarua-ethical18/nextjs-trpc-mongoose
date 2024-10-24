'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react'; // Import session hook
import Search from '../Search';
import ProfileDropdown from '../Dropdown';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';
import Link from 'next/link';
import CompanyLogo from '../CompanyLogo';
import { BellDot } from 'lucide-react';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Prevent redirect while session is loading
    if (status !== 'authenticated') {
      //router.push('/login'); // Redirect to login if no user found
    }
  }, [status, router]);

  return (
    <>
      {status === 'loading' && <Loading />}
      <div className="h-screen w-full overflow-hidden">
        <header className="flex bg-[#00104B] justify-between h-14 items-center px-7  lg:h-[60px] lg:px-[128px]">
          <MobileNav />
          <div className="flex items-center ">
            <Link href="/" className="">
              <CompanyLogo />
              <p className="text-xs text-white font-medium">Welcome</p>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Search />
            <BellDot size={24} color="#FFFF" />
            <ProfileDropdown />
          </div>
        </header>

        <div className="grid bg-[#EEF0F4] space-x-6 lg:space-x-8 h-[calc(100vh-60px)] w-full md:grid-cols-[220px_1fr] lg:grid-cols-[250px_1fr] lg:px-[128px]">
          <Sidebar role="customer" />
          <main className="flex-1 bg-white overflow-y-auto mt-6 lg:mt-8 [&::-webkit-scrollbar]:hidden">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
