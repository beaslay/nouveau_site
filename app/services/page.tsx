import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Clock, Shield, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prestations - Julien | Escort masculin de prestige',
  description: 'Offres exclusives pensées pour satisfaire vos désirs les plus raffinés. Tarifs et prestations de compagnie haut de gamme.',
};

export default function Services() {
  const services = [
    {
      duration: '2 heures',
      price: '300 €',
      icon: Clock,
      description: 'Compagnie raffinée pour vos sorties courtes'
    },
    {
      duration: '3 heures',
      price: '400 €',
      icon: Star,
      description: 'Accompagnement élégant pour vos événements'
    },
    {
      duration: 'Nuit complète',
      price: '2 500 €',
      icon: Shield,
      description: 'Présence exclusive et discrète'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-warm-champagne to-warm-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-warm-brown mb-6">
            Prestations
          </h1>
          <p className="text-xl text-warm-brown/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Offres exclusives pensées pour satisfaire vos désirs les plus raffinés.
          </p>
        </div>
      </section>

      {/* Services Table */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warm-champagne/50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-warm-brown mb-12 text-center">
              Tarifs
            </h2>
            
            <div className="space-y-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-6 bg-warm-cream rounded-lg hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center">
                      <div className="text-warm-gold mr-4">
                        <IconComponent size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-semibold text-warm-brown">
                          {service.duration}
                        </h3>
                        <p className="text-warm-brown/70">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-warm-gold">
                        {service.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-warm-gold hover:bg-warm-gold/90 text-warm-cream">
                <Link href="/contact">
                  Réserver maintenant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-warm-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-warm-brown mb-8">
            Discrétion & Élégance
          </h2>
          <p className="text-lg text-warm-brown/80 leading-relaxed max-w-2xl mx-auto mb-12">
            Chaque rencontre est unique et adaptée à vos besoins spécifiques. La confidentialité et le respect mutuel sont au cœur de mes prestations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-warm-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-warm-brown mb-2">Confidentialité</h3>
              <p className="text-warm-brown/70">Discrétion absolue garantie</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-warm-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-warm-brown mb-2">Élégance</h3>
              <p className="text-warm-brown/70">Présence raffinée et distinguée</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-warm-gold mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-warm-brown mb-2">Ponctualité</h3>
              <p className="text-warm-brown/70">Respect des horaires convenus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}