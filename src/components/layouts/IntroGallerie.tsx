'use client';
import React from 'react';
import { ZoomParallax } from '../zoom-parallax';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/use-media-query';

const images = [
  { src: '/image/banniere/Femme noir deux bijoux artisanal.webp', alt: 'Femme avec deux bijoux artisanaux' },
  { src: '/image/banniere/sac bleu baniere.webp', alt: 'Sac bleu' },
  { src: '/image/banniere/femme noir tenant sac baeige banniere.webp', alt: 'Femme tenant un sac beige' },
  { src: '/image/banniere/femme noir  trois bijoux artisanal.webp', alt: 'Sac posé sur un pied' },
  { src: '/image/banniere/sac beige + accesoire banniere.webp', alt: 'Sac bleu porté' },
  { src: '/image/banniere/femme noir tennant sac  banniere.webp', alt: 'Femme tenant un sac' },
  { src: '/image/banniere/Femme noir bijoux artisanal.webp', alt: 'Femme avec un bijou artisanal' },
];

export default function IntroGallerie() {
	const isMobile = useMediaQuery('(max-width: 768px)');
	return (
		<div className="bg-[var(--background-main-color)]">
			{isMobile ? (
				<div className="flex h-screen w-full items-center justify-center">
					<Image src={images[0].src} alt={images[0].alt} width={500} height={800} className="h-auto w-full max-w-md object-contain p-4" />
				</div>
			) : (
				<ZoomParallax images={images.slice(0, 7)} />
			)}
		</div>
	);
}
