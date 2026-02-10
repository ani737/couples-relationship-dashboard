'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: '🏠', label: 'Home', path: '/' },
    { icon: '📋', label: 'Tasks', path: '/tasks' },
    { icon: '🎁', label: 'Rewards', path: '/rewards' },
    { icon: '📸', label: 'Memories', path: '/memories' },
    { icon: '⚙️', label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-rose-100 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-all ${
                  isActive
                    ? 'text-rose-500'
                    : 'text-gray-400 hover:text-rose-400'
                }`}
              >
                <span className={`text-2xl mb-1 transition-transform ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}>
                  {item.icon}
                </span>
                <span className={`text-xs font-medium ${
                  isActive ? 'font-bold' : ''
                }`}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 h-1 w-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-t-full" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
