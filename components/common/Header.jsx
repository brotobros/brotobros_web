"use client";
import {
    Phone, Mail, Linkedin,
    Instagram, Facebook, Twitter, MessageCircle /* or Whatsapp */
} from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
];

export default function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isHeaderVisible, setHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    const controlHeader = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            setHeaderVisible(false);
        } else {
            setHeaderVisible(true);
        }
        setLastScrollY(window.scrollY);

        // detect if at top
        setIsAtTop(window.scrollY <= 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlHeader);
        return () => window.removeEventListener("scroll", controlHeader);
    }, [lastScrollY]);

    return (
        <div className="flex items-center justify-between">
            <div
                className={`fixed inset-x-0 top-0 z-30 transition-transform duration-500 ease-in-out ${isHeaderVisible ? "translate-y-0 md:mt-5" : "-translate-y-full mt-0"
                    }`}
            >
                <header
                    className={`w-full mx-auto py-3 px-6 shadow md:rounded-full 
          transition-all duration-500 ease-in-out
          ${isAtTop
                            ? "border-none bg-transparent xl:max-w-screen-xl"
                            : "md:border border-gray-200 backdrop-blur-lg bg-white/10 lg:max-w-screen-md"
                        }`}
                >
                    <div className="px-4">
                        <div className="flex items-center justify-between">
                            <div className="relative w-[120px] h-[40px]">
                                <Link href="/" className="flex items-center">
                                    <Image
                                        src="/images/logo-white.png"
                                        alt="Falcon Group Full Logo"
                                        width={80}
                                        height={50}
                                        className={`absolute top-0 left-0 object-contain transition-opacity duration-500 ease-in-out ${isAtTop ? "opacity-100" : "hidden"}`}
                                    />
                                    {/* Small logo (scrolled) */}
                                    <Image
                                        src="/images/logo.png"
                                        alt="Falcon Group Logo"
                                        width={25}
                                        height={25}
                                        className={`absolute top-0 left-0 object-contain transition-opacity duration-500 ease-in-out ${isAtTop ? "hidden" : "opacity-100"}`}
                                    />
                                </Link>
                            </div>

                            {/* Menu */}
                            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                                {menu.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className="text-white font-semibold hover:text-red-700 flex items-center gap-1"
                                    >
                                        <span>{item.name}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* Phone & Mail */}
                            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                                {/* Phone */}
                                {/* <Link
                                    href="tel:+918592959403"
                                    className="text-white hover:text-red-700 flex items-center gap-1"
                                    aria-label="Call"
                                >
                                    <Phone className="w-5 h-5" />
                                </Link> */}

                                {/* Email */}
                                {/* <Link
                                    href="mailto:info@brotobros.com"
                                    className="text-white hover:text-red-700 flex items-center gap-1"
                                    aria-label="Email"
                                >
                                    <Mail className="w-5 h-5" />
                                </Link> */}

                                {/* WhatsApp */}
                                <Link
                                    href="https://wa.me/918592959403"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-white hover:text-red-700 flex items-center gap-1 ${isAtTop ? "opacity-100" : "hidden"}`}
                                    aria-label="WhatsApp"
                                >
                                    {/* Replace with <Whatsapp className="w-5 h-5" /> if available */}
                                    <MessageCircle className="w-5 h-5" />
                                </Link>

                                {/* Instagram */}
                                <Link
                                    href="https://instagram.com/brotobros_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-red-700 flex items-center gap-1"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </Link>

                                {/* Facebook */}
                                <Link
                                    href="https://facebook.com/brotobros"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-red-700 flex items-center gap-1"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </Link>

                                {/* X (Twitter) */}
                                <Link
                                    href="https://x.com/brotobros_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-red-700 flex items-center gap-1"
                                    aria-label="X"
                                >
                                    <Twitter className="w-5 h-5" />
                                </Link>

                                {/* LinkedIn */}
                                <Link
                                    href="https://linkedin.com/brotobros"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-red-700 flex items-center gap-1"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden flex items-center">
                                <button onClick={toggleSidebar} className="text-white">
                                    <FaBars />
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-0"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4">
                    {menu.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="py-2 px-4 text-black hover:text-gray-500 block items-center gap-2"
                            onClick={toggleSidebar}
                        >
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
            </aside>
        </div>
    );
}