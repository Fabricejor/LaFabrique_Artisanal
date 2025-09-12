'use client';
import React from 'react';
import { CircularTestimonials } from '../circular-testimonials';

const storyTestimonials = [
	{
		src: '/image/banniere/sac portant sac bleu bannniere.webp',
		quote:
			"La Fabrique Artisanal célèbre l'héritage africain à travers des créations contemporaines. Chaque pièce raconte une histoire, mêlant savoir-faire traditionnel et design moderne. De nos sacs en cuir aux bijoux ornés de motifs ancestraux, nous créons des objets d'exception qui transcendent les frontières entre tradition et modernité.",
		name: 'Notre Histoire',
		designation: '',
	},
	{
		src: '/image/banniere/sac poser sur main banniere.webp',
		quote:
			"La Fabrique Artisanal incarne une vision où l’artisanat devient un langage universel. Nos créations sont façonnées à la main, avec passion et précision, afin d’offrir des pièces uniques qui résonnent avec l’âme de l’Afrique. Chaque sac et chaque bijou est une invitation au voyage, un hommage à la beauté brute et authentique des traditions réinventées pour le monde d’aujourd’hui.",
		name: 'Philosophie de la marque',
		designation: '',
	},
	{
		src: '/image/banniere/sac poser sur pied banniere.webp',
		quote:
			"Chez La Fabrique Artisanal, nous croyons en un artisanat éthique et durable. En collaborant avec des artisans locaux, nous valorisons un savoir-faire ancestral tout en soutenant des communautés créatives. Nos sacs et bijoux ne sont pas de simples accessoires : ils sont le reflet d’une histoire partagée, d’un patrimoine qui se transmet et s’adapte avec élégance aux modes de vie modernes.",
		name: 'Engagement et valeurs',
		designation: '',
	},
];

export default function OurStory() {
	return (
		<section className="bg-[var(--background-secondary)] py-16 sm:py-24">
			<div className="mx-auto flex max-w-7xl justify-center px-6 lg:px-8">
				<CircularTestimonials
					testimonials={storyTestimonials}
					autoplay={false}
					colors={{
						name: 'var(--text-primary)',
						testimony: 'var(--text-primary)',
						designation: 'transparent',
						arrowBackground: 'var(--text-primary)',
						arrowHoverBackground: 'var(--accent-color)',
					}}
				/>
			</div>
			<style jsx global>{`
				.testimonial-container {
					max-width: 100% !important;
				}
				.testimonial-content .name {
					font-family: var(--font-playfair);
					font-size: 2.5rem;
					line-height: 1.2;
					font-weight: 700;
				}
				.testimonial-content .quote {
					font-family: var(--font-montserrat);
					font-size: 1rem;
				}
				.testimonial-grid {
					display: flex !important;
					flex-direction: column !important;
					align-items: center;
					gap: 2rem !important;
				}
				.testimonial-content {
					order: 1;
					width: 100%;
					text-align: center;
				}
				.image-container {
					order: 2;
				}
				@media (min-width: 1024px) {
					.testimonial-grid {
						display: grid !important;
						grid-template-columns: 1fr 1fr !important;
						align-items: center;
						gap: 5rem !important;
					}
					.testimonial-content {
						order: 1;
						grid-column-start: 1;
						grid-row-start: 1;
						text-align: left;
					}
					.image-container {
						order: 2;
						grid-column-start: 2;
					}
				}
			`}</style>
		</section>
	);
}
