"use client"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Users, Target, Award, ArrowRight, CheckCircle2, Zap, Globe, Code, Laptop, Phone } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function About() {
  const achievements = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started with a team of 3 passionate developers"
    },
    {
      year: "2016",
      title: "First Major Project",
      description: "Successfully delivered enterprise e-commerce platform"
    },
    {
      year: "2018",
      title: "Team Expansion",
      description: "Grew to 15+ professionals across different domains"
    },
    {
      year: "2020",
      title: "International Clients",
      description: "Started serving clients from multiple countries"
    },
    {
      year: "2022",
      title: "Innovation Award",
      description: "Recognized for technological excellence"
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Launched advanced AI-powered solutions"
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#d80c2c]/5 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  We Create Digital Excellence
                </h1>
                <p className="text-xl text-gray-600">
                  We are a young and dynamic team dedicated to transforming businesses through innovative digital solutions.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60"
                  alt="Team Meeting"
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-[#d80c2c]/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-8">
                  To empower businesses with innovative digital solutions that drive growth and success in the modern world.
                </p>
                <div className="space-y-4">
                  {[
                    "Delivering cutting-edge web solutions",
                    "Ensuring client satisfaction",
                    "Maintaining highest quality standards",
                    "Continuous innovation and improvement"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#d80c2c]" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Globe className="w-8 h-8" />,
                    label: "Global Reach"
                  },
                  {
                    icon: <Code className="w-8 h-8" />,
                    label: "Clean Code"
                  },
                  {
                    icon: <Laptop className="w-8 h-8" />,
                    label: "Modern Tech"
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    label: "Fast Delivery"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-lg text-center"
                  >
                    <div className="text-[#d80c2c] mb-2">{item.icon}</div>
                    <div className="font-medium">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "24/7", label: "Support Available" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "3+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-white rounded-xl shadow-lg"
                >
                  <div className="text-4xl font-bold text-[#d80c2c] mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and relationships
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8 text-[#d80c2c]" />,
                  title: "Innovation",
                  description: "We stay ahead of digital trends to deliver cutting-edge solutions"
                },
                {
                  icon: <Users className="w-8 h-8 text-[#d80c2c]" />,
                  title: "Collaboration",
                  description: "We work closely with our clients to achieve their goals"
                },
                {
                  icon: <Award className="w-8 h-8 text-[#d80c2c]" />,
                  title: "Excellence",
                  description: "We strive for excellence in every project we undertake"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white rounded-xl shadow-lg text-center"
                >
                  <div className="inline-block p-4 bg-[#d80c2c]/5 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet our passionate team of digital experts
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "John Smith",
                  role: "Founder & Developer",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Sarah Johnson",
                  role: "UI/UX Designer",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Michael Chen",
                  role: "Full Stack Developer",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"
                },
                {
                  name: "Emily Davis",
                  role: "Project Manager",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="mb-4 overflow-hidden rounded-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-500 
                               group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#d80c2c]">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-[#d80c2c]/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d80c2c] mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create something amazing for your business
            </p>
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-[#d80c2c] text-white hover:bg-[#d80c2c]/90"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
} 