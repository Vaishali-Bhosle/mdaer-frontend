import Image from "next/image";
import Footer from "../components/Footer";
import Logo from "../components/Logo"; // Import the reusable Logo component

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-cyan-200">
      {/* Reusable Logo */}
      <Logo />

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-4">
        {/* Left Section */}
        <div className="w-[600px] bg-white/10 border-2 border-white rounded-2xl shadow-inner backdrop-blur-lg p-8">
          <h1 className="text-center text-blue-800 font-bold text-2xl mb-6">
            Login to Your Account
          </h1>
          <div className="flex flex-col items-center">
            <input
              type="tel"
              name="PhoneNo"
              placeholder="Mobile number"
              className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
            />
            <button
              type="button"
              className="w-full h-12 bg-green-600 text-white rounded-lg font-medium mb-6"
            >
              SEND OTP
            </button>
            <input
              type="text"
              name="Otp"
              placeholder="Enter the OTP"
              className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
            />
            <div className="flex justify-between w-full px-1 mb-6">
              <a href="/register" className="text-gray-700 underline text-sm">
                Don’t Have an Account?
              </a>
              <a href="#" className="text-gray-700 underline text-sm">
                Resend OTP
              </a>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-green-600 text-white rounded-full font-medium"
            >
              SIGN IN
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[400px] text-center mx-4">
          <h1 className="text-blue-800 font-bold text-3xl mb-4">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            consectetur adipiscing elit. Suspendisse sed <br />
            urna in justo euismod condimentum.
          </p>
          <Image
            src="/images/LoginImage.png"
            alt="Login Illustration"
            width={300}
            height={250}
            className="mt-6"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
