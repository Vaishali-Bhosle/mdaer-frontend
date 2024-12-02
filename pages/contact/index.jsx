import Footer from "../components/Footer"; // Reusable Footer
import Logo from "../components/Logo"; // Reusable Logo Component

export default function Contact() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-cyan-100 to-white">
      {/* Reusable Logo */}
      <Logo />

      {/* Decorative Elements */}
      <div>
        {/* Top Right Decoration (Semicircle with Line) */}
        <div className="absolute top-[-50px] right-[-50px]">
          <img
            src="/images/OvalTop.png"
            alt="Top Semicircle"
            className="w-[300px] md:w-[400px]"
          />
          <img
            src="/images/Deco.png"
            alt="Top Line"
            className="absolute top-[50px] left-[50px] w-[350px] md:w-[300px]"
          />
        </div>

        {/* Bottom Left Decoration (Semicircle with Line) */}
        <div className="absolute bottom-[-1px] left-[-50px]">
          <img
            src="/images/OvalBottom.png"
            alt="Bottom Semicircle"
            className="w-[300px] md:w-[400px]"
          />
          <img
            src="/images/DecoBottom.png"
            alt="Bottom Line"
            className="absolute top-[60px] right-[30px] w-[350px] md:w-[350px]"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center pt-24 md:pt-32">
        <div className="w-full max-w-4xl bg-white/10 border-2 border-white rounded-2xl shadow-inner backdrop-blur-lg p-8 mx-4">
          <h1 className="text-center text-black font-extrabold text-3xl md:text-4xl mb-6">
            Contact Us
          </h1>
          <p className="text-center text-black/70 text-lg md:text-xl mb-10">
            Please feel free to give your valuable feedback or drop a message.
            We will get back to you and integrate your advice into our existing
            systems immediately.
          </p>
          <form className="flex flex-col items-center">
            <div className="w-full flex flex-wrap justify-between mb-6">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="w-[48%] h-14 bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none pl-4 text-black/70 text-lg mb-6"
              />
              <input
                type="email"
                name="Email"
                placeholder="Email (optional)"
                className="w-[48%] h-14 bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none pl-4 text-black/70 text-lg mb-6"
              />
            </div>
            <div className="w-full flex flex-wrap justify-between mb-6">
              <input
                type="tel"
                name="PhoneNo"
                placeholder="Mobile number"
                className="w-[48%] h-14 bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none pl-4 text-black/70 text-lg mb-6"
              />
              <input
                type="text"
                name="Designation"
                placeholder="Designation"
                className="w-[48%] h-14 bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none pl-4 text-black/70 text-lg mb-6"
              />
            </div>
            <textarea
              name="message"
              placeholder="Write your Message Here...."
              className="w-full h-32 bg-transparent border-b border-gray-500 focus:border-blue-500 outline-none pl-4 pt-2 text-black/70 text-lg mb-10"
            />
            <div className="flex items-center  w-full mb-10">
              <input
                type="checkbox"
                name="check"
                className="w-6 h-6 bg-green-600 border-none rounded mr-4"
              />
              <p className="text-black/70 text-sm">
                I have read and accept the Terms of{" "}
                <span className="font-bold">Service & Privacy Policy</span>
              </p>
            </div>
            <button
              type="submit"
              className="w-40 h-12 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
