"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimate, useInView, useScroll, useTransform } from "framer-motion";
import { 
  EyeIcon, 
  CodeBracketIcon, 
  StarIcon,
  ArrowTopRightOnSquareIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

export default function Portfolio() {
  const [scope, animate] = useAnimate();
  const [size, setSize] = useState({ columns: 0, rows: 0 });
  const [activeSection, setActiveSection] = useState(0);
  
  const portfolioRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: portfolioRef,
    offset: ["start start", "end end"]
  });
  
  const isInView = useInView(portfolioRef, { once: true });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);
    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 80);
    const rows = Math.floor(document.body.clientHeight / 80);
    setSize({ columns, rows });
  };

  const handleMouseLeave = (e) => {
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(168, 85, 247, 0)" }, { duration: 2 });
  };

  const handleMouseEnter = (e) => {
    const id = `#${e.target.id}`;
    animate(id, { background: "rgba(168, 85, 247, 0.2)" }, { duration: 0.3 });
  };

  // Demo projects data
  const projects = [
    {
      id: 1,
      title: "EcoTech Dashboard",
      category: "Web Application",
      description: "A comprehensive environmental monitoring dashboard with real-time data visualization and predictive analytics.",
      tech: ["React", "Next.js", "D3.js", "Node.js", "MongoDB"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      codeUrl: "#",
      type: "web",
      featured: true,
      color: "from-green-400 to-emerald-600"
    },
    {
      id: 2,
      title: "FinanceFlow Mobile",
      category: "Mobile Application",
      description: "A modern fintech mobile app with seamless UX, secure transactions, and AI-powered insights.",
      tech: ["React Native", "TypeScript", "Firebase", "Stripe"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      codeUrl: "#",
      type: "mobile",
      featured: true,
      color: "from-blue-400 to-indigo-600"
    },
    {
      id: 3,
      title: "AI Content Generator",
      category: "SaaS Platform",
      description: "An intelligent content creation platform powered by advanced AI algorithms and natural language processing.",
      tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Redis"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      codeUrl: "#",
      type: "saas",
      featured: true,
      color: "from-purple-400 to-pink-600"
    },
    {
      id: 4,
      title: "Smart Home IoT",
      category: "IoT Solution",
      description: "Complete smart home automation system with voice control and energy optimization.",
      tech: ["Arduino", "Raspberry Pi", "MQTT", "React", "AWS IoT"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      codeUrl: "#",
      type: "iot",
      featured: false,
      color: "from-orange-400 to-red-600"
    },
    {
      id: 5,
      title: "BlockChain Explorer",
      category: "Blockchain",
      description: "Advanced blockchain explorer with transaction analysis and smart contract interaction.",
      tech: ["Solidity", "Web3.js", "Ethereum", "IPFS"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      codeUrl: "#",
      type: "blockchain",
      featured: false,
      color: "from-yellow-400 to-orange-600"
    },
    {
      id: 6,
      title: "AR Shopping Experience",
      category: "Augmented Reality",
      description: "Immersive AR shopping platform that allows customers to visualize products in their space.",
      tech: ["Unity", "ARCore", "C#", "Firebase"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      codeUrl: "#",
      type: "ar",
      featured: false,
      color: "from-cyan-400 to-blue-600"
    }
  ];

  const categories = [
    { name: "All", count: projects.length, active: true },
    { name: "Web", count: projects.filter(p => p.type === "web").length },
    { name: "Mobile", count: projects.filter(p => p.type === "mobile").length },
    { name: "SaaS", count: projects.filter(p => p.type === "saas").length },
  ];

  const stats = [
    { label: "Projects Completed", value: "150+", icon: RocketLaunchIcon },
    { label: "Happy Clients", value: "80+", icon: StarIcon },
    { label: "Code Commits", value: "10K+", icon: CodeBracketIcon },
    { label: "Years Experience", value: "5+", icon: GlobeAltIcon }
  ];

  return (
    <div ref={portfolioRef} className="relative bg-neutral-950 min-h-screen overflow-hidden">
      {/* Animated Background Grid */}
      <motion.div
        ref={scope}
        className="fixed inset-0 grid grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(80px,_1fr))] opacity-10"
        style={{ y: y1 }}
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`portfolio-square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="h-full w-full border-[0.5px] border-neutral-800"
          />
        ))}
      </motion.div>

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Section 1: Hero & Stats */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-4 py-20">
        <div className="container mx-auto">
          {/* Hero Content */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-400 bg-clip-text text-transparent">
                Our Work
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Crafting digital experiences that push boundaries and deliver exceptional results. 
              Every project is a journey toward innovation.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 text-center group hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.1)" 
                }}
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Featured Projects */}
      <section className="relative z-10 min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcase of our most innovative and impactful work
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-purple-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-3xl h-64 bg-gradient-to-br from-neutral-800 to-neutral-900">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-white/20">
                      {project.type === 'web' && <ComputerDesktopIcon className="w-16 h-16" />}
                      {project.type === 'mobile' && <DevicePhoneMobileIcon className="w-16 h-16" />}
                      {project.type === 'saas' && <GlobeAltIcon className="w-16 h-16" />}
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <EyeIcon className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.codeUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <CodeBracketIcon className="w-6 h-6 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-neutral-800 text-gray-300 text-xs rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: All Projects Gallery */}
      <section className="relative z-10 min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Complete Portfolio
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Explore our complete collection of innovative solutions
            </p>

            {/* Category Filter */}
            <div className="flex justify-center space-x-4 mb-12">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  className="px-4 py-2 rounded-full border border-neutral-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Project Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.codeUrl}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <CodeBracketIcon className="w-4 h-4 text-white" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-xs text-indigo-400 mb-1">{project.category}</div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 2).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-neutral-800/50 text-gray-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Let's collaborate and create something extraordinary together.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}