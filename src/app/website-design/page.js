"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import * as Accordion from '@radix-ui/react-accordion'

export default function WebsiteDesign() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const [showFullTable, setShowFullTable] = useState(false)

  const tableRows = [
    // Pricing & Basic Info
    {
      category: "Pricing & Basic Info",
      isHeader: true,
      cells: ["Landing Page", "Basic", "Advanced", "Premium"]
    },
    {
      title: "Price",
      cells: ["RM 1,000", "RM 2,999", "RM 3,999", "RM 4,999"],
      isPricing: true
    },
    {
      title: "Amendments (1st Year)",
      cells: ["3 Times", "3 Times", "3 Times", "3 Times"]
    },
    {
      title: "Page Design",
      cells: ["Single Page", "Up to 5 Pages", "Up to 8 Pages", "Up to 15 Pages"]
    },
    {
      title: "Business Email",
      cells: ["1 Account", "3 Accounts", "4 Accounts", "5 Accounts"]
    },

    // Essential Features
    {
      category: "Essential Features",
      isHeader: true,
      cells: ["", "", "", ""]
    },
    {
      title: "Free .com/.net Domain (1st Year)",
      cells: ["✔", "✔", "✔", "✔"]
    },
    {
      title: "SSL Certificate",
      cells: ["✔", "✔", "✔", "✔"]
    },
    {
      title: "Mobile Responsive",
      cells: ["✔", "✔", "✔", "✔"]
    },

    // Interactive Features
    {
      category: "Interactive Features",
      isHeader: true,
      cells: ["", "", "", ""]
    },
    {
      title: "Contact Form",
      cells: ["✖", "✔", "✔", "✔"]
    },
    {
      title: "Google Map",
      cells: ["✔", "✔", "✔", "✔"]
    },
    {
      title: "Video",
      cells: ["✔", "✔", "✔", "✔"]
    }
  ];

  const expandedRows = [
    // SEO Features
    {
      category: "Search Engine Optimization (SEO)",
      isHeader: true,
      cells: ["Basic", "Advanced", "Premium", "Premium"]
    },
    {
      title: "Search Engine META Tags",
      cells: ["✔", "✔", "✔", "✔"]
    },
    {
      title: "Search Engine Friendly Site",
      cells: ["✔", "✔", "✔", "✔"]
    },
    {
      title: "Search Engine Registration",
      cells: ["✖", "✔", "✔", "✔"]
    },
    {
      title: "Sitemap",
      cells: ["✖", "✔", "✔", "✔"]
    },
    {
      title: "SEO Service Included",
      cells: ["✖", "On-page SEO", "On-page SEO", "On-page SEO"]
    },

    // Analytics & Marketing
    {
      category: "Analytics & Marketing",
      isHeader: true,
      cells: ["", "", "", ""]
    },
    {
      title: "Social Sharing Widgets",
      cells: ["✖", "✔", "✔", "✔"]
    },
    {
      title: "Google Search Console Setup",
      cells: ["✖", "✔", "✔", "✔"]
    },

    // Advanced Features
    {
      category: "Advanced Features",
      isHeader: true,
      cells: ["", "", "", ""]
    },
    {
      title: "Admin Dashboard",
      cells: ["✖", "✖", "✔", "✔"]
    },
    {
      title: "Product List",
      cells: ["✖", "✖", "✖", "✔"]
    },
    {
      title: "Project List",
      cells: ["✖", "✖", "✔", "✔"]
    },

    // Support & Maintenance
    {
      category: "Support & Maintenance",
      isHeader: true,
      cells: ["", "", "", ""]
    },
    {
      title: "Image Optimization",
      cells: ["✔", "✔", "✔", "✔"]
    },
    {
      title: "LiteSpeed Optimization",
      cells: ["✔", "✔", "✔", "✔"]
    },
    {
      title: "Bug Fixes",
      cells: ["Lifetime Free", "Lifetime Free", "Lifetime Free", "Lifetime Free"]
    },
    {
      title: "Website Performance Guarantee",
      cells: ["✔", "✔", "✔", "✔"]
    },

    // Chat System
    {
      category: "Chat System",
      isHeader: true,
      cells: ["", "", "", ""]
    },
    {
      title: "WhatsApp Integration",
      cells: ["✔", "✔", "✔", "✔"]
    },
    {
      title: "Instagram Chat",
      cells: ["✖", "Choose 2", "✔", "✔"]
    },
    {
      title: "Facebook Messenger",
      cells: ["✖", "from 3", "✔", "✔"]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 top-20">
            <div className="absolute inset-0 bg-gradient-to-b from-[#d80c2c]/5 to-transparent" />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              className="grid grid-cols-8 h-full"
            >
              {[...Array(64)].map((_, i) => (
                <div key={i} className="border-r border-[#d80c2c]" />
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
              Website Design Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              Choose the perfect plan that suits your business needs
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg"
                className="bg-[#d80c2c] text-white hover:bg-[#d80c2c]/90"
              >
                Contact Sales
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-[#d80c2c] text-[#d80c2c] hover:bg-[#d80c2c]/5"
              >
                View Demo
              </Button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-[#d80c2c]" />
          </motion.div>
        </section>

        {/* Pricing Table Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#d80c2c] mb-4">
                Website Development Pricing Plans
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select the perfect plan that suits your business needs and budget
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#d80c2c] text-white">
                    <th className="p-6 text-left">Features</th>
                    <th className="p-6 text-center">Landing Page</th>
                    <th className="p-6 text-center">Basic</th>
                    <th className="p-6 text-center">Advanced</th>
                    <th className="p-6 text-center">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, index) => (
                    <tr key={index} className={row.isHeader ? 'bg-[#f0f7ff]' : 'hover:bg-gray-50'}>
                      <td className={`p-6 ${row.isHeader ? 'font-bold' : ''}`}>{row.category || row.title}</td>
                      {row.cells.map((cell, cellIndex) => (
                        <td key={cellIndex} className={`p-6 text-center ${
                          row.isPricing ? 'font-bold text-[#d80c2c]' : ''
                        }`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                  
                  {showFullTable && expandedRows.map((row, index) => (
                    <tr key={`expanded-${index}`} className={row.isHeader ? 'bg-[#f0f7ff]' : 'hover:bg-gray-50'}>
                      <td className={`p-6 ${row.isHeader ? 'font-bold' : ''}`}>{row.category || row.title}</td>
                      {row.cells.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-6 text-center">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Show More Button */}
            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowFullTable(!showFullTable)}
                variant="outline"
                className="border-[#d80c2c] text-[#d80c2c] hover:bg-[#d80c2c]/5"
              >
                {showFullTable ? 'Show Less' : 'Show More Features'}
                <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${
                  showFullTable ? 'rotate-180' : ''
                }`} />
              </Button>
            </div>
          </div>
        </section>

        {/* Consultation Section */}
        <section className="py-16 px-4 bg-[#d80c2c]/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#d80c2c]">
                Not Sure Which Plan to Choose?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Every business has unique needs. Let our expert team analyze and recommend the most suitable website development solution for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5 text-[#d80c2c]" />
                  <span>+60 12-345 6789</span>
                </div>
                <span className="hidden sm:block text-gray-400">|</span>
                <Button 
                  className="bg-[#d80c2c] hover:bg-[#d80c2c]/90 text-white"
                >
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            {/* Getting Started Questions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#d80c2c]">Getting Started</h3>
              <Accordion.Root type="single" collapsible className="space-y-4">
                {[
                  {
                    id: 'gs-1',
                    q: "What information is required to design my website?",
                    a: "To design your website, we'll need: \n\n" +
                       "• Your business information and branding materials (logo, colors, etc.)\n" +
                       "• Content for each page (text, images, videos)\n" +
                       "• Any specific design preferences or examples you like\n" +
                       "• Target audience information\n" +
                       "• Goals for your website\n\n" +
                       "Don't worry if you don't have everything ready - our team can guide you through the process."
                  },
                  {
                    id: 'gs-2',
                    q: "How long does it take to build a website?",
                    a: "Timeline varies based on the package and complexity:\n\n" +
                       "• Landing Page: 1-2 weeks\n" +
                       "• Basic Package: 2-4 weeks\n" +
                       "• Advanced Package: 4-6 weeks\n" +
                       "• Premium Package: 6-8 weeks\n\n" +
                       "These timelines assume prompt feedback and content provision from your side."
                  }
                ].map((faq) => (
                  <AccordionItem key={faq.id} faq={faq} />
                ))}
              </Accordion.Root>
            </div>

            {/* Features & Customization */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#d80c2c]">Features & Customization</h3>
              <Accordion.Root type="single" collapsible className="space-y-4">
                {[
                  {
                    id: 'fc-1',
                    q: "How If I want to change the content/design of my website?",
                    a: "There are two ways to make changes:\n\n" +
                       "For small changes (e.g., photo, words):\n" +
                       "• You can simply edit and update your website's photo & words by yourself using CMS (content management system) that provided from our site.\n\n" +
                       "For big changes (e.g., Design, add Page):\n" +
                       "• You are required to request from our site. Of Course, there's will be a additional charge based on your requirement.\n\n" +
                       "Free up to 3 amendments:\n" +
                       "• Each website package includes up to three complimentary amendments before your website goes live."
                  },
                  {
                    id: 'fc-2',
                    q: "Is it possible to increase the features / capability of my selected package?",
                    a: "Yes, absolutely! You can upgrade your package or add additional features at any time. We'll provide a quote based on your specific requirements and help ensure a smooth transition to the enhanced functionality."
                  },
                  {
                    id: 'fc-3',
                    q: "Is it possible if I want to have a website with multi-languages?",
                    a: "Yes, we can develop multi-language websites. This feature is available in our Advanced and Premium packages. Additional languages can be added to other packages for an extra charge."
                  }
                ].map((faq) => (
                  <AccordionItem key={faq.id} faq={faq} />
                ))}
              </Accordion.Root>
            </div>

            {/* Support & Maintenance */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#d80c2c]">Support & Maintenance</h3>
              <Accordion.Root type="single" collapsible className="space-y-4">
                {[
                  {
                    id: 'sm-1',
                    q: "Do you provide website maintenance?",
                    a: "Yes, all our packages include:\n\n" +
                       "• Regular security updates\n" +
                       "• Performance monitoring\n" +
                       "• Technical support\n" +
                       "• Bug fixes (Lifetime Free)\n" +
                       "• Basic content updates\n\n" +
                       "Additional maintenance services are available based on your needs."
                  }
                ].map((faq) => (
                  <AccordionItem key={faq.id} faq={faq} />
                ))}
              </Accordion.Root>
            </div>

            {/* Billing & Payments */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#d80c2c]">Billing & Payments</h3>
              <Accordion.Root type="single" collapsible className="space-y-4">
                {[
                  {
                    id: 'bp-1',
                    q: "When is my website's renewal date and how I going to pay for the renewal?",
                    a: "Your website renewal date is one year from the launch date. We'll send you a reminder email 30 days before the renewal date with payment instructions. The renewal includes domain name, hosting, and continued support services."
                  },
                  {
                    id: 'bp-2',
                    q: "What payment methods do you accept?",
                    a: "We accept multiple payment methods including:\n\n" +
                       "• Bank Transfer\n" +
                       "• Credit/Debit Cards\n" +
                       "• Online Banking\n" +
                       "• E-wallets\n\n" +
                       "Payment can be made in installments for larger projects."
                  }
                ].map((faq) => (
                  <AccordionItem key={faq.id} faq={faq} />
                ))}
              </Accordion.Root>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss your project and find the perfect solution for your business.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-[#d80c2c] hover:bg-[#d80c2c]/90 text-white">
                Contact Us
              </Button>
              <Link href="/">
                <Button variant="outline" className="border-[#d80c2c] text-[#d80c2c] hover:bg-[#d80c2c]/5">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

// Update AccordionItem component
const AccordionItem = ({ faq }) => (
  <Accordion.Item
    value={faq.id}
    className="bg-white rounded-lg overflow-hidden shadow-sm"
  >
    <Accordion.Header>
      <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-50">
        <span className="font-semibold text-lg">{faq.q}</span>
        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="p-6 pt-0 text-gray-600 whitespace-pre-line"
      >
        {faq.a}
      </motion.div>
    </Accordion.Content>
  </Accordion.Item>
) 