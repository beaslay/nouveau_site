'use client';

import { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const publicImages = [
  { src: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', title: 'Portrait élégant 1' },
  { src: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', title: 'Portrait élégant 2' },
  { src: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', title: 'Portrait élégant 3' },
  { src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', title: 'Portrait élégant 4' }
];

const privateImages = [
  { src: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', title: 'Portrait exclusif 1' },
  { src: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', title: 'Portrait exclusif 2' },
  { src: 'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', title: 'Portrait exclusif 3' },
  { src: 'https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', title: 'Portrait exclusif 4' }
];

export default function Gallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'eden') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Mot de passe incorrect. Veuillez réessayer.');
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-warm-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-warm-brown mb-6">
            Galerie
          </h1>
          <p className="text-xl text-warm-brown/80 max-w-2xl mx-auto leading-relaxed">
            Accédez à la galerie exclusive de Julien. Un mot de passe vous est demandé pour préserver la confidentialité.
          </p>
        </div>
      </section>

      {/* Public Gallery */}
      <section className="py-16 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-warm-brown mb-8 text-center">
            Galerie Publique
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publicImages.map((image, index) => (
              <div 
                key={index} 
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-warm-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-warm-cream text-center">
                      <h3 className="text-lg font-serif font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Gallery Section */}
      <section className="py-16 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-warm-brown mb-8 text-center">
            Galerie Privée
          </h2>
          
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto">
              <div className="bg-warm-cream rounded-lg shadow-lg p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-warm-gold/10 rounded-full mb-4">
                    <Lock size={32} className="text-warm-gold" />
                  </div>
                  <p className="text-warm-brown/70">
                    Entrez le mot de passe pour accéder à la galerie exclusive.
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-warm-brown mb-2">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:ring-2 focus:ring-warm-gold focus:border-transparent bg-warm-cream"
                        placeholder="Entrez le mot de passe"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-warm-brown/50 hover:text-warm-brown"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  <Button type="submit" className="w-full bg-warm-gold hover:bg-warm-gold/90 text-warm-cream">
                    Accéder à la galerie privée
                  </Button>
                </form>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {privateImages.map((image, index) => (
                <div 
                  key={index} 
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-warm-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-warm-cream text-center">
                        <h3 className="text-lg font-serif font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-warm-brown/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Image de la galerie"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-warm-cream text-4xl font-light hover:text-warm-gold"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}