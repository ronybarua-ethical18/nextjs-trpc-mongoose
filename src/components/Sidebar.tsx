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
    <div className="hidden w-[250px] max-h-[calc(100vh-56px)] px-4 py-12 bg-white md:block">
      <div className="flex flex-col h-full justify-between ">
        <nav className="grid items-start text-sm font-medium ">
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
        <UpgradeCard />
      </div>
    </div>
  );
};

export default Sidebar;
