'use client';

import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour suivre la correspondance d'une media query CSS.
 * @param query - La chaîne de la media query à évaluer (ex: '(max-width: 768px)').
 * @returns `true` si la media query correspond, sinon `false`.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // S'assure que le code ne s'exécute que côté client
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Met à jour l'état initial
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      
      // Fonction de rappel pour les changements
      const listener = () => {
        setMatches(media.matches);
      };
      
      // Ajoute l'écouteur d'événement
      // La méthode addEventListener est préférée pour les versions plus récentes des navigateurs
      media.addEventListener('change', listener);
      
      // Nettoyage : supprime l'écouteur lorsque le composant est démonté
      return () => {
        media.removeEventListener('change', listener);
      };
    }
  }, [matches, query]);

  return matches;
}
