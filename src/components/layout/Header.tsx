// src/components/layout/Header.tsx
'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import { useSearchStore } from '@/store/searchStore';
import { allProducts, Product } from '@/data/products';
import Image from 'next/image';

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`transition-colors hover:text-blue-600 ${isActive ? 'font-semibold text-blue-600' : 'text-gray-600'}`}
    >
      {children}
    </Link>
  );
};

interface HeaderProps {
  onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { items } = useCartStore();
  const { searchTerm, setSearchTerm } = useSearchStore();
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setSearchTerm('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setSearchTerm]);

  useEffect(() => {
    if (searchTerm) {
      const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  // ახალი useEffect, რომელიც ხურავს მობილურის მენიუს სქროლვისას
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  const headerClasses = 'fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl bg-white/80 backdrop-blur-md rounded-full shadow-lg z-50 h-16';

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="PetShop Homepage">
              <Image src="/logo.png" alt="ზოომაღაზია" width={140} height={40} className="h-10 w-auto" priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <NavLink href="/">მთავარი</NavLink>
            <NavLink href="/products">პროდუქცია</NavLink>
            <NavLink href="/about">ჩვენს შესახებ</NavLink>
            <NavLink href="/contact">კონტაქტი</NavLink>
          </nav>

          {/* Desktop Search & Cart */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            <div ref={searchContainerRef} className="relative">
              <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-48 transition-all duration-300 focus-within:w-56">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" placeholder="ძებნა..." className="bg-transparent w-full ml-2 focus:outline-none text-sm text-gray-700" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
              {searchResults.length > 0 && (
                <div className="absolute mt-2 w-full max-w-lg -right-1/2 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
                  <ul className="divide-y divide-gray-200">
                    {searchResults.map(product => (
                      <li key={product.id}>
                        <Link href={`/products/${product.id}`} className="flex items-center p-3 hover:bg-gray-50" onClick={() => setSearchTerm('')}>
                          <Image src={product.imageUrl} alt={product.name} width={40} height={40} className="rounded-md object-cover" />
                          <div className="ml-3">
                            <p className="font-semibold text-gray-800 text-sm">{product.name}</p>
                            <p className="text-blue-600 text-sm">{product.price.toFixed(2)} ₾</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <button aria-label="Shopping Cart" onClick={onCartClick} className="relative text-gray-500 transition-colors hover:text-blue-600 p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              {totalItems > 0 && (<span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">{totalItems}</span>)}
            </button>
          </div>
          
          {/* Mobile Menu Button & Cart */}
          <div className="md:hidden flex items-center space-x-2">
            <button aria-label="Shopping Cart" onClick={onCartClick} className="relative text-gray-500 transition-colors hover:text-blue-600 p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              {totalItems > 0 && (<span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">{totalItems}</span>)}
            </button>
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full hover:bg-gray-100" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden">
          <div className="flex justify-end mb-8">
             <button onClick={() => setMobileMenuOpen(false)} className="p-2" aria-label="Close menu">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
             </button>
          </div>
          {/* Mobile Search */}
          <div ref={searchContainerRef} className="relative mb-8">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="პროდუქტის ძებნა..." className="bg-transparent w-full ml-3 focus:outline-none text-base text-gray-700" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            {searchResults.length > 0 && (
              <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {searchResults.map(product => (
                    <li key={product.id}>
                      <Link href={`/products/${product.id}`} className="flex items-center p-3 hover:bg-gray-50" onClick={() => { setSearchTerm(''); setMobileMenuOpen(false); }}>
                        <Image src={product.imageUrl} alt={product.name} width={40} height={40} className="rounded-md object-cover" />
                        <div className="ml-3">
                          <p className="font-semibold text-gray-800 text-sm">{product.name}</p>
                          <p className="text-blue-600 text-sm">{product.price.toFixed(2)} ₾</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <nav className="flex flex-col items-center space-y-8 text-lg">
            <NavLink href="/" onClick={() => setMobileMenuOpen(false)}>მთავარი</NavLink>
            <NavLink href="/products" onClick={() => setMobileMenuOpen(false)}>პროდუქცია</NavLink>
            <NavLink href="/about" onClick={() => setMobileMenuOpen(false)}>ჩვენს შესახებ</NavLink>
            <NavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>კონტაქტი</NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;