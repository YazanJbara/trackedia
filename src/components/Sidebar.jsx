import { Home, LayoutDashboard, User, FileBarChart } from 'lucide-react';
import { useState } from 'react';

const sidebarItems = [
  {
    title: 'Home',
    icon: <Home />,
    url: '#',
  },

  {
    title: 'Analytics',
    icon: <FileBarChart />,
    url: '#',
  },

  {
    title: 'Dashboard',
    icon: <LayoutDashboard />,
    url: '#',
    active: true,
  },
  {
    title: 'User',
    icon: <User />,
    url: '#',
  },
];

function Sidebar() {
  return (
    <nav className='h-full border-r border-r-white p-4 shadow-sm'>
      <ul className='mt-6 flex flex-col items-center gap-9 space-y-2'>
        {sidebarItems.map(item => (
          <li
            className={`group bg-light-yellow relative inline-flex w-max cursor-pointer gap-1.5 rounded-md px-3 py-2 transition-colors ${
              item.active
                ? 'bg-linear-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
                : 'hover:bg-neutral-blue text-gray-600'
            } `}
          >
            <i>{item.icon}</i>
            <span className='absolute left-full ml-6 hidden translate-x-3 rounded-md bg-indigo-100 px-2 py-1 text-sm text-indigo-800 opacity-20 transition-all group-hover:block group-hover:translate-x-0 group-hover:opacity-100'>
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
