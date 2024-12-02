import Image from "next/image";

export default function Logo() {
  return (
    <div className="absolute top-5 left-5">
      <Image
        src="/images/NimhansLogo.png"
        alt="NIMHANS Logo"
        width={150}
        height={50}
      />
    </div>
  );
}
