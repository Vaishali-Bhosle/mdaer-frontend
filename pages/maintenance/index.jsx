import Image from "next/image";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

export default function Maintenance() {
  return (
    <main className="relative flex flex-col justify-between items-center w-full h-screen ">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Background_Image.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div>
        {/* Empty Div for spacing */}
      </div>
      {/* Logo Section */}
      {/* <div className="absolute top-5 left-5 flex items-center gap-3">
        <Image
          src="/images/Nimhans_logo.png"
          alt="NIMHANS Logo"
          width={60}
          height={60}
          className="w-16 h-16"
        />
        <div className="text-black">
          <p className="font-bold text-lg">NIMHANS</p>
          <p className="text-xs">An Institute of National Importance</p>
        </div>
      </div> */}
      <Logo/>

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Icons */}
        <div className="flex gap-10 mt-5">
          <div className="bg-cyan-300 bg-opacity-25 rounded-full w-24 h-24 flex items-center justify-center">
            <Image
              src="/images/tool_icon.svg"
              alt="Tool Icon"
              width={50}
              height={50}
            />
          </div>
          <div className="bg-cyan-300 bg-opacity-25 rounded-full w-24 h-24 flex items-center justify-center">
            <Image
              src="/images/Frown_icon.svg"
              alt="Frown Icon"
              width={50}
              height={50}
            />
          </div>
          <div className="bg-cyan-300 bg-opacity-25 rounded-full w-24 h-24 flex items-center justify-center">
            <Image
              src="/images/Settings_icon.svg"
              alt="Settings Icon"
              width={50}
              height={50}
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mt-8">Under Maintenance</h1>
        <p className="text-lg mt-4">
          Our website is under maintenance. We will be back shortly.
        </p>

        {/* Coffee Section */}
        <div className="flex items-center gap-3 mt-6">
          <Image
            src="/images/Coffee.png"
            alt="Coffee Icon"
            width={60}
            height={60}
          />
          <p className="text-lg">
            Please Sip a Cup of Coffee/Tea until we are back.
          </p>
        </div>
      </div>

         {/* Footer */}
         <Footer />
    </main>
  );
}
