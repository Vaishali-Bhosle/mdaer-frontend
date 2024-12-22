// import Image from "next/image";
// import Footer from "../components/Footer";
// import Logo from "../components/Logo"; // Import the reusable Logo component

// export default function Login() {
//   return (
//     <div className="flex flex-col min-h-screen bg-cyan-200">
//       {/* Reusable Logo */}
//       <Logo />

//       {/* Main Content */}
//       <main className="flex flex-1 items-center justify-center px-4">
//         {/* Left Section */}
//         <div className="w-[600px] bg-white/10 border-2 border-white rounded-2xl shadow-inner backdrop-blur-lg p-8">
//           <h1 className="text-center text-blue-800 font-bold text-2xl mb-6">
//             Login to Your Account
//           </h1>
//           <div className="flex flex-col items-center">
//             <input
//               type="tel"
//               name="PhoneNo"
//               placeholder="Mobile number"
//               className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
//             />
//             <button
//               type="button"
//               className="w-full h-12 bg-green-600 text-white rounded-lg font-medium mb-6"
//             >
//               SEND OTP
//             </button>
//             <input
//               type="text"
//               name="Otp"
//               placeholder="Enter the OTP"
//               className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
//             />
//             <div className="flex justify-between w-full px-1 mb-6">
//               <a href="/register" className="text-gray-700 underline text-sm">
//                 Don’t Have an Account?
//               </a>
//               <a href="#" className="text-gray-700 underline text-sm">
//                 Resend OTP
//               </a>
//             </div>
//             <button
//               type="submit"
//               className="w-full h-12 bg-green-600 text-white rounded-full font-medium"
//             >
//               SIGN IN
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-[400px] text-center mx-4">
//           <h1 className="text-blue-800 font-bold text-3xl mb-4">
//             Lorem ipsum dolor sit amet
//           </h1>
//           <p className="text-gray-500 text-lg mb-6">
//             consectetur adipiscing elit. Suspendisse sed <br />
//             urna in justo euismod condimentum.
//           </p>
//           <Image
//             src="/images/LoginImage.png"
//             alt="Login Illustration"
//             width={300}
//             height={250}
//             className="mt-6"
//           />
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

//Below is doing a trial of Dynamic Login Page

// import { useState } from "react";
// import Image from "next/image";
// import Footer from "../components/Footer";
// import Logo from "../components/Logo";

// export default function Login() {
//   const [showOtpFields, setShowOtpFields] = useState(false); // State to toggle OTP fields

//   const handleSendOtp = () => {
//     setShowOtpFields(true); // Show OTP fields after "Send OTP" is clicked
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-cyan-200">
//       {/* Reusable Logo */}
//       <Logo />

//       {/* Main Content */}
//       <main className="flex flex-1 items-center justify-center px-4">
//         {/* Left Section */}
//         <div className="w-[600px] bg-white/10 border-2 border-white rounded-2xl shadow-inner backdrop-blur-lg p-8">
//           <h1 className="text-center text-blue-800 font-bold text-2xl mb-6">
//             Login to Your Account
//           </h1>

//           {!showOtpFields && (
//             <div className="flex flex-col items-center">
//               <input
//                 type="tel"
//                 name="PhoneNo"
//                 placeholder="Mobile number"
//                 className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
//               />
//               <button
//                 type="button"
//                 onClick={handleSendOtp}
//                 className="w-full h-12 bg-green-600 text-white rounded-lg font-medium mb-6"
//               >
//                 SEND OTP
//               </button>
//             </div>
//           )}

//           {showOtpFields && (
//             <div>
//               <div className="flex justify-center mb-6">
//                 {/* Diamond-shaped OTP fields */}
//                 {[...Array(6)].map((_, index) => (
//                   <div
//                     key={index}
//                     className="w-10 h-10 mx-1 bg-gradient-to-r from-blue-500 to-green-500 clip-path-diamond flex justify-center items-center"
//                   >
//                     <input
//                       type="text"
//                       maxLength="1"
//                       className="w-full h-full bg-transparent text-white text-center font-bold text-xl outline-none"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <div className="flex justify-between w-full">
//                 <button
//                   className="text-sm text-blue-600 underline"
//                   onClick={() => setShowOtpFields(false)} // Allow resetting
//                 >
//                   Resend OTP
//                 </button>
//                 <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium">
//                   Verify OTP
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Right Section */}
//         <div className="w-[400px] text-center mx-4">
//           <h1 className="text-blue-800 font-bold text-3xl mb-4">
//             Lorem ipsum dolor sit amet
//           </h1>
//           <p className="text-gray-500 text-lg mb-6">
//             consectetur adipiscing elit. Suspendisse sed <br />
//             urna in justo euismod condimentum.
//           </p>
//           <Image
//             src="/images/LoginImage.png"
//             alt="Login Illustration"
//             width={300}
//             height={250}
//             className="mt-6"
//           />
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

