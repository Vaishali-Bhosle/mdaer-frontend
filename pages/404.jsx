import Footer from "./components/Footer";
import Logo from "./components/Logo"; // Import reusable Logo component

export default function ErrorPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-cyan-100 to-white">
      {/* Reusable Logo */}
      <Logo />

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center text-center relative">
        {/* "404" Design */}
        <div className="relative flex items-center justify-center">
          {/* Green "4" */}
          <div className="text-green-600 font-extrabold text-[150px] md:text-[200px]">
            4
          </div>
          {/* Circle "0" */}
          <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-4">
            <div className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] bg-white rounded-full"></div>
          </div>
          {/* Blue "4" */}
          <div className="text-blue-600 font-extrabold text-[150px] md:text-[200px]">
            4
          </div>
        </div>

        {/* "Something Went Wrong!" Text */}
        <h2 className="text-blue-600 font-bold text-2xl md:text-3xl mt-10">
          Something went wrong!
        </h2>

        {/* "Go Back" Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-10 px-10 py-4 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition"
        >
          Go Back
        </button>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
