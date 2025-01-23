"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "corporate", name: "Corporate" },
    { id: "education", name: "Education" },
    { id: "healthcare", name: "Healthcare" },
    { id: "restaurant", name: "F&B" },
    { id: "booking", name: "Booking System" }
  ]

  const projects = [
    {
      id: 1,
      title: "Fashion Store",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60",
      description: "Modern e-commerce platform with advanced filtering",
      link: "#"
    },
    {
      id: 2,
      title: "Corporate Website",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60",
      description: "Professional corporate website with modern design",
      link: "#"
    },
    {
      id: 3,
      title: "Online Learning Platform",
      category: "education",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
      description: "Interactive learning management system",
      link: "#"
    },
    {
      id: 4,
      title: "Medical Clinic",
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60",
      description: "Healthcare appointment booking system",
      link: "#"
    },
    {
      id: 5,
      title: "Restaurant Website",
      category: "restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
      description: "Restaurant website with online ordering",
      link: "#"
    },
    {
      id: 6,
      title: "Hotel Booking",
      category: "booking",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
      description: "Hotel room booking platform",
      link: "#"
    },
    {
      id: 7,
      title: "Electronics Store",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=60",
      description: "Electronics e-commerce website",
      link: "#"
    },
    {
      id: 8,
      title: "Law Firm",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=60",
      description: "Professional law firm website",
      link: "#"
    },
    {
      id: 9,
      title: "Dental Clinic",
      category: "healthcare",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=60",
      description: "Dental clinic website with appointment system",
      link: "#"
    }
  ]

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#d80c2c]/5 to-transparent">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of successful projects across various industries
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`${
                    selectedCategory === category.id
                      ? 'bg-[#d80c2c] hover:bg-[#d80c2c]/90 text-white'
                      : 'border-[#d80c2c] text-[#d80c2c] hover:bg-[#d80c2c]/5'
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
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
                          {categories.find(cat => cat.id === project.category)?.name}
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/80 mb-4">
                          {project.description}
                        </p>
                        <Link href={project.link}>
                          <Button
                            size="sm"
                            className="bg-white text-[#d80c2c] hover:bg-white/90"
                          >
                            View Project
                            <ExternalLink className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-[#d80c2c]/5 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d80c2c] mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life
            </p>
            <Button 
              size="lg"
              className="bg-[#d80c2c] text-white hover:bg-[#d80c2c]/90"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
} 