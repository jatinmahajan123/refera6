// import { useEffect, useRef, useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import {
//   Settings,
//   HelpCircle,
//   BarChart3,
//   Bot,
//   LayoutDashboard,
//   Megaphone,
//   Users,
//   UserPlus,
//   FileText,
// } from 'lucide-react';

// const Sidebar = () => {
//   const menu = [
//     { label: 'Platform Setup', icon: <BarChart3 size={18} />, path: '/platformsetup' },
//     { label: 'AI Agent', icon: <Bot size={18} />, path: '/ai-agent' },
//     { label: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
//     { label: 'Campaign', icon: <Megaphone size={18} />, path: '/campaign' },
//     { label: 'Promoters', icon: <Users size={18} />, path: '/promoters' },
//     { label: 'Leads', icon: <UserPlus size={18} />, path: '/leads' },
//     { label: 'Payouts', icon: <FileText size={18} />, path: '/payouts' },
//   ];

//   const bottomMenu = [
//     { label: 'Settings', icon: <Settings size={18} />, path: '/settings' },
//     { label: 'Help', icon: <HelpCircle size={18} />, path: '/help' },
//   ];

//   const location = useLocation();
//   const [showPopup, setShowPopup] = useState(false);
//   const [currentStep, setCurrentStep] = useState(0);
//   const menuRefs = useRef<(HTMLAnchorElement | null)[]>([]);

//   useEffect(() => {
//     const justLoggedIn = localStorage.getItem('justLoggedIn');
//     if (justLoggedIn === 'true') {
//       setShowPopup(true);
//       localStorage.removeItem('justLoggedIn');
//     }
//   }, []);

//   const handleNext = () => {
//     if (currentStep < menu.length - 1) {
//       setCurrentStep((prev) => prev + 1);
//     } else {
//       setShowPopup(false);
//     }
//   };

//   const handleSkip = () => {
//     setShowPopup(false);
//   };

//   const currentRef = menuRefs.current[currentStep];
//   const rect = currentRef?.getBoundingClientRect();

//   return (
//     <div className="relative w-56 h-screen bg-white border-r flex flex-col justify-between px-3 py-6 text-sm font-medium text-blue-600">
//       {/* Sidebar Items */}
//       <div className="space-y-2">
//         {menu.map((item, idx) => (
//           <NavLink
//             key={idx}
//             to={item.path}
//             ref={(el) => (menuRefs.current[idx] = el)}
//             className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
//               idx === currentStep && showPopup
//                 ? 'bg-blue-100 border-l-4 border-blue-500 text-blue-700 font-semibold'
//                 : location.pathname === item.path
//                 ? 'bg-blue-50 font-semibold'
//                 : 'hover:bg-blue-50'
//             }`}
//           >
//             {item.icon}
//             {item.label}
//           </NavLink>
//         ))}
//       </div>

//       {/* Bottom Menu */}
//       <div className="space-y-2">
//         {bottomMenu.map((item, idx) => (
//           <NavLink
//             key={idx}
//             to={item.path}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
//                 isActive ? 'bg-blue-50 font-semibold' : 'hover:bg-blue-50'
//               }`
//             }
//           >
//             {item.icon}
//             {item.label}
//           </NavLink>
//         ))}
//       </div>

//       {/* Onboarding Popup */}
//       {showPopup && rect && (
//         <div
//           style={{
//             position: 'absolute',
//             top: rect.top - 10 + window.scrollY,
//             left: rect.right + 16,
//             width: '320px',
//             zIndex: 50,
//           }}
//           className="transition-all duration-300 ease-in-out"
//         >
//           <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100 p-4">
//             {/* Title */}
//             <div className="flex items-center gap-2 mb-3">
//               <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
//                 🤖
//               </div>
//               <h2 className="text-sm font-semibold text-gray-800">AI Agent</h2>
//             </div>

//             {/* Body */}
//             <div className="bg-[#F7F9FC] text-gray-700 text-sm rounded-lg p-3 mb-4 border border-gray-200">
//               Hey there! I’m <strong>(Bot Name)</strong>, your AI agent. This is where I live — your go-to space to ask anything, generate campaigns, or get help filling out forms. I’m always just a click away!
//             </div>

//             {/* Controls */}
//             <div className="flex justify-between items-center text-sm">
//               <button
//                 onClick={handleSkip}
//                 className="text-gray-500 underline hover:text-gray-700"
//               >
//                 Skip
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 text-xs font-medium rounded-md"
//               >
//                 Next ({currentStep + 1}/5)
//               </button>
//             </div>

