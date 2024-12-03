import Image from "next/image";
import Logo_DarkMode from "../components/Logo_DarkMode";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 shadow-lg flex flex-col items-center pt-24">
        {/* Logo */}
          <Logo_DarkMode/>
        {/* Menu */}
        <nav className="flex flex-col w-full">
          <ul className="space-y-6 text-white text-lg">
            <li className="px-6 py-2 text-limeGreen hover:bg-gray-700 rounded-lg">
              <div className="flex flex-row">
               <img className="mr-5 w-8 h-8" src="/images/Home_Icon.svg" alt="" />
               <span>Dashboard</span>
            </div>
               </li>
            <li className="px-6 py-2 hover:bg-gray-700 rounded-lg">
              <span>Reports</span>
            </li>
            <li className="px-6 py-2 hover:bg-gray-700 rounded-lg">
              <span>Analytics</span>
            </li>
            <li className="px-6 py-2 hover:bg-gray-700 rounded-lg">
              <span>Settings</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 relative bg-white rounded-tl-3xl overflow-hidden">
        {/* Content Area */}
        <div className=" p-6 h-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
