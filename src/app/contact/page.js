"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, CheckCircle2, AlertCircle } from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // 模擬表單提交
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#d80c2c]/5 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Have a project in mind? Let's discuss how we can help bring your vision to life
            </motion.p>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageCircle className="w-6 h-6" />,
                  title: "Chat With Us",
                  description: "Get instant support via chat",
                  action: "Start Chat",
                  link: "#"
                },
                {
                  icon: <Calendar className="w-6 h-6" />,
                  title: "Book a Meeting",
                  description: "Schedule a video consultation",
                  action: "Book Now",
                  link: "#"
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: "Call Us",
                  description: "Speak with our team directly",
                  action: "Call Now",
                  link: "tel:+60123456789"
                }
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex p-3 bg-[#d80c2c]/10 rounded-full text-[#d80c2c] mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <a
                    href={option.link}
                    className="inline-flex items-center text-[#d80c2c] hover:underline"
                  >
                    {option.action}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Phone className="w-6 h-6 text-[#d80c2c]" />,
                      title: "Phone",
                      info: "+60 12-345 6789",
                      subInfo: "Mon-Fri 9am-6pm"
                    },
                    {
                      icon: <Mail className="w-6 h-6 text-[#d80c2c]" />,
                      title: "Email",
                      info: "contact@techcraft.dev",
                      subInfo: "Online support"
                    },
                    {
                      icon: <MapPin className="w-6 h-6 text-[#d80c2c]" />,
                      title: "Office",
                      info: "123 Business Street",
                      subInfo: "Kuala Lumpur, Malaysia"
                    },
                    {
                      icon: <Clock className="w-6 h-6 text-[#d80c2c]" />,
                      title: "Working Hours",
                      info: "Monday - Friday",
                      subInfo: "9:00 AM - 6:00 PM"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="p-3 bg-[#d80c2c]/5 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.info}</p>
                        <p className="text-sm text-gray-500">{item.subInfo}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                      <a
                        key={social}
                        href={`#${social}`}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d80c2c]/5 
                                 text-[#d80c2c] hover:bg-[#d80c2c] hover:text-white transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <i className={`fab fa-${social}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d80c2c] focus:border-[#d80c2c]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d80c2c] focus:border-[#d80c2c]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d80c2c] focus:border-[#d80c2c]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d80c2c] focus:border-[#d80c2c]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d80c2c] focus:border-[#d80c2c]">
                      <option value="">Select a service</option>
                      <option value="website">Website Design</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="booking">E-booking System</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#d80c2c] focus:border-[#d80c2c]"
                    ></textarea>
                  </div>

                  {formStatus.message && (
                    <div className={`p-4 rounded-lg ${
                      formStatus.type === 'success' 
                        ? 'bg-green-50 text-green-700' 
                        : 'bg-red-50 text-red-700'
                    }`}>
                      <div className="flex items-center gap-2">
                        {formStatus.type === 'success' ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <AlertCircle className="w-5 h-5" />
                        )}
                        {formStatus.message}
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#d80c2c] text-white hover:bg-[#d80c2c]/90 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How quickly do you respond to inquiries?",
                  a: "We aim to respond to all inquiries within 24 hours during business days."
                },
                {
                  q: "Do you offer free consultations?",
                  a: "Yes, we offer free initial consultations to discuss your project requirements."
                },
                {
                  q: "What are your payment terms?",
                  a: "We offer flexible payment terms with an initial deposit and milestone-based payments."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7722822693026!2d101.69165937573823!3d3.1488909532698365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c1f%3A0x9e3afdd17c8a9056!2sKuala%20Lumpur%20City%20Centre%2C%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1709799046043!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
} 