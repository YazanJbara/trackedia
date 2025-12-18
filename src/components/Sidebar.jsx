import { Home, LayoutDashboard, User, FileBarChart } from 'lucide-react';

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
    title: 'dashboard',
    icon: <LayoutDashboard />,
    url: '#',
  },
  {
    title: 'User',
    icon: <User />,
    url: '#',
  },
];

function Sidebar() {
  return (
    <aside className='h-screen w-12.5'>
      <nav className='bg-light-green h-full pt-6 '>
        <ul className=' flex flex-col items-center gap-12'>
          {sidebarItems.map(item => (
            <li className='bg-normal-white p-1.5 rounded-full' key={item.title}>
              <a href={item.url}>
                {item.icon}
                <span className='hidden'>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
