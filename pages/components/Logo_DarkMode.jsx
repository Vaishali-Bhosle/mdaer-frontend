import Image from "next/image";

export default function Logo_DarkMode() {
  return (
          <div className="absolute top-5 left-5 flex items-center gap-3">
          <Image
            src="/images/Nimhans_logo.png"
            alt="NIMHANS Logo"
            width={60}
            height={60}
            className="w-16 h-16"
          />
          <div className="text-white">
            <p className="font-bold text-lg">NIMHANS</p>
            <p className="text-xs">An Institute of National Importance</p>
          </div>
        </div>
  );
}