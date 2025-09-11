// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* About Section */}
        <div className="lg:col-span-1">
          <Link href="/" className="text-2xl font-bold">
            <Image src="/logo.png" alt="ზოომაღაზია" width={140} height={40} className="h-10 w-auto" priority />
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            ყველაფერი თქვენი შინაური ცხოველისთვის. უმაღლესი ხარისხის პროდუქცია და სერვისი.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold tracking-wider">სწრაფი ბმულები</h3>
          <nav className="mt-4 flex flex-col space-y-3">
            <Link href="/products" className="text-gray-400 transition-colors hover:text-white">
              პროდუქცია
            </Link>
            <Link href="/about" className="text-gray-400 transition-colors hover:text-white">
              ჩვენს შესახებ
            </Link>
            <Link href="/contact" className="text-gray-400 transition-colors hover:text-white">
              კონტაქტი
            </Link>
            <Link href="/faq" className="text-gray-400 transition-colors hover:text-white">
              FAQ
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold tracking-wider">კონტაქტი</h3>
          <div className="mt-4 flex flex-col space-y-3 text-sm text-gray-400">
            <p>თბილისი, საქართველო</p>
            <p>info@petshop.ge</p>
            <p>+995 123 456 789</p>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold tracking-wider">გამოიწერეთ სიახლეები</h3>
          <p className="mt-4 text-sm text-gray-400">მიიღეთ ინფორმაცია ფასდაკლებებსა და ახალ პროდუქტებზე.</p>
          <form className="mt-4 flex">
            <input 
              type="email" 
              placeholder="თქვენი იმეილი" 
              className="w-full rounded-l-md border-0 bg-white/10 px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="rounded-r-md bg-blue-600 px-4 py-2 font-semibold transition-colors hover:bg-blue-700"
            >
              →
            </button>
          </form>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PetShop Portfolio. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;