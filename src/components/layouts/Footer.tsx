'use client';
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import LegalModals from '../common/LegalModals';

export default function Footer() {
    return (
        <footer className="bg-[var(--text-primary)] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12">
                    {/* Colonne 1 - Marque */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold font-playfair">La Fabrique Artisanal</h2>
                        <p className="text-gray-300 font-montserrat leading-relaxed">
                            Créations artisanales africaines d'exception
                        </p>
                        {/* Icônes sociales */}
                        <div className="flex space-x-4 pt-4">
                            <a title="Instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/la_fabriq_artisanale" 
                                className="text-white hover:text-gray-300 transition-colors duration-200">
                                <FaInstagram size={24} />
                            </a>
                            <a title="TikTok" target="_blank" rel="noopener noreferrer" href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                                <FaTiktok size={24} />
                            </a>
                            <a title="WhatsApp" target="_blank" rel="noopener noreferrer" href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                                <FaWhatsapp size={24} />
                            </a>
                            <a title="Email"  target="_blank" rel="noopener noreferrer" href="mailto:contact@lafabriqueartisanal.com" 
                                className="text-white hover:text-gray-300 transition-colors duration-200">
                                <HiMail size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Colonne 2 - Navigation */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold font-montserrat">Navigation</h3>
                        <nav className="flex flex-col space-y-3">
                            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 font-montserrat">
                                Accueil
                            </Link>
                            <Link href="/sacs" className="text-gray-300 hover:text-white transition-colors duration-200 font-montserrat">
                                Sacs
                            </Link>
                            <Link href="/bijoux" className="text-gray-300 hover:text-white transition-colors duration-200 font-montserrat">
                                Bijoux
                            </Link>
                            <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors duration-200 font-montserrat">
                                À propos
                            </Link>
                            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-montserrat">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Colonne 3 - Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold font-montserrat">Contact</h3>
                        <div className="space-y-3 text-gray-300 font-montserrat">
                            <div className="flex items-center space-x-2">
                                <FaWhatsapp size={16} />
                                <span>WhatsApp Business</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <HiMail size={16} />
                                <a href="mailto:contact@lafabriqueartisanal.com" 
                                    className="hover:text-white transition-colors duration-200">
                                    contact@lafabriqueartisanal.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaInstagram size={16} />
                                <span>@lafabriqueartisanal</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden text-center space-y-8">
                    {/* Titre */}
                    <div>
                        <h2 className="text-2xl font-bold font-playfair mb-2">La Fabrique Artisanal</h2>
                        <p className="text-gray-300 font-montserrat">
                            Créations artisanales africaines d'exception
                        </p>
                    </div>

                    {/* Icônes sociales */}
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.instagram.com/la_fabriq_artisanale" target="_blank" rel="noopener noreferrer" 
                            className="text-white hover:text-gray-300 transition-colors duration-200">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                            <FaTiktok size={24} />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                            <FaWhatsapp size={24} />
                        </a>
                        <a href="mailto:contact@lafabriqueartisanal.com" 
                            className="text-white hover:text-gray-300 transition-colors duration-200">
                            <HiMail size={24} />
                        </a>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold font-montserrat mb-4">Navigation</h3>
                        <nav className="flex flex-col space-y-3">
                            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 font-montserrat">
                                Accueil
                            </Link>
                            <Link href="/sacs" className="text-gray-300 hover:text-white transition-colors duration-200 font-montserrat">
                                Sacs
                            </Link>
                            <Link href="/bijoux" className="text-gray-300 hover:text-white transition-colors duration-200 font-montserrat">
                                Bijoux
                            </Link>
                            <Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors duration-200 font-montserrat">
                                À propos
                            </Link>
                            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-montserrat">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold font-montserrat mb-4">Contact</h3>
                        <div className="space-y-3 text-gray-300 font-montserrat">
                            <div className="flex items-center justify-center space-x-2">
                                <FaWhatsapp size={16} />
                                <span>WhatsApp Business</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <HiMail size={16} />
                                <a href="mailto:contact@lafabriqueartisanal.com" 
                                    className="hover:text-white transition-colors duration-200">
                                    contact@lafabriqueartisanal.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <FaInstagram size={16} />
                                <span>@lafabriqueartisanal</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ligne de séparation */}
                <hr className="border-gray-600 my-8" />

                {/* Copyright et liens légaux */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0 text-center lg:text-left">
                    <p className="text-gray-300 font-montserrat text-sm">
                        © 2025 La Fabrique Artisanal. Tous droits réservés.
                    </p>
                    <LegalModals>
                        {(openModal) => (
                            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 text-sm font-montserrat">
                                <button 
                                    onClick={() => openModal('mentions')}
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Mentions légales
                                </button>
                                <button 
                                    onClick={() => openModal('privacy')}
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    Politique de confidentialité
                                </button>
                                <button 
                                    onClick={() => openModal('cgv')}
                                    className="text-gray-300 hover:text-white transition-colors duration-200"
                                >
                                    CGV
                                </button>
                            </div>
                        )}
                    </LegalModals>
                </div>
        </div>
        </footer>
    );
}
