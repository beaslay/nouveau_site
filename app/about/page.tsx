import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos - Julien | Escort masculin de prestige',
  description: 'Découvrez l\'univers de Julien, escort masculin de prestige. Une présence authentique pour vos moments d\'exception.',
};

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-warm-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-warm-brown mb-6">
            À propos de Julien
          </h1>
          <p className="text-xl text-warm-brown/80 max-w-2xl mx-auto leading-relaxed">
            Une présence authentique, une compagnie raffinée
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            
            {/* À demi-mot */}
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-warm-brown mb-8">
                À demi-mot
              </h2>
              <p className="text-lg text-warm-brown/80 leading-relaxed max-w-2xl mx-auto">
                Une présence. Un regard. Une voix. Les mots s'effacent. Le reste se devine.
              </p>
            </div>

            {/* Au-delà des apparences */}
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-warm-brown mb-8">
                Au-delà des apparences
              </h2>
              <p className="text-lg text-warm-brown/80 leading-relaxed max-w-2xl mx-auto">
                L'apparence flatte, trompe ou écrase. Je la laisse tomber. Ce qui reste suffit. Ce qui se tient là n'a plus besoin d'être défendu.
              </p>
            </div>

            {/* En vérité */}
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-warm-brown mb-8">
                En vérité
              </h2>
              <p className="text-lg text-warm-brown/80 leading-relaxed max-w-2xl mx-auto">
                En vérité, le désir n'a pas besoin de mots. Il s'insinue, respire, s'éveille dans l'espace laissé libre. Ici, on ne cherche pas : on se trouve.
              </p>
            </div>

            {/* Le Chemin */}
            <div className="text-center">
              <h2 className="text-3xl font-serif font-bold text-warm-brown mb-8">
                Le Chemin
              </h2>
              <p className="text-lg text-warm-brown/80 leading-relaxed max-w-2xl mx-auto">
                Le chemin n'est pas une route qu'on suit. C'est une traversée. L'âme y croise le doute, le vide et les mirages des certitudes faciles. Mais à qui accepte de marcher, degrés après degrés, s'ouvre un espace de liberté, de désir et de quiétude. Je suis là, simplement, pour accompagner ce pas.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}