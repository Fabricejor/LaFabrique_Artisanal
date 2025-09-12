'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
// icons
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
//burger icons pour la responsivité 
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

    const menuItems = [
        { label: 'Accueil', href: '/' },
        { label: 'Catalogue', href: '/catalogue' },
        { label: 'A propos', href: '/a-propos' },
        { label: 'Contact', href: '/contact' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-[var(--navbar-background)] px-4 py-1 shadow-md sticky top-0 z-50 md:px-8 lg:px-12">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center space-x-2">
                    <Link href="/">
                        <Image src="/image/LOGOpage.png" alt="Logo" width={75} height={75} className="w-16 h-16 md:w-[75px] md:h-[75px] lg:w-[60px] lg:h-[60px]" />
                    </Link>
                    <h1 className="text-xl md:text-2xl lg:text-xl xl:text-3xl font-bold text-[var(--text-primary)] font-playfair">
                        La Fabrique Artisanal
                    </h1>
                </div>

                {/* Desktop Navigation Menu */}
                <div className="hidden left-1/2 lg:flex items-center space-x-8 lg:space-x-4 xl:space-x-12">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`nav-link text-lg lg:text-base xl:text-lg transition-colors duration-200 font-montserrat ${
                                    isActive 
                                        ? 'text-[var(--text-primary)] font-medium active' 
                                        : 'text-[var(--text-secondary)] hover:text-[var(--text-secondary)]'
                                } pb-1`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Social Icons */}
                <div className="hidden lg:flex items-center space-x-4">
                    <a href="#"
                        title="Instagram"
                        aria-label="Suivez-nous sur Instagram"
                        className="text-[--text-primary] hover:text-[var(--text-secondary)] transition-colors duration-200">
                        <FaInstagram size={24} />
                    </a>
                    <a href="#"
                        title="WhatsApp"
                        aria-label="Contactez-nous sur WhatsApp"
                        className="text-[--text-primary] hover:text-[var(--text-secondary)] transition-colors duration-200">
                        <FaWhatsapp size={24} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-[var(--text-primary)] p-2"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <IoClose size={28} /> : <RxHamburgerMenu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 bg-[var(--navbar-background)] border-t border-gray-200">
                    <div className="flex flex-col space-y-4 py-4">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`nav-link text-left px-4 py-2 text-lg transition-colors duration-200 font-montserrat ${
                                        isActive
                                            ? 'text-[var(--text-primary)] font-medium active'
                                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                    } pb-1`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        {/* Mobile Social Icons */}
                        <div className="flex items-center space-x-6 px-4 pt-4 border-t border-gray-200">
                            <a href="https://www.instagram.com/la_fabriq_artisanale?utm_source=ig_web_button_share_sheet&igsh=MWQwenJzcTlvMDlpag==" target="_blank" rel="noopener noreferrer"
                                title="Instagram"
                                aria-label="Suivez-nous sur Instagram"
                                className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors duration-200">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#"
                                title="WhatsApp"
                                aria-label="Contactez-nous sur WhatsApp"
                                className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors duration-200">
                                <FaWhatsapp size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
