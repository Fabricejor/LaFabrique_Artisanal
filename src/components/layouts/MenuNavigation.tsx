'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MenuNavigation() {
	return (
		<section className="bg-[var(--background-main-color)] py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-playfair">
					Nos Collections
				</h2>
        </div>

        {/* Menu Cards Container */}
        <div className="relative flex flex-col items-center justify-center lg:flex-row lg:items-stretch lg:justify-center lg:gap-8">
          
          {/* Sacs Card */}
          <Link href="/catalogue" className="group">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl mb-8 lg:mb-0 z-10">
              <div className="absolute inset-0">
                <Image
                  src="/image/sac menu.png"
                  alt="Collection de sacs artisanaux"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-black/70  to-transparent"></div>
              </div>
              
              {/* Contenu */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-3xl font-bold mb-3 font-playfair">Sacs</h3>
                <p className="text-base font-montserrat leading-relaxed opacity-90">
                  Découvrez notre collection de sacs artisanaux, alliant tradition africaine et design contemporain. 
                  Chaque pièce est unique et raconte une histoire.
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold font-montserrat">
                  Explorer la collection
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Bijoux Card */}
          <Link href="/catalogue" className="group">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl lg:mb-0 z-10 lg:z-10">
              <div className="absolute inset-0">
							<Image
                  src="/image/bijoux menu.png"
                  alt="Collection de bijoux artisanaux"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-black/70 to-transparent"></div>
              </div>
              
              {/* Contenu */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-3xl font-bold mb-3 font-playfair">Bijoux</h3>
                <p className="text-base font-montserrat leading-relaxed opacity-90">
                  Explorez notre gamme de bijoux authentiques, ornés de motifs ancestraux. 
                  Des créations précieuses qui célèbrent l'art et la culture africaine.
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold font-montserrat">
                  Explorer la collection
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
							</div>
						</Link>
				</div>
			</div>

      {/* Styles pour l'effet de chevauchement sur mobile */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .relative.flex.flex-col > :nth-child(2) {
            transform: translateY(-4rem);
          }
          .relative.flex.flex-col > :nth-child(3) {
            transform: translateY(-8rem);
          }
        }
      `}</style>
		</section>
	);
}
