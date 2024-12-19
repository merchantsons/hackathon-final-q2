'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, ShoppingCart, User } from 'lucide-react'
import { integralCF } from '@/app/ui/fonts'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="w-full bg-black shadow-sm">
      {/* Top Banner */}
      <div className='flex flex-row text-[1.9vmin] bg-black text-white items-center py-2 lg:text-[1.5vmin] font-poppins justify-self-center lg:ml-[45vmin]'>
        {/* Centered Text */}
        <div className='flex-1'>
          Sign up and get 20% off your first order.
          <a className='hover:text-gray-400 cursor-pointer'>Sign Up Now</a>
        </div>

        {/* X Icon on the Right with reduced space */}
        <div className="hidden lg:block ml-[5vmin] lg:ml-[42vmin]">
          <img src="/images/x.png" alt="close" className="cursor-pointer w-[1.5vmin]" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-7 w-7" />
            </button>

            {/* Logo */}
            <div className='flex-1 left-4'>
              <Link href="/" className={cn("text-3xl lg:text-3xl font-bold", integralCF.className)}>SHOP.CO</Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/products" className="hover:text-gray-600">Shop</Link>
              <Link href="#" className="hover:text-gray-600">On Sale</Link>
              <Link href="#" className="hover:text-gray-600">New Arrivals</Link>
              <Link href="#" className="hover:text-gray-600">Brands</Link>
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-full focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="lg:hidden">
                <Search className="h-6 w-6" />
              </button>
              <Link href="/cart">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <Link href="#">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute inset-0 bg-black text-white transform transition-transform duration-700 ease-in-out lg:hidden z-50",
          isMenuOpen ? "translate-x-0 block" : "translate-x-full hidden",  // Add "block" and "hidden"
          "h-full min-h-screen"
        )}
      >
        <div className="p-4">
          <button
            className="absolute right-4 top-4 px-2 py-1 text-[3vmin] border-2 border-gray-500 text-gray-500"
            onClick={() => setIsMenuOpen(false)}
          >
            X
          </button>

          {/* Logo in the mobile menu */}
          <Link
            href="/"
            className={cn("text-3xl font-bold mb-6", integralCF.className)}
          >
            SHOP.CO
          </Link>

          <nav className="mt-12 space-y-6">
            <Link
              href="/products"
              className="block text-lg hover:bg-gray-600 px-2 py1"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="#"
              className="block text-lg hover:bg-gray-600 px-2 py1"
              onClick={() => setIsMenuOpen(false)}
            >
              On Sale
            </Link>
            <Link
              href="#"
              className="block text-lg hover:bg-gray-600 px-2 py1"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              href="/products"
              className="block text-lg hover:bg-gray-600 px-2 py1"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </Link>
          </nav>

          {/* Mobile Search */}
          <div className="mt-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-full focus:outline-none text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Bottom Icons with Border */}
        <div className="absolute bottom-0 w-full bg-black text-white py-4 border-t border-gray-700 flex justify-around items-center">
          <Link href="/cart">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <Link href="#">
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>

    </div>
  )
}
