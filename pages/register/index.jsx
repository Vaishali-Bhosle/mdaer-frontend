import Image from "next/image";
import Footer from "../components/Footer"; // Reusable Footer
import Logo from "../components/Logo"; // Reusable Logo Component

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen bg-cyan-200">
      {/* Reusable Logo */}
      <Logo />

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center">
        {/* Left Section */}
        <div className="w-[600px] bg-white/10 border-2 border-white rounded-2xl shadow-inner backdrop-blur-lg p-8 mx-4">
          <h1 className="text-center text-blue-800 font-bold text-2xl mb-6">
            Create Your Account
          </h1>
          <div className="flex flex-col items-center">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email (optional)"
              className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
            />
            <input
              type="text"
              name="Designation"
              placeholder="Designation"
              className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
            />
            <div className="flex w-full items-center justify-between mb-6">
              <input
                type="tel"
                name="PhoneNo"
                placeholder="Mobile number"
                className="w-[70%] h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5"
              />
              <button className="w-[25%] h-10 bg-green-600 text-white rounded-lg">
                SEND OTP
              </button>
            </div>
            <input
              type="text"
              name="Otp"
              placeholder="Enter the OTP"
              className="w-full h-10 border-b border-gray-500 focus:border-black outline-none bg-transparent text-black/70 pl-5 mb-6"
            />
            <div className="flex justify-between w-full px-1 mb-6">
              <a href="/login" className="text-gray-700 underline text-sm">
                Already Have an Account?
              </a>
              <a href="#" className="text-gray-700 underline text-sm">
                Resend OTP
              </a>
            </div>
            <div className="flex items-start w-full px-1 mb-6">
              <input
                type="checkbox"
                name="check"
                className="w-6 h-6 bg-green-600 mr-3"
              />
              <p className="text-gray-700 text-sm">
                I have read and accept the Terms of
                <br />
                <span className="font-medium">Service & Privacy Policy</span>
              </p>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-green-600 text-white rounded-full border-none font-medium"
            >
              CONTINUE
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
            src="/images/Register.png"
            alt="Register Illustration"
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
