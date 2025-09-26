'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  // Check auth state on mount and client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    }
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle logout
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('registerName');
      localStorage.removeItem('registerEmail');
      localStorage.removeItem('loginEmail');
    }
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="bg-[#E2E2E2] text-black shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              PawCare
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/services" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              SERVICES
            </Link>
            <Link href="/adoption" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              ADOPTION
            </Link>
            <Link href="/blog" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              BLOG
            </Link>
            <Link href="/shop" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              SHOP
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/profile" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  PROFILE
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  LOGOUT 
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  LOGIN
                </Link>
                <Link href="/register" className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  REGISTER
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-expanded={isOpen}
              aria-label="Toggle menu"  
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sidebar) */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-blue-600 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col space-y-2 px-4 py-2">
          <Link
            href="/services"
            className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            SERVICES
          </Link>
          <Link
            href="/adoption"
            className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            ADOPTION
          </Link>
          <Link
            href="/blog"
            className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            BLOG
          </Link>
          <Link
            href="/shop"
            className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            SHOP
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                href="/profile"
                className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={toggleMenu}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-left hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col space-y-2 mx-auto w-full text-center">
              <Link
                href="/login"
                className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium border border-white"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium border border-white"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}