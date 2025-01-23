"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: "Website Design", href: "website-design" },
    { name: "E-commerce", href: "ecommerce" },
    { name: "E-booking", href: "ebooking" }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      } bg-white `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={250}
              height={80}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 transition-colors text-gray-700 hover:text-[#d80c2c] text-base"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-lg"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-[#d80c2c]/5 hover:text-[#d80c2c] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Links */}
            {["Portfolio", "About", "Contact"].map((item) => (
              <Link 
                key={item}
                href={`${item.toLowerCase()}`}
                className="text-gray-700 hover:text-[#d80c2c] transition-colors text-base"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              className="hidden md:flex bg-[#d80c2c] text-white hover:bg-[#d80c2c]/90 text-base"
            >
              Get Started
            </Button>
            <Button 
              variant="ghost" 
              className="md:hidden text-gray-700"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 