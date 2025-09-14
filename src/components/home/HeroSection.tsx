// src/components/home/HeroSection.tsx
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section 
      className="relative flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/dzaglo1.jpg')" }} // აქ ვუთითებთ ჩვენს სურათს
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto flex h-[calc(100vh-80px)] max-h-[700px] min-h-[400px] flex-col items-center justify-center text-center text-white">
        <h1 className="font-herofont text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          საუკეთესო მეგობრისთვის <br />
          <span className="text-[#f2c90b]">საუკეთესო არჩევანი</span>
        </h1>
        <p className="font-herofont mt-6 max-w-2xl text-lg text-gray-300">
          აღმოაჩინეთ პრემიუმ ხარისხის საკვები, სათამაშოები და აქსესუარები.
        </p>
        <Link 
          href="/products" 
          className="mt-8 inline-block rounded-full bg-[#f2c90b] px-8 py-3 font-herofont text-white transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
        >
          პროდუქციის ნახვა
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;