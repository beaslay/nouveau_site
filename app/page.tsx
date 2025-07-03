import { Metadata } from 'next';
import Hero from '@/components/hero';

export const metadata: Metadata = {
  title: 'Julien - Escort masculin de prestige | Compagnie confidentielle',
  description: 'Une présence raffinée et discrète pour accompagner vos moments d\'exception, en toute élégance et confidentialité.',
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}