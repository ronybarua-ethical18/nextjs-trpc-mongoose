'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react'; // Import session hook
import Search from '../Search';
import ProfileDropdown from '../Dropdown';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return; // Prevent redirect while session is loading
    if (status !== 'authenticated') {
      router.push('/login'); // Redirect to login if no user found
    }
  }, [status, router]);

  return (
    <>
      {status === 'loading' && <Loading />}
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar role="customer" />
        <div className="flex flex-col h-screen">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <MobileNav />
            <div className="w-full flex-1">
              <Search />
            </div>
            <ProfileDropdown />
          </header>
          <main className="flex-1 overflow-y-auto p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
