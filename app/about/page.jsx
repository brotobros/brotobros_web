"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  RocketLaunchIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  HeartIcon,
  StarIcon,
  CodeBracketIcon,
  UserGroupIcon,
  AcademicCapIcon,
  TrophyIcon,
  GlobeAltIcon,
  SparklesIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

// Import your existing Hero component
import Hero from "@/components/about/AboutHero";

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end end"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Company values
  const values = [
    {
      icon: LightBulbIcon,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver solutions that are ahead of their time.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Quality Assurance",
      description: "Every line of code, every design element is crafted with precision and tested to perfection.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: HeartIcon,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships through exceptional service and results.",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: RocketLaunchIcon,
      title: "Future-Ready",
      description: "We don't just follow trends, we set them. Our solutions are built for tomorrow's challenges.",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  // Team members
  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      bio: "Full-stack visionary with 10+ years in tech leadership",
      avatar: "AR",
      specialties: ["Strategic Planning", "Tech Leadership", "Product Vision"],
      color: "from-blue-400 to-purple-500"
    },
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      bio: "UX/UI expert creating beautiful, functional experiences",
      avatar: "SC",
      specialties: ["UI/UX Design", "Brand Identity", "User Research"],
      color: "from-pink-400 to-rose-500"
    },
    {
      name: "Marcus Johnson",
      role: "Senior Developer",
      bio: "Backend architect building scalable, robust systems",
      avatar: "MJ",
      specialties: ["Backend Development", "DevOps", "System Architecture"],
      color: "from-green-400 to-teal-500"
    },
    {
      name: "Elena Popov",
      role: "Frontend Specialist",
      bio: "React wizard bringing designs to life with perfect code",
      avatar: "EP",
      specialties: ["React/Next.js", "TypeScript", "Mobile Development"],
      color: "from-cyan-400 to-blue-500"
    }
  ];

  // Company timeline
  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Started as a small team of passionate developers in a garage",
      icon: RocketLaunchIcon,
      color: "from-blue-400 to-cyan-500"
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Delivered our first enterprise-level application, setting new standards",
      icon: StarIcon,
      color: "from-purple-400 to-pink-500"
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew to 10+ team members, specializing in modern web technologies",
      icon: UserGroupIcon,
      color: "from-green-400 to-emerald-500"
    },
    {
      year: "2022",
      title: "Innovation Award",
      description: "Recognized for outstanding innovation in web development solutions",
      icon: TrophyIcon,
      color: "from-yellow-400 to-orange-500"
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded services internationally, serving clients across 5 continents",
      icon: GlobeAltIcon,
      color: "from-indigo-400 to-purple-500"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Leading the charge in AI-powered development and automation",
      icon: SparklesIcon,
      color: "from-cyan-400 to-teal-500"
    }
  ];

  // Stats
  const stats = [
    { value: "150+", label: "Projects Delivered", icon: CodeBracketIcon },
    { value: "50+", label: "Happy Clients", icon: HeartIcon },
    { value: "5+", label: "Years Experience", icon: AcademicCapIcon },
    { value: "99%", label: "Client Satisfaction", icon: TrophyIcon }
  ];

  return (
    <div ref={aboutRef} className="relative bg-neutral-950 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Company Story Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Story
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Founded in 2019, Brotobros emerged from a simple belief: technology should empower, not complicate. 
                What started as a small team of passionate developers has grown into a dynamic force in the digital landscape.
              </p>
              <p>
                We've had the privilege of partnering with startups, enterprises, and visionaries who dare to think differently. 
                Each project has shaped us, taught us, and reinforced our commitment to excellence.
              </p>
              <p>
                Today, we stand at the forefront of digital innovation, not just following trends, but creating them. 
                Our mission remains unchanged: to transform ideas into extraordinary digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-4 bg-neutral-900/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide every decision and drive our passion for excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-3xl p-8 hover:border-indigo-500/50 transition-all duration-500"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.2)"
                }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center relative`}>
                    <value.icon className="w-8 h-8 text-white z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300`} />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Milestones that shaped our evolution from startup to industry leader
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-center mb-12 group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setActiveTimeline(index)}
                onHoverEnd={() => setActiveTimeline(-1)}
              >
                {/* Timeline line */}
                <div className="absolute left-8 md:left-1/2 top-16 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500 transform md:-translate-x-1/2" />
                
                {/* Year circle */}
                <motion.div
                  className={`relative w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center z-10 mr-8 md:mx-auto flex-shrink-0`}
                  whileHover={{ scale: 1.2 }}
                  animate={activeTimeline === index ? { scale: 1.1 } : { scale: 1 }}
                >
                  <span className="text-white font-bold text-sm">{item.year}</span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>

                {/* Content */}
                <motion.div
                  className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'} md:w-1/2`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-6 group-hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <item.icon className="w-6 h-6 text-indigo-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4 bg-neutral-900/30">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The brilliant minds behind every pixel, line of code, and innovative solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Avatar */}
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 relative overflow-hidden group-hover:shadow-2xl transition-all duration-300`}>
                    <span className="z-10">{member.avatar}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.color} blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-indigo-400 text-sm font-medium mb-3">{member.role}</p>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="space-y-2">
                  {member.specialties.map((specialty, idx) => (
                    <motion.div
                      key={idx}
                      className="inline-block bg-neutral-700/50 text-gray-300 text-xs px-3 py-1 rounded-full mr-2 mb-2 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      {specialty}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Ready to Build the Future?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us on this incredible journey. Let's create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <BoltIcon className="w-5 h-5 mr-2" />
                  Start Your Project
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-lg"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}