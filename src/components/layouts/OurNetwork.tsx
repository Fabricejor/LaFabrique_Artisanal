'use client';
import React, { useEffect } from 'react';
import { video_tiktok, instagram_posts } from '@/constants/contants';

// Composant pour afficher une vidéo TikTok embed
interface TikTokVideoProps {
  embed: string;
  index: number;
}

function TikTokVideo({ embed, index }: TikTokVideoProps) {
  useEffect(() => {
    // Charger le script TikTok si ce n'est pas déjà fait
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="tiktok-video-container">
      <div
        dangerouslySetInnerHTML={{
          __html: embed.replace(/<script[^>]*>.*?<\/script>/gi, ''),
        }}
      />
    </div>
  );
}

// Composant pour afficher une publication Instagram embed
interface InstagramPostProps {
  embed: string;
  index: number;
}

function InstagramPost({ embed, index }: InstagramPostProps) {
  useEffect(() => {
    // Charger le script Instagram si ce n'est pas déjà fait
    const hasHttps = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    const hasProtocolRelative = document.querySelector('script[src="//www.instagram.com/embed.js"]');
    if (!hasHttps && !hasProtocolRelative) {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="instagram-post-container">
      <div
        dangerouslySetInnerHTML={{
          // Retire les <script> pour éviter les doublons; laisse Instagram gérer le rendu de la vidéo
          __html: embed.replace(/<script[^>]*>.*?<\/script>/gi, ''),
        }}
      />
    </div>
  );
}

export default function OurNetwork() {
  return (
    <section className="bg-[var(--background-secondary)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] font-playfair mb-4">
            Découvrez nos dernières inspirations sociales
          </h2>
          <p className="text-lg text-[var(--text-primary)] font-montserrat opacity-80">
            Suivez-nous sur nos réseaux sociaux
          </p>
        </div>

        {/* Grille des vidéos TikTok */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {video_tiktok.map((video, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-sm">
                <TikTokVideo embed={video.embed} index={index} />
              </div>
            </div>
          ))}
        </div>

        {/* Grille des publications Instagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {instagram_posts.map((post, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-sm">
                <InstagramPost embed={post.embed} index={index} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.instagram.com/la_fabriq_artisanale"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold font-montserrat transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Suivre sur Instagram
            </a>
            <a
              href="https://www.tiktok.com/@la.fabrique.art"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold font-montserrat transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              Suivre sur TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Styles pour les vidéos TikTok */}
      <style jsx global>{`
        .tiktok-video-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .tiktok-embed {
          margin: 0 auto !important;
          border-radius: 16px !important;
          overflow: hidden !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }
        
        .tiktok-embed:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }

        /* Responsive pour les embeds TikTok */
        @media (max-width: 1024px) {
          .tiktok-embed {
            max-width: 400px !important;
            min-width: 300px !important;
          }
        }

        @media (max-width: 640px) {
          .tiktok-embed {
            max-width: 350px !important;
            min-width: 280px !important;
          }
        }

        /* Styles pour les publications Instagram (même style de cartes) */
        .instagram-post-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .instagram-media {
          margin: 0 auto !important;
          border-radius: 16px !important;
          overflow: hidden !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }
        .instagram-media:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </section>
  );
}