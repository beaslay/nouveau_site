'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Bot } from 'lucide-react';
import { toast } from 'sonner';

const SecretaryAI = () => {
  return (
    <div className="mt-12 p-6 bg-warm-champagne/50 rounded-lg border border-warm-beige">
      <div className="flex items-center mb-4">
        <Bot className="w-6 h-6 text-warm-gold mr-2" />
        <h3 className="text-lg font-semibold text-warm-brown">Secrétaire IA</h3>
      </div>
      <p className="text-warm-brown/70">
        Secrétaire IA disponible bientôt pour répondre à vos demandes 24/7.
      </p>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Merci ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-warm-champagne">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-warm-brown mb-6">
            Contactez Julien
          </h1>
          <p className="text-xl text-warm-brown/80 max-w-2xl mx-auto leading-relaxed">
            Pour réserver ou poser vos questions en toute discrétion, utilisez ce formulaire.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warm-beige/30 rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-warm-brown mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:ring-2 focus:ring-warm-gold focus:border-transparent bg-warm-cream"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-warm-brown mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:ring-2 focus:ring-warm-gold focus:border-transparent bg-warm-cream"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-warm-brown mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-warm-beige rounded-lg focus:ring-2 focus:ring-warm-gold focus:border-transparent resize-none bg-warm-cream"
                  placeholder="Décrivez votre demande en toute confidentialité..."
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto px-8 bg-warm-gold hover:bg-warm-gold/90 text-warm-cream"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Envoi en cours...'
                  ) : (
                    <>
                      Envoyer le message <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            <SecretaryAI />
          </div>
        </div>
      </section>
    </div>
  );
}