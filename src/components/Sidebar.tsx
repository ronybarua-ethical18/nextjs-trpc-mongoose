import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { menuConfig } from '@/utils/dummy';
import { UpgradeCard } from './UpgradedCard';

// Define the type for a menu item
type MenuItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>; // Icon as a component
  badge?: number; // Optional badge
};

// Define the type for menuConfig based on roles
type MenuConfig = {
  [role: string]: MenuItem[];
};

interface SidebarProps {
  role: string;
}

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  // Ensure menuConfig is typed correctly
  const menuItems: MenuItem[] = (menuConfig as MenuConfig)[role] || [];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="">
            {/* <FcPackage className="h-6 w-6" /> */}
            <h3 className="font-normal text-xl">Fradragsjakt</h3>
            <h3>Welcome</h3>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {menuItems.map(({ href, label, icon: Icon, badge }) => (
              <Link
                key={href}
                href={`/${role}${href}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                <span className="font-thin text-base">{label}</span>
                {badge && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {badge}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </div>
        {/* Upgrade to Pro section */}
        <div className="mt-auto p-4">
          <UpgradeCard />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
