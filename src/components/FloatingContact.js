"use client"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const socialButtons = [
    {
      name: "WhatsApp",
      icon: <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />,
      href: "https://wa.me/60123456789",
      bgColor: "bg-[#25D366]"
    },
    {
      name: "Messenger",
      icon: <Image src="/messenger.svg" alt="Messenger" width={24} height={24} />,
      href: "https://m.me/yourpage",
      bgColor: "bg-[#0099FF]"
    },
    {
      name: "Instagram",
      icon: <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />,
      href: "https://instagram.com/yourpage",
      bgColor: "bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976]"
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <>
            {socialButtons.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2"
              >
                <span className="px-3 py-2 bg-white rounded-lg shadow-lg text-sm">
                  {social.name}
                </span>
                <div className={`flex items-center justify-center w-12 h-12 ${social.bgColor} rounded-full shadow-lg hover:shadow-xl transition-shadow`}>
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all ${
          isOpen ? 'bg-gray-800' : 'bg-[#d80c2c]'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </div>
  )
} 