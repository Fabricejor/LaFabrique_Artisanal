import React from 'react';
import { ZoomParallax } from '../zoom-parallax';

const images = [
    { src: '/image/banniere/sac portant sac bleu bannniere.webp', alt: 'Sac bleu porté' },
    { src: '/image/banniere/sac bleu baniere.webp', alt: 'Sac bleu' },

    { src: '/image/banniere/femme noir tenant sac baeige banniere.webp', alt: 'Femme tenant un sac beige' },
    { src: '/image/banniere/femme noir tennant sac  banniere.webp', alt: 'Femme tenant un sac' },
    { src: '/image/banniere/sac poser sur pied banniere.webp', alt: 'Sac posé sur un pied' },

    { src: '/image/banniere/Femme noir deux bijoux artisanal.webp', alt: 'Femme avec deux bijoux artisanaux' },
    { src: '/image/banniere/Femme noir bijoux artisanal.webp', alt: 'Femme avec un bijou artisanal' },
];

export default function IntroGallerie() {
  return (
    <div className="bg-[var(--background-main-color)]">
      <ZoomParallax images={images.slice(0, 7)} />
    </div>
  );
}
