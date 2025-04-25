// "use client";

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Eye, EyeOff } from 'lucide-react';
// import WaveDecoration from './WaveDecoration';
// import { useNavigate } from "react-router-dom";

// const LoginCard: React.FC = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleMagicLinkSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Magic link requested for:', email);
//   };

//   const handleLoginSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Login attempted with:', { email, password });
//     localStorage.setItem("justLoggedIn", "true");

//     navigate("/platformsetup");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 relative">
//       <WaveDecoration />
//       <div className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg relative z-10">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
//           Login to ReferralHub
//         </h2>

//         <Button 
//           variant="outline" 
//           className="w-full mb-6 h-11 text-gray-700 border border-gray-300"
//           onClick={() => console.log('OAuth clicked')}
//         >
//           Continue with Google/Microsoft
//         </Button>

//         {/* Magic Link Login */}
//         <div className="mb-6">
//           <p className="text-sm font-medium text-gray-700 mb-2">Magic Link Login</p>
//           <form onSubmit={handleMagicLinkSubmit} className="space-y-3">
//             <Input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
//               Send Magic Link
//             </Button>
//           </form>
//         </div>

//         <div className="relative flex items-center justify-center my-6">
//           <div className="absolute inset-0 flex items-center">
//             <div className="w-full border-t border-gray-300"></div>
//           </div>
//           <div className="relative bg-white px-4">
//             <span className="text-sm text-gray-500">or</span>
//           </div>
//         </div>

//         {/* Traditional Login */}
//         <form onSubmit={handleLoginSubmit} className="space-y-4">
//           <div>
//             <label className="text-sm font-medium text-gray-700">Email</label>
//             <Input
//               type="email"
//               placeholder="robert.fox@myemail.com"
//               className="mt-1"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="text-sm font-medium text-gray-700">Password</label>
//             <div className="relative">
//               <Input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter password"
//                 className="mt-1 pr-10"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-[60%] transform -translate-y-1/2"
//               >
//                 {showPassword ? (
//                   <EyeOff className="h-4 w-4 text-gray-500" />
//                 ) : (
//                   <Eye className="h-4 w-4 text-gray-500" />
//                 )}
//               </button>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <Checkbox id="remember" className="h-4 w-4 text-blue-500" />
//               <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
//                 Remember Me
//               </label>
//             </div>
//             <button type="button" className="text-sm text-blue-500 hover:text-blue-600">
//               Forgot password?
//             </button>
//           </div>

//           <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
//             Login
//           </Button>
//         </form>

//         {/* Social Icons with direct image links */}
//         <div className="mt-6">
//           <div className="relative flex items-center justify-center">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative bg-white px-4">
//               <span className="text-sm text-gray-500">or</span>
//             </div>
//           </div>

//           <div className="mt-4 flex justify-center space-x-4" style={styles.socialIcons}>
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
//               alt="Google"
//               style={styles.icon}
//             />
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png"
//               alt="Facebook"
//               style={styles.icon}
//             />
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
//               alt="X"
//               style={styles.icon}
//             />
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
//               alt="LinkedIn"
//               style={styles.icon}
//             />
//           </div>
//         </div>

//         {/* Register Link */}
//         <p className="mt-6 text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <button
//             onClick={() => navigate('/register')}
//             className="text-blue-500 hover:text-blue-600 font-medium"
//           >
//             Register now
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   socialIcons: {
//     display: 'flex',
//     gap: '16px',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     width: '28px',
//     height: '28px',
//     cursor: 'pointer',
//     transition: 'transform 0.2s ease-in-out',
//   },
// };

// export default LoginCard;


"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from 'lucide-react';
import WaveDecoration from './WaveDecoration';
import { useNavigate, useLocation } from "react-router-dom";
import { authService } from '@/lib/auth-service';

const LoginCard: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for registration success message
    const params = new URLSearchParams(location.search);
    const registered = params.get('registered');
    if (registered === 'true') {
      setSuccessMessage('Registration successful! Please log in.');
      
      // Clear the URL parameter after displaying the message
      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

  const handleMagicLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('Magic link functionality requires backend implementation.');
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate credentials
    if (authService.validateUser(email, password)) {
      // Set authentication state
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      
      localStorage.setItem("justLoggedIn", "true");
      // Redirect to platform setup
      navigate("/platformsetup");
    } else {
      setError('Invalid email or password. Please Register and then Login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 relative">
      <WaveDecoration />
      <div className="w-full max-w-md p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg relative z-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login to ReferralHub
        </h2>

        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
            {successMessage}
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <Button 
          variant="outline" 
          className="w-full mb-6 h-11 text-gray-700 border border-gray-300"
          onClick={() => setError('OAuth requires backend implementation.')}
        >
          Continue with Google/Microsoft
        </Button>

        {/* Magic Link Login */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Magic Link Login</p>
          <form onSubmit={handleMagicLinkSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              Send Magic Link
            </Button>
          </form>
        </div>

        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4">
            <span className="text-sm text-gray-500">or</span>
          </div>
        </div>

        {/* Traditional Login */}
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              placeholder="robert.fox@myemail.com"
              className="mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="mt-1 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[60%] transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember" className="h-4 w-4 text-blue-500" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember Me
              </label>
            </div>
            <button type="button" className="text-sm text-blue-500 hover:text-blue-600">
              Forgot password?
            </button>
          </div>

          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            Login
          </Button>
        </form>

        {/* Social Icons with direct image links */}
        <div className="mt-6">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative bg-white px-4">
              <span className="text-sm text-gray-500">or</span>
            </div>
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="w-7 h-7 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png"
              alt="Facebook"
              className="w-7 h-7 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
              alt="X"
              className="w-7 h-7 cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-7 h-7 cursor-pointer"
            />
          </div>
        </div>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/register')}
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Register now
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;