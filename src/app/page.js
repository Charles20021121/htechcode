"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Laptop, Phone, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      title: "Transform Your Digital Presence",
      description: "Professional web solutions to help your business grow and succeed online"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      title: "E-commerce Solutions",
      description: "Build your online store with powerful features and secure payment systems"
    },
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200",
      title: "Booking Systems",
      description: "Streamline your appointment scheduling with our advanced booking solutions"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentSlide}
                src={slides[currentSlide].image}
                alt="Hero Background"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Slide Navigation */}
            <div className="flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index 
                      ? 'w-8 bg-white' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <motion.section 
          id="about"
          className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left Column - Image */}
              <motion.div
                variants={{
                  initial: { opacity: 0, x: -50 },
                  animate: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[#d80c2c]/10 z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60" 
                    alt="Team Meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#d80c2c]">10+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#d80c2c]">200+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#d80c2c]">50+</div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                variants={{
                  initial: { opacity: 0, x: 50 },
                  animate: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-[#d80c2c]">
                  Crafting Digital Excellence Since 2014
                </h2>
                <p className="text-gray-600 mb-8">
                  At TechCraft, we're more than just a web development company. We're your digital 
                  transformation partners, committed to turning your vision into reality. Our team 
                  of passionate experts combines creativity with technical expertise to deliver 
                  solutions that drive real business growth.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Expert Team",
                      description: "Our seasoned professionals bring years of industry experience"
                    },
                    {
                      title: "Custom Solutions",
                      description: "Tailored approaches to meet your unique business needs"
                    },
                    {
                      title: "Innovation Focus",
                      description: "Always at the forefront of digital technology trends"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#d80c2c] mt-2" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          id="services" 
          className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#d80c2c]">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions to help your business thrive online
              </p>
            </motion.div>

            {/* Website Design */}
            <div className="mb-24 bg-gray-50 rounded-2xl p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Website Design</h3>
                  <p className="text-gray-600 mb-6">
                    Custom-designed, responsive websites that captivate your audience and drive results.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Responsive Design for All Devices",
                      "SEO-Optimized Structure",
                      "Fast Loading Speed",
                      "User-Friendly Interface",
                      "Custom Features & Functionality"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d80c2c]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeInUp} className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
                    alt="Website Design"
                    className="rounded-lg shadow-xl w-full h-[300px] object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* E-commerce */}
            <div className="mb-24 bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp} className="order-2 lg:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60"
                    alt="E-commerce Solutions"
                    className="rounded-lg shadow-xl w-full h-[300px] object-cover"
                  />
                </motion.div>
                <motion.div variants={fadeInUp} className="order-1 lg:order-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">E-commerce Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Powerful online stores with seamless shopping experiences and robust management tools.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Secure Payment Integration",
                      "Inventory Management",
                      "Order Processing System",
                      "Multiple Payment Gateways",
                      "Analytics & Reporting"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d80c2c]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* E-booking */}
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">E-booking System</h3>
                  <p className="text-gray-600 mb-6">
                    Smart booking systems for efficient business management and customer convenience.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Real-time Availability",
                      "Automated Scheduling",
                      "Payment Processing",
                      "Customer Management",
                      "Email Notifications"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#d80c2c]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <img 
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop&q=60"
                    alt="E-booking System"
                    className="rounded-lg shadow-xl w-full h-[300px] object-cover"
                  />
                </motion.div>
              </div>
            </div>
        </div>
        </motion.section>

        {/* Our Projects Section */}
        <motion.section
          id="projects"
          className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#d80c2c]">
                Our Projects
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Showcasing our best work and successful digital solutions
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "E-commerce Platform",
                  category: "Web Development",
                  image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
                  link: "#"
                },
                {
                  title: "Booking System",
                  category: "Web Application",
                  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
                  link: "#"
                },
                {
                  title: "Corporate Website",
                  category: "Web Design",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
                  link: "#"
                },
                {
                  title: "Mobile App",
                  category: "App Development",
                  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
                  link: "#"
                },
                {
                  title: "Restaurant System",
                  category: "POS System",
                  image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop&q=60",
                  link: "#"
                },
                {
                  title: "Healthcare Platform",
                  category: "Web Platform",
                  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
                  link: "#"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-xl"
                >
                  {/* Project Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 
                               group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm font-medium text-[#d80c2c] mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-sm font-medium"
                      >
                        View Project <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Projects Button */}
            <motion.div
              variants={fadeInUp}
              className="text-center mt-12"
            >
              <Button 
                size="lg"
                variant="outline"
                className="border-[#d80c2c] text-[#d80c2c] hover:bg-[#d80c2c]/5"
              >
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Clients Section */}
        <motion.section
          id="clients"
          className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#d80c2c]">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                We're proud to work with companies of all sizes across various industries
              </p>
            </motion.div>

            {/* Client Logos Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20"
            >
              {[
                {
                  name: "Tech Corp",
                  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60",
                  description: "Technology Partner"
                },
                {
                  name: "Finance Plus",
                  logo: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=800&auto=format&fit=crop&q=60",
                  description: "Financial Services"
                },
                {
                  name: "Client 3",
                  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Client 4",
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Client 5",
                  image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Client 6",
                  image: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Client 7",
                  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Client 8",
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
                }
              ].map((client, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                             transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden rounded-lg mb-4">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{client.name}</h3>
                    <p className="text-sm text-gray-600">{client.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "TechCraft transformed our online presence completely. Their expertise in web development is unmatched.",
                  author: "Sarah Johnson",
                  position: "CEO, TechStart Inc."
                },
                {
                  quote: "The e-commerce solution they built helped us increase our online sales by 200% in just 6 months.",
                  author: "Michael Chen",
                  position: "Founder, RetailPlus"
                },
                {
                  quote: "Their team's dedication to innovation and attention to detail made all the difference in our project.",
                  author: "Emma Davis",
                  position: "Marketing Director, GrowthCo"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 p-8 rounded-xl relative"
                >
                  <div className="absolute -top-4 left-8 text-[#d80c2c] text-6xl">"</div>
                  <div className="relative">
                    <p className="text-gray-600 mb-6 pt-4">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#d80c2c]/10 flex items-center justify-center">
                        <span className="text-[#d80c2c] font-bold">
                          {testimonial.author[0]}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Partners Section */}
        <motion.section
          id="partners"
          className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-[#d80c2c] to-transparent" />
            <div className="grid grid-cols-8 h-full">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="border-r border-[#d80c2c]" />
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-20"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                Our Partners
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Our Partners, like our people are our most treasured assets.
              </p>
            </motion.div>

            {/* Partners Logo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  name: "Shinjiru",
                  logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60",
                  type: "Technology Partner"
                },
                {
                  name: "Billplz",
                  logo: "https://images.unsplash.com/photo-1554774853-719586f82d77?w=800&auto=format&fit=crop&q=60",
                  type: "Payment Solutions"
                },
                {
                  name: "Partner 3",
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Partner 4",
                  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Partner 5",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Partner 6",
                  image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Partner 7",
                  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Partner 8",
                  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
                }
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#d80c2c]/5 
                                 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl 
                                 transition-all duration-300 relative">
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                      <p className="text-sm text-[#d80c2c]">{partner.type}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#d80c2c]/5 to-transparent" />
          <motion.div 
            className="max-w-4xl mx-auto text-center relative"
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-[#d80c2c]">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Let's discuss how we can help you achieve your goals
            </p>
            <Button 
              size="lg" 
              className="bg-[#d80c2c] hover:bg-[#d80c2c]/90 text-white group shadow-lg"
            >
              Contact Us
              <motion.div
                className="ml-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight />
              </motion.div>
            </Button>
          </motion.div>
        </motion.section>
    </div>
      <Footer />
    </>
  )
}
