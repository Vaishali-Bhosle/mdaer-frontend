// import Image from "next/image";
// import Logo_DarkMode from "../components/Logo_DarkMode";

// const Layout = ({ children }) => {
//   return (
//     <div className="flex h-screen bg-gray-900">
//       {/* Sidebar */}
//       <aside className="w-72 bg-gray-900 shadow-lg flex flex-col items-center pt-24">
//         {/* Logo */}
//           <Logo_DarkMode/>
//         {/* Menu */}
//         <nav className="flex flex-col w-full">
//           <ul className="space-y-6 text-white text-lg">
//             <li className="px-6 py-2 text-limeGreen hover:bg-gray-700 rounded-lg">
//               <div className="flex flex-row">
//                <img className="mr-5 w-8 h-8" src="/images/Home_Icon.svg" alt="" />
//                <span>Dashboard</span>
//             </div>
//                </li>
//             <li className="px-6 py-2 hover:bg-gray-700 rounded-lg">
//               <span>Reports</span>
//             </li>
//             <li className="px-6 py-2 hover:bg-gray-700 rounded-lg">
//               <span>Analytics</span>
//             </li>
//             <li className="px-6 py-2 hover:bg-gray-700 rounded-lg">
//               <span>Settings</span>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 relative bg-white rounded-tl-3xl overflow-hidden">
//         {/* Content Area */}
//         <div className=" p-6 h-full">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import { useRouter } from "next/router";
// import Image from "next/image";
// import Logo_DarkMode from "../components/Logo_DarkMode";

// const Layout = ({ children, role }) => {
//   const router = useRouter();

//   // Role-based Navigation Menu
//   const menus = {
//     institutionAdmin: [
//       { name: "Dashboard", icon: "/images/Home_Icon.svg", route: "/dashboard/instAdmin" },
//       { name: "Manage Departments", icon: "/images/Manage_Departments.svg", route: "/dashboard/instAdmin/departments" },
//       { name: "Manage Department Admins", icon: "/images/Manage_Admins.svg", route: "/dashboard/instAdmin/admins" },
//       { name: "View Reports", icon: "/images/Reports_Icon.svg", route: "/dashboard/instAdmin/reports" },
//       { name: "Generate Analytics", icon: "/images/Analytics_Icon.svg", route: "/dashboard/instAdmin/analytics" },
//       { name: "Report Adverse Events", icon: "/images/Adverse_Event_Icon.svg", route: "/dashboard/instAdmin/report" },
//       { name: "Global Recall Notifications", icon: "/images/Recall_Notifications.svg", route: "/dashboard/instAdmin/recall" },
//       { name: "Export/Download Reports", icon: "/images/Export_Icon.svg", route: "/dashboard/instAdmin/export" },
//       { name: "Mark Reports for Truncation", icon: "/images/Truncate_Icon.svg", route: "/dashboard/instAdmin/truncate" },
//       { name: "Filter and Track Reports", icon: "/images/Filter_Icon.svg", route: "/dashboard/instAdmin/filter" },
//     ],
//     // Additional roles can be added here, e.g., departmentAdmin, coordinator
//   };

//   const menuItems = menus[role] || []; // Default to an empty menu if the role is not recognized

//   const handleNavigation = (route) => {
//     router.push(route);
//   };

//   return (
//     <div className="flex h-screen bg-gray-900">
//       {/* Sidebar */}
//       <aside className="w-72 bg-gray-900 shadow-lg flex flex-col items-center pt-16">
//         {/* Logo */}
//         <Logo_DarkMode />
//         {/* Dynamic Navigation Menu */}
//         <nav className="flex flex-col w-full mt-10">
//           <ul className="space-y-6 text-white text-lg">
//             {menuItems.map((item, idx) => (
//               <li
//                 key={idx}
//                 className="px-6 py-2 hover:bg-gray-700 rounded-lg flex items-center cursor-pointer"
//                 onClick={() => handleNavigation(item.route)}
//               >
//                 <img
//                   src={item.icon}
//                   alt={item.name}
//                   className="w-6 h-6 mr-4"
//                   onError={(e) => (e.target.style.display = "none")} // Hide icon if not found
//                 />
//                 <span>{item.name}</span>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 relative bg-white rounded-tl-3xl overflow-hidden">
//         <div className="p-6 h-full">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Layout;


import { useRouter } from "next/router";
import Image from "next/image";
import Logo_DarkMode from "../components/Logo_DarkMode";

const Layout = ({ children, role }) => {
  const router = useRouter();

  // Role-based Navigation Menu
  const menus = {
    institutionAdmin: [
      { name: "Dashboard", icon: "/images/Home_Icon.svg", route: "/dashboard/instAdmin" },
      { name: "Manage Departments", icon: "/images/Manage_Departments.svg", route: "/dashboard/instAdmin/departments" },
      { name: "Manage Department Admins", icon: "/images/Manage_Admins.svg", route: "/dashboard/instAdmin/admins" },
      { name: "View Reports", icon: "/images/Reports_Icon.svg", route: "/dashboard/instAdmin/reports" },
      { name: "Generate Analytics", icon: "/images/Analytics_Icon.svg", route: "/dashboard/instAdmin/analytics" },
      { name: "Report Adverse Events", icon: "/images/Adverse_Event_Icon.svg", route: "/dashboard/instAdmin/report" },
      { name: "Global Recall Notifications", icon: "/images/Recall_Notifications.svg", route: "/dashboard/instAdmin/recall" },
      { name: "Export/Download Reports", icon: "/images/Export_Icon.svg", route: "/dashboard/instAdmin/export" },
      { name: "Mark Reports for Truncation", icon: "/images/Truncate_Icon.svg", route: "/dashboard/instAdmin/truncate" },
      { name: "Filter and Track Reports", icon: "/images/Filter_Icon.svg", route: "/dashboard/instAdmin/filter" },
    ],
  };

  const menuItems = menus[role] || []; // Default to an empty menu if the role is not recognized

  const handleNavigation = (route) => {
    router.push(route);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 shadow-lg flex flex-col items-center pt-16">
        {/* Logo */}
        <Logo_DarkMode />
        {/* Dynamic Navigation Menu */}
        <nav className="flex flex-col w-full mt-10">
          <ul className="space-y-6 text-white text-lg">
            {menuItems.map((item, idx) => {
              const isActive = router.pathname.startsWith(item.route); // Check if the current route matches
              return (
                <li
                  key={idx}
                  className="px-6 py-2 hover:bg-gray-700 rounded-lg flex items-center cursor-pointer"
                  onClick={() => handleNavigation(item.route)}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 mr-4"
                    onError={(e) => (e.target.style.display = "none")} // Hide icon if not found
                  />
                  <span className={`${isActive ? "text-limeGreen font-bold" : ""}`}>
                    {item.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 relative bg-white rounded-tl-3xl overflow-hidden">
        <div className="p-6 h-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
