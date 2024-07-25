import navImage from "@/public/michisolana-LOGO-sm.webp";
export default function Nav() {
  return (
    <div className="w-full h-fit py-[20px] flex justify-between items-center">
      <div className="w-[120px] h-[120px] rounded-full border-4 border-main-brown overflow-hidden">
        <img src={navImage.src} alt="Michi" className="w-full h-full" />
      </div>
      <h1 className="text-[29px] font-[900] leading-[29px] text-main-brown">
        $HUNGY MEME MAKER
      </h1>
    </div>
  );
}