//             {/* Pointer Arrow */}
//             <div className="absolute -left-2 top-12 w-4 h-4 bg-white rotate-45 shadow-md border border-gray-200"></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sidebar;
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Settings,
  HelpCircle,
  BarChart3,
  Bot,
  LayoutDashboard,
  Megaphone,
  Users,
  UserPlus,
  FileText,
} from 'lucide-react';

const Sidebar = () => {
  const menu = [
    { label: 'Platform Setup', icon: <BarChart3 size={18} />, path: '/platformsetup' },
    { label: 'AI Agent', icon: <Bot size={18} />, path: '/ai-agent' },
    { label: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
    { label: 'Campaign', icon: <Megaphone size={18} />, path: '/campaign' },
    { label: 'Promoters', icon: <Users size={18} />, path: '/promoters' },
    { label: 'Leads', icon: <UserPlus size={18} />, path: '/leads' },
    { label: 'Payouts', icon: <FileText size={18} />, path: '/payouts' },
  ];

  const bottomMenu = [
    { label: 'Settings', icon: <Settings size={18} />, path: '/settings' },
    { label: 'Help', icon: <HelpCircle size={18} />, path: '/help' },
  ];

  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const menuRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const justLoggedIn = localStorage.getItem('justLoggedIn');
    if (justLoggedIn === 'true') {
      setShowPopup(true);
      localStorage.removeItem('justLoggedIn');
    }
  }, []);

  const handleNext = () => {
    if (currentStep < menu.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowPopup(false);
    }
  };

  const handleSkip = () => {
    setShowPopup(false);
  };

  const currentRef = menuRefs.current[currentStep];
  const rect = currentRef?.getBoundingClientRect();

  return (
    <div className="relative w-56 h-screen bg-white border-r flex flex-col justify-between px-3 py-6 text-sm font-medium text-blue-600">
      {/* Sidebar Items */}
      <div className="space-y-2">
        {menu.map((item, idx) => {
          const isActiveStep = showPopup && currentStep === idx;
          return (
            <NavLink
              key={idx}
              to={item.path}
              ref={(el) => (menuRefs.current[idx] = el)}
              className={({ isActive }) =>
                `group relative flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                  isActive ? 'bg-blue-50 font-semibold' : 'hover:bg-blue-50'
                } ${isActiveStep ? 'border border-blue-600 shadow-lg z-40 bg-white' : ''}`
              }
            >
              {/* Highlight dot */}
              {isActiveStep && (
                <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 h-2 w-2 bg-blue-600 rounded-full shadow-md z-50"></span>
              )}
              {item.icon}
              <span className="truncate">{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Bottom Menu */}
      <div className="space-y-2">
        {bottomMenu.map((item, idx) => (
          <NavLink
            key={idx}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                isActive ? 'bg-blue-50 font-semibold' : 'hover:bg-blue-50'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Onboarding Popup */}
      {showPopup && rect && (
        <div
          style={{
            position: 'absolute',
            top: rect.top - 30 + window.scrollY,
            left: rect.right + 12,
            width: '300px',
            zIndex: 100,
          }}
          className="transition-all duration-300 ease-in-out"
        >
          <div className="relative p-4 bg-white text-gray-800 shadow-2xl rounded-xl border border-gray-200">
            {/* Icon and Title */}
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 rounded-full p-2">
                {/* <Bot className="text-blue-600 w-5 h-5" /> */}
              </div>
              <h2 className="font-semibold text-base">{menu[currentStep].label}</h2>
            </div>

            {/* Description Box */}
            <div className="bg-gray-100 text-gray-700 rounded-md p-3 text-sm mb-4 leading-snug">
              Hey there! I’m <strong>Refera</strong>, your AI agent. This is where I live —
              your go-to space to ask anything, generate campaigns, or get help filling out forms.
              I’m always just a click away!
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center">
              <button
                onClick={handleSkip}
                className="text-sm text-blue-600 underline hover:text-blue-700"
              >
                Skip
              </button>
              <button
                onClick={handleNext}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-1 rounded-md"
              >
                Next ({currentStep + 1}/{menu.length})
              </button>
            </div>

            {/* Pointer Arrow */}
            <div className="absolute left-[-7px] top-12 w-4 h-4 bg-white rotate-45 shadow-sm border-l border-t border-gray-200"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

