// // pages/Landing.js
// import { useRouter } from "next/router";

// export default function Landing() {
  

//   const handleRegister = () => {
//     router.push("/register");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-100">
//       <h1 className="text-4xl font-bold text-blue-800 mb-10">
//         Welcome to MDAER Portal
//       </h1>
//       <div className="flex gap-8">
//         <button
//           onClick={handleLogin}
//           className="px-8 py-4 bg-blue-600 text-white font-medium text-xl rounded-lg hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//         <button
//           onClick={handleRegister}
//           className="px-8 py-4 bg-green-600 text-white font-medium text-xl rounded-lg hover:bg-green-700 transition"
//         >
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }


// pages/landing.js
import { useRouter } from "next/router";

export default function Landing() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };
  const handleRegister = (role) => {
    router.push(`/register?role=${role}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-100">
      <h1 className="text-4xl font-bold text-blue-800 mb-10">
        Welcome to MDAER Portal
      </h1>
      <div className="flex gap-8">
       <button
          onClick={handleLogin}
          className="px-8 py-4 bg-blue-600 text-white font-medium text-xl rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
        <button
          onClick={() => handleRegister("healthcare")}
          className="px-8 py-4 bg-blue-600 text-white font-medium text-xl rounded-lg hover:bg-blue-700 transition"
        >
          Register as Healthcare Professional
        </button>
        <button
          onClick={() => handleRegister("patient")}
          className="px-8 py-4 bg-green-600 text-white font-medium text-xl rounded-lg hover:bg-green-700 transition"
        >
          Register as Patient
        </button>
      </div>
    </div>
  );
}
