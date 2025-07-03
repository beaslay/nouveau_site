import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-champagne via-warm-cream to-warm-beige">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-warm-brown mb-8 leading-tight">
          Julien
        </h1>
        
        <p className="text-xl sm:text-2xl text-warm-gold mb-6 font-medium">
          Escort masculin de prestige — Compagnie confidentielle
        </p>

        <p className="text-lg sm:text-xl text-warm-brown/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Une présence raffinée et discrète pour accompagner vos moments d'exception, en toute élégance et confidentialité.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8 py-6 bg-warm-gold hover:bg-warm-gold/90 text-warm-cream">
            <Link href="/services">
              Découvrir mes prestations <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-warm-gold text-warm-gold hover:bg-warm-gold hover:text-warm-cream">
            <Link href="/contact">
              Me contacter
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;