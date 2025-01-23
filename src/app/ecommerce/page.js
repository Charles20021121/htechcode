"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ShoppingCart, ChevronDown, Package, Truck, Shield } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import * as Accordion from '@radix-ui/react-accordion'

export default function Ecommerce() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 top-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d80c2c]/10 via-purple-500/5 to-transparent" />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              className="grid grid-cols-12 h-full"
            >
              {[...Array(144)].map((_, i) => (
                <div key={i} className="border-r border-b border-[#d80c2c]" />
              ))}
            </motion.div>
          </div>

          {/* Content */}
          <div className="relative text-center px-4 sm:px-6 max-w-4xl mt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              E-commerce Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              Transform your business with our powerful online store solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg"
                className="bg-[#d80c2c] text-white hover:bg-[#d80c2c]/90 group"
              >
                Start Selling Online
                <ShoppingCart className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#d80c2c] text-[#d80c2c] hover:bg-[#d80c2c]/5"
              >
                View Demo Store
              </Button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Package className="w-6 h-6 text-[#d80c2c]" />,
                  title: "Easy Product Management",
                  description: "Simple and intuitive dashboard"
                },
                {
                  icon: <Truck className="w-6 h-6 text-[#d80c2c]" />,
                  title: "Shipping Integration",
                  description: "Multiple shipping options"
                },
                {
                  icon: <Shield className="w-6 h-6 text-[#d80c2c]" />,
                  title: "Secure Payments",
                  description: "Safe and reliable transactions"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#d80c2c] mb-4">
                Choose Your E-commerce Plan
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select the perfect plan to start your online business journey
              </p>
            </div>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "RM 3,999",
                  description: "Perfect for small businesses",
                  features: [
                    "Up to 100 Products",
                    "Basic Analytics",
                    "2 Payment Gateways",
                    "Email Support",
                    "Mobile Responsive",
                    "SSL Certificate"
                  ]
                },
                {
                  name: "Professional",
                  price: "RM 5,999",
                  description: "Ideal for growing businesses",
                  features: [
                    "Up to 500 Products",
                    "Advanced Analytics",
                    "Multiple Payment Gateways",
                    "Priority Support",
                    "Custom Domain",
                    "SEO Optimization"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "RM 8,999",
                  description: "For large scale operations",
                  features: [
                    "Unlimited Products",
                    "Custom Features",
                    "API Access",
                    "24/7 Support",
                    "Multi-language Support",
                    "Advanced Security"
                  ]
                }
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                    plan.popular ? 'ring-2 ring-[#d80c2c]' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-[#d80c2c] text-white px-4 py-1 text-sm">
                      Popular
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="text-3xl font-bold text-[#d80c2c] mb-6">{plan.price}</div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-[#d80c2c]" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        plan.popular
                          ? 'bg-[#d80c2c] hover:bg-[#d80c2c]/90 text-white'
                          : 'border-2 border-[#d80c2c] text-[#d80c2c] hover:bg-[#d80c2c]/5'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Get Started
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Succeed Online
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our e-commerce solutions come packed with powerful features to help you grow your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Product Management",
                  description: "Easy to use interface for managing your products, inventory, and categories"
                },
                {
                  title: "Payment Integration",
                  description: "Support for multiple payment gateways including credit cards and e-wallets"
                },
                {
                  title: "Order Management",
                  description: "Streamlined process for handling orders, shipping, and returns"
                },
                {
                  title: "Analytics & Reports",
                  description: "Detailed insights into your sales, customers, and inventory"
                },
                {
                  title: "Marketing Tools",
                  description: "Built-in SEO, social media integration, and email marketing features"
                },
                {
                  title: "Mobile Commerce",
                  description: "Fully responsive design optimized for mobile shopping experience"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-[#d80c2c] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-[#d80c2c]/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d80c2c] mb-6">
              Ready to Start Selling Online?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of successful businesses who trust us with their online presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#d80c2c] text-white hover:bg-[#d80c2c]/90"
              >
                Get Started Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#d80c2c] text-[#d80c2c] hover:bg-[#d80c2c]/5"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
} 