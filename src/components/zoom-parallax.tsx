'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

// Définit la structure d'un objet image
interface Image {
	src: string; // URL de l'image
	alt?: string; // Texte alternatif pour l'image
}

// Définit les props du composant ZoomParallax
interface ZoomParallaxProps {
	/** Tableau d'objets Image à afficher. Le composant est optimisé pour 7 images. */
	images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
	// Crée une référence pour le conteneur principal de l'animation
	const container = useRef(null);

	// useScroll suit la progression du défilement à l'intérieur du conteneur
	const { scrollYProgress } = useScroll({
		target: container, // L'élément à suivre
		// 'start start' : le début de l'élément cible rencontre le début de la fenêtre
		// 'end end' : la fin de l'élément cible rencontre la fin de la fenêtre
		offset: ['start start', 'end end'],
	});

	// useTransform mappe la progression du défilement (de 0 à 1) à une échelle de zoom
	// Par exemple, scale4 va de 1 (pas de zoom) à 4 (zoom x4)
	const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
	const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
	const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
	const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
	const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

	// Tableau des différentes échelles de zoom à appliquer aux images
	// L'ordre est important car il correspond à l'index des images
	const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

	return (
		// Conteneur principal qui définit la zone de défilement pour l'animation
		// La hauteur de 300vh signifie que l'utilisateur devra faire défiler 3 fois la hauteur de l'écran pour voir toute l'animation
		<div ref={container} className="relative h-[300vh]">
			{/* Ce conteneur est "collant" (sticky) en haut de l'écran et prend toute la hauteur de la fenêtre (h-screen) */}
			{/* overflow-hidden empêche les images zoomées de déborder */}
			<div className="sticky top-0 h-screen overflow-hidden">
				{/* Itère sur le tableau d'images pour les afficher */}
				{images.map(({ src, alt }, index) => {
					// Assigne une échelle de zoom à chaque image en fonction de son index
					// L'opérateur modulo (%) assure que si on a plus de 7 images, on réutilise les échelles
					const scale = scales[index % scales.length];

					return (
						// motion.div est un composant de Framer Motion qui peut être animé
						// L'animation ici est l'application du style "scale" qui change dynamiquement avec le défilement
						<motion.div
							key={index}
							style={{ scale }}
							// Classes pour le positionnement et le style
							// Chaque image est positionnée de manière absolue au centre du conteneur
							// Les classes conditionnelles qui suivent servent à positionner chaque image (sauf la première)
							// autour de l'image centrale.
							// Par exemple, pour l'image à l'index 1 :
							// '[&>div]:!-top-[30vh]' : déplace le conteneur enfant de 30vh vers le haut
							// '[&>div]:!left-[5vw]' : déplace le conteneur enfant de 5vw vers la gauche
							// '[&>div]:!h-[30vh]' : définit la hauteur du conteneur enfant à 30vh
							// '[&>div]:!w-[35vw]' : définit la largeur du conteneur enfant à 35vw
							className={`absolute top-0 flex h-full w-full items-center justify-center 
								${index === 1 ? '[&>div]:!-top-[40vh] [&>div]:!left-[20vw] [&>div]:!h-[35vh] [&>div]:!w-[20vw]' : ''} 
								${index === 2 ? '[&>div]:!-top-[25vh] [&>div]:!-left-[23vw] [&>div]:!h-[55vh] [&>div]:!w-[20vw]' : ''} 
								${index === 3 ? '[&>div]:!-top-[5vh] [&>div]:!left-[35vw] [&>div]:!h-[45vh] [&>div]:!w-[15vw]' : ''} 
								${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} 
								${index === 5 ? '[&>div]:!top-[20.5vh] [&>div]:!-left-[32.5vw] [&>div]:!h-[50vh] [&>div]:!w-[25vw]' : ''} 
								${index === 6 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[21.5vw] [&>div]:!h-[25vh] [&>div]:!w-[15vw]' : ''} `}
						>
							{/* Conteneur intérieur pour l'image. L'image à l'index 0 (centrale) garde ces dimensions par défaut */}
							<div className="relative h-[50vh] w-[25vw] ">
								<img
									src={src || '/placeholder.svg'} // Affiche une image de remplacement si src est manquant
									alt={alt || `Parallax image ${index + 1}`} // Texte alternatif par défaut
									className="h-full w-full object-cover" // Assure que l'image remplit son conteneur sans se déformer
								/>
							</div>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}
