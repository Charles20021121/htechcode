"use client"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#d80c2c] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              TechCraft
            </h3>
            <p className="text-sm text-white/80">
              Empowering businesses through innovative digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-white/80 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Mail size={16} />
                <span>contact@techcraft.dev</span>
              </li>
              <li className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Facebook size={20} />, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/80">
          <p>© 2024 TechCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 