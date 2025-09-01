"use client";
import { Mouse } from 'lucide-react';
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Hero() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative flex flex-col min-h-screen items-center place-content-center overflow-hidden bg-gray-150 px-4 py-24 text-gray-100"
    >

      <div className='flex md:flex-row flex-col justify-center items-center mt-24 gap-4 mb-8'>
        <div className="relative z-10 flex flex-col items-start">
          <span className="mb-1.5 inline-block px-3 py-1.5 text-sm">
            Brotobros
          </span>

          <h1 className="max-w-7xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-start text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            WE CODE THE <br/>FUTURE
          </h1>

          <p className="my-6 max-w-xl text-start text-base leading-relaxed md:text-lg md:leading-relaxed">
            At Brotobros, we transform bold ideas into high-performance <br/> digital products from sleek websites to AI-powered solutions.
          </p>

          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="group relative flex w-fit items-start gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            Learn More About Us
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12 items-center-safe" />
          </motion.button>
        </div>
      </div>

      <div className='flex items-center md:mt-20 mt-10'>
        <Mouse className="h-8 w-8 text-white animate-bounce" />
      </div>

      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}