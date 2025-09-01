"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimate, useInView, useScroll, useTransform } from "framer-motion";
import { 
  CodeBracketIcon,
  PaintBrushIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  ChartBarIcon,
  CpuChipIcon,
  EyeIcon,
  ArrowPathIcon,
  ServerIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";

export default function Services() {
  const [scope, animate] = useAnimate();
  const [size, setSize] = useState({ columns: 0, rows: 0 });
  const [hoveredService, setHoveredService] = useState(null);
  
  const servicesRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: servicesRef,
    offset: ["start start", "end end"]
  });
  
  const isInView = useInView(servicesRef, { once: true });
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);
    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 60);
    const rows = Math.floor(document.body.clientHeight / 60);
    setSize({ columns, rows });
  };

  const handleMouseLeave = (e) => {
    const id = `#${e.target.id}`;
    animate(id, { 
      background: "rgba(0, 255, 255, 0)",
      boxShadow: "0 0 0px rgba(0, 255, 255, 0)"
    }, { duration: 2 });
  };

  const handleMouseEnter = (e) => {
    const id = `#${e.target.id}`;
    animate(id, { 
      background: "rgba(0, 255, 255, 0.1)",
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
    }, { duration: 0.3 });
  };

  // Main Services
  const mainServices = [
    {
      id: 1,
      title: "Web Design",
      description: "Stunning, user-centric designs that captivate and convert. We create visually striking interfaces that tell your brand's story.",
      icon: PaintBrushIcon,
      color: "from-pink-500 to-rose-500",
      neonColor: "rgba(236, 72, 153, 0.8)",
      features: ["UI/UX Design", "Responsive Design", "Brand Identity", "Prototyping"]
    },
    {
      id: 2,
      title: "Web Development",
      description: "Cutting-edge web applications built with modern technologies. Fast, secure, and scalable solutions for your business.",
      icon: CodeBracketIcon,
      color: "from-blue-500 to-cyan-500",
      neonColor: "rgba(59, 130, 246, 0.8)",
      features: ["Frontend Development", "Backend Development", "API Integration", "Performance Optimization"]
    },
    {
      id: 3,
      title: "E-Commerce Solutions",
      description: "Complete online stores that drive sales. From cart to checkout, we build shopping experiences that customers love.",
      icon: ShoppingCartIcon,
      color: "from-emerald-500 to-green-500",
      neonColor: "rgba(16, 185, 129, 0.8)",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Multi-platform Support"]
    },
    {
      id: 4,
      title: "Maintenance & Support",
      description: "24/7 technical support and maintenance services. Keep your digital assets running smoothly with our expert care.",
      icon: WrenchScrewdriverIcon,
      color: "from-amber-500 to-orange-500",
      neonColor: "rgba(245, 158, 11, 0.8)",
      features: ["24/7 Support", "Regular Updates", "Security Monitoring", "Performance Optimization"]
    },
    {
      id: 5,
      title: "Domain & Hosting",
      description: "Reliable hosting solutions and domain management. Secure, fast, and always available infrastructure for your business.",
      icon: ServerIcon,
      color: "from-purple-500 to-indigo-500",
      neonColor: "rgba(147, 51, 234, 0.8)",
      features: ["Domain Registration", "Cloud Hosting", "SSL Certificates", "CDN Integration"]
    },
    {
      id: 6,
      title: "App Development",
      description: "Native and cross-platform mobile applications. Bring your ideas to life on iOS and Android with stunning performance.",
      icon: DevicePhoneMobileIcon,
      color: "from-teal-500 to-cyan-500",
      neonColor: "rgba(20, 184, 166, 0.8)",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"]
    }
  ];

  // Additional Services
  const additionalServices = [
    {
      title: "Cloud Solutions",
      icon: CloudIcon,
      color: "from-sky-400 to-blue-500",
      description: "Scalable cloud infrastructure and migration services"
    },
    {
      title: "Cybersecurity",
      icon: ShieldCheckIcon,
      color: "from-red-400 to-pink-500",
      description: "Comprehensive security audits and protection solutions"
    },
    {
      title: "SEO Optimization",
      icon: MagnifyingGlassIcon,
      color: "from-green-400 to-emerald-500",
      description: "Boost your search rankings and online visibility"
    },
    {
      title: "Digital Marketing",
      icon: ChartBarIcon,
      color: "from-purple-400 to-violet-500",
      description: "Data-driven marketing strategies and campaigns"
    },
    {
      title: "AI Integration",
      icon: CpuChipIcon,
      color: "from-orange-400 to-red-500",
      description: "Smart automation and AI-powered solutions"
    },
    {
      title: "Consultation",
      icon: LightBulbIcon,
      color: "from-yellow-400 to-amber-500",
      description: "Strategic technology consulting and planning"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into your business needs and goals",
      icon: EyeIcon,
      color: "from-cyan-400 to-blue-500"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Crafting a tailored roadmap for your success",
      icon: LightBulbIcon,
      color: "from-purple-400 to-pink-500"
    },
    {
      step: "03",
      title: "Development",
      description: "Building with cutting-edge technologies",
      icon: CodeBracketIcon,
      color: "from-emerald-400 to-green-500"
    },
    {
      step: "04",
      title: "Launch",
      description: "Deploying your solution to the world",
      icon: RocketLaunchIcon,
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <div ref={servicesRef} className="relative bg-neutral-950 min-h-screen overflow-hidden">
      {/* Neon Grid Background */}
      <motion.div
        ref={scope}
        className="fixed inset-0 grid grid-cols-[repeat(auto-fit,_minmax(60px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(60px,_1fr))] opacity-20"
        style={{ y: y1 }}
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`service-square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="h-full w-full border-[0.5px] border-cyan-800/30"
          />
        ))}
      </motion.div>

      {/* Neon Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
               left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.6)`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.8)`
            }}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center px-4 py-20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent relative">
                Our Services
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Transforming ideas into digital reality with cutting-edge technology and innovative solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Core Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our flagship services designed to elevate your digital presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-transparent transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                whileHover={{ y: -10 }}
                style={{
                  boxShadow: hoveredService === service.id 
                    ? `0 20px 60px ${service.neonColor}` 
                    : "0 10px 30px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Neon Border Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}
                  animate={hoveredService === service.id ? {
                    scale: [1, 1.02, 1],
                    opacity: [0.1, 0.3, 0.1]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Glowing border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-sm`} />
                <div className="absolute inset-[1px] bg-neutral-900/90 rounded-3xl" />

                <div className="relative p-8">
                  {/* Icon with neon effect */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    />
                    <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <div className={`w-1 h-1 bg-gradient-to-r ${service.color} rounded-full mr-3`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className={`mt-6 w-full py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Connecting line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-purple-500/50 transform translate-x-1/2" />
                )}
                
                {/* Step number with neon effect */}
                <motion.div
                  className="relative mx-auto mb-6 w-16 h-16 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                  <div className={`relative w-full h-full bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center z-10`}>
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                </motion.div>

                <div className="relative z-10 mb-4">
                  <step.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Extended Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive solutions to support your digital journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 hover:border-transparent p-6 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(139, 69, 255, 0.3)"
                }}
              >
                {/* Neon glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative z-10">
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className={`w-10 h-10 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Neon background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's transform your vision into reality. Contact us today for a free consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-lg"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}