//The aobove one is perfect, but the email login is not there 

// import { useState } from "react";
// import Image from "next/image";
// import Footer from "../components/Footer";
// import Logo from "../components/Logo";

// export default function Login() {
//   const [isOtpLogin, setIsOtpLogin] = useState(true); // Toggle between OTP and Username/Password login
//   const [showOtpFields, setShowOtpFields] = useState(false); // Toggle OTP fields visibility

//   const handleSendOtp = () => {
//     setShowOtpFields(true);
//   };

//   const handleSwitchToUsernameLogin = () => {
//     setIsOtpLogin(false); // Switch to username/password login
//     setShowOtpFields(false); // Reset OTP fields
//   };

//   const handleSwitchToOtpLogin = () => {
//     setIsOtpLogin(true); // Switch to OTP-based login
//     setShowOtpFields(false); // Reset OTP fields
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-cyan-200">
//       {/* Reusable Logo */}
//       <Logo />

//       {/* Main Content */}
//       <main className="relative flex flex-1 items-center justify-center px-4">
//         <div
//           className={`flex w-full justify-center items-center transition-transform duration-700 ${
//             isOtpLogin ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           {/* Left Section (OTP or Username Form) */}
//           <div
//             className={`w-[600px] bg-white/10 border-2 border-white rounded-2xl shadow-inner backdrop-blur-lg p-8 transition-opacity duration-500 ${
//               isOtpLogin ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <h1 className="text-center text-blue-800 font-bold text-2xl mb-6">
//               Login to Your Account
//             </h1>
//             {!showOtpFields && (
//               <div className="flex flex-col items-center">
//                 <input
//                   type="tel"
//                   name="PhoneNo"
//                   placeholder="Mobile number"
//                   className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
//                 />
//                 <button
//                   type="button"
//                   onClick={handleSendOtp}
//                   className="w-full h-12 bg-green-600 text-white rounded-lg font-medium mb-6"
//                 >
//                   SEND OTP
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleSwitchToUsernameLogin}
//                   className="text-sm text-blue-600 underline"
//                 >
//                   Login using Username/Password
//                 </button>
//               </div>
//             )}

//             {showOtpFields && (
//               <div>
//                 <div className="flex justify-center mb-6">
//                   {/* Diamond-shaped OTP fields */}
//                   {[...Array(6)].map((_, index) => (
//                     <div
//                       key={index}
//                       className="w-10 h-10 mx-1 bg-gradient-to-r from-blue-500 to-green-500 clip-path-diamond flex justify-center items-center"
//                     >
//                       <input
//                         type="text"
//                         maxLength="1"
//                         className="w-full h-full bg-transparent text-white text-center font-bold text-xl outline-none"
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex justify-between w-full">
//                   <button
//                     className="text-sm text-blue-600 underline"
//                     onClick={() => setShowOtpFields(false)}
//                   >
//                     Resend OTP
//                   </button>
//                   <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium">
//                     Verify OTP
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right Section */}
//           <div
//             className={`w-[400px] text-center mx-4 transition-transform duration-700 ${
//               isOtpLogin ? "translate-x-0" : "-translate-x-full"
//             }`}
//           >
//             <h1 className="text-blue-800 font-bold text-3xl mb-4">
//             Quick and Secure Access with OTP
//             </h1>
//             <p className="text-gray-500 text-lg mb-6">
//             Enter your mobile number to receive a 
//             <br /> 
//             <b>One-Time Password (OTP)</b>. 
//             <br />
//             It's fast, simple, and keeps your account safe.
//             </p>
//             <Image
//               src="/images/LoginImage.png"
//               alt="Login Illustration"
//               width={300}
//               height={250}
//               className="mt-6"
//             />
//           </div>
//         </div>

//         <div
//           className={`absolute flex w-full justify-center items-center transition-transform duration-700 ${
//             !isOtpLogin ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {/* Username/Password Form */}
//           <div className="w-[600px] bg-white/10 border-2 border-white rounded-2xl shadow-inner backdrop-blur-lg p-8">
//             <h2 className="text-center text-blue-800 font-bold text-2xl mb-6">
//               Login with Username/Password
//             </h2>
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
//             />
//             <div className="flex justify-between w-full px-1 mb-6">
//               <a href="#" className="text-gray-700 underline text-sm">
//                 Forgot Password?
//               </a>
//               <button
//                 onClick={handleSwitchToOtpLogin}
//                 className="text-sm text-blue-600 underline"
//               >
//                 Login using OTP
//               </button>
//             </div>
//             <button className="w-full h-12 bg-green-600 text-white rounded-full font-medium">
//               Sign In
//             </button>
//           </div>

//           {/* Image Section */}
//           <div className="w-[400px] text-center mx-4">
//             <h1 className="text-blue-800 font-bold text-3xl mb-4">
//             Sign In with Your Credentials
//             </h1>
//             <p className="text-gray-500 text-lg mb-6">
//             Use your username and password to securely access your account. <br />
//              <b>Forgot your password?</b>
//              <br />
//             Reset it easily and get back on track.
//             </p>
//             <Image
//               src="/images/LoginImage.png"
//               alt="Login Illustration"
//               width={300}
//               height={250}
//               className="mt-6"
//             />
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

//The above is correct, but now trying to implement the login function for all users properlt according to the DR.Sindu thing 


// // pages/login.js
// import { useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import Logo from "../components/Logo"; // Reusable Logo
// import Footer from "../components/Footer"; // Reusable Footer

// export default function Login() {
//   const router = useRouter();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     // Mock API Call
//     const userType = await mockLogin(username, password); // Replace with actual API call

//     if (userType) {
//       // Simulated user data for testing
//       const userData = {
//         username,
//         userType,
//         department: userType === "DepartmentAdmin" ? "Cardiology" : null, // Example department
//       };

//       // Redirect to the dynamic dashboard test page
//       router.push({
//         pathname: `/dashboard/${userType.toLowerCase()}`,
//         query: userData,
//       });
//     } else {
//       setError("Invalid username or password.");
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-cyan-100">
//       {/* Logo */}
//       <Logo />

//       {/* Login Form */}
//       <main className="flex flex-1 items-center justify-center px-4">
//         <div className="w-[600px] bg-white rounded-2xl shadow-lg p-8">
//           <h1 className="text-2xl font-bold text-blue-800 text-center mb-6">
//             Login to Your Account
//           </h1>

//           {error && (
//             <p className="text-red-600 text-center mb-4">{error}</p>
//           )}

//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full h-12 border-b border-gray-400 mb-6 px-4 focus:outline-none focus:border-blue-600"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full h-12 border-b border-gray-400 mb-6 px-4 focus:outline-none focus:border-blue-600"
//           />

//           <button
//             onClick={handleLogin}
//             className="w-full h-12 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
//           >
//             Login
//           </button>

//           <div className="flex justify-between mt-4">
//             <a href="/forgot-password" className="text-blue-600 text-sm underline">
//               Forgot Password?
//             </a>
//             <a href="/register" className="text-blue-600 text-sm underline">
//               Register
//             </a>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

// // Mock API Call for Login (Replace with actual API)
// async function mockLogin(username, password) {
//   const mockDatabase = {
//     "admin1": { password: "pass123", userType: "InstitutionAdmin" },
//     "deptAdmin": { password: "pass123", userType: "DepartmentAdmin" },
//     "coord1": { password: "pass123", userType: "Coordinator" },
//     "hcp1": { password: "pass123", userType: "HealthcareProfessional" },
//     "patient1": { password: "pass123", userType: "Patient" },
//   };

//   return mockDatabase[username]?.password === password
//     ? mockDatabase[username].userType
//     : null;
// }

//Above code is good, but now trying mock login using json 

// import { useState } from "react";
// import { useRouter } from "next/router";
// import mockUsers from "../../public/mockUsers.json";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleLogin = () => {
//     const user = mockUsers.find(
//       (u) => u.username === username && u.password === password
//     );
//     if (user) {
//       const { role, institutionId, department } = user;
//       if (role === "institutionAdmin") {
//         router.push(`/dashboard/instAdmin/${institutionId}`);
//       } else if (role === "departmentAdmin") {
//         router.push(`/dashboard/deptAdmin/${institutionId}/${department}`);
//       } else {
//         setError("Invalid role.");
//       }
//     } else {
//       setError("Invalid username or password.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
//       {error && <p className="text-red-600 mb-4">{error}</p>}
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="w-80 p-2 mb-4 border rounded-lg"
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-80 p-2 mb-4 border rounded-lg"
//       />
//       <button
//         onClick={handleLogin}
//         className="w-80 p-2 bg-blue-600 text-white rounded-lg"
//       >
//         Login
//       </button>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [mockUsers, setMockUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Fetch mock users from the JSON file
  useEffect(() => {
    const fetchMockUsers = async () => {
      const response = await fetch("/mockUsers.json");
      const data = await response.json();
      setMockUsers(data);
    };
    fetchMockUsers();
  }, []);

  const handleLogin = () => {
    const user = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      const { role, institutionId } = user;

      // Redirect based on the role and institution
      if (role === "institutionAdmin") {
        router.push(`/dashboard/instAdmin/${institutionId}`);
      } else if (role === "departmentAdmin") {
        router.push(`/dashboard/deptAdmin/${institutionId}`);
      } else {
        setError("Invalid role or no dashboard available for this role.");
      }
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-80 p-2 mb-4 border rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-80 p-2 mb-4 border rounded-lg"
      />
      <button
        onClick={handleLogin}
        className="w-80 p-2 bg-blue-600 text-white rounded-lg"
      >
        Login
      </button>
    </div>
  );
}
