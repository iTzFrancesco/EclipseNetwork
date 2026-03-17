import { motion } from 'framer-motion';
import { FadeInView, StaggerContainer, StaggerItem } from '../animations';

const featureCards = [
  {
    title: 'Progressione Bilanciata',
    body: 'Un sistema di reward e progressione pensato per valorizzare il tuo tempo di gioco.',
  },
  {
    title: 'Eventi con Premi',
    body: 'Eventi settimanali con ricompense dedicate per mantenere il gameplay sempre attivo.',
  },
  {
    title: 'Supporto Attivo',
    body: 'Uno staff sempre presente su Discord e in game per aiutarti in ogni momento.',
  },
];

const Features = () => {
  return (
    <section className="relative mb-24 px-6 py-20">
      <FadeInView direction="up" duration={0.8}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">Perchè Eclipse Network</h2>
          <div className="h-1.5 w-24 bg-purple-400 mx-auto rounded-full" />
        </div>
      </FadeInView>

      <StaggerContainer className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto" staggerDelay={0.1}>
        {featureCards.map((card) => (
          <StaggerItem key={card.title}>
            <motion.article className="glass-panel p-8 md:p-10 border-white/5 hover:border-purple-400/30 transition-all duration-500 h-full group/feat" whileHover={{ y: -8 }}>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover/feat:scale-110 transition-transform">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{card.title}</h3>
              <p className="text-violet-100/60 leading-relaxed text-lg font-light">{card.body}</p>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default Features;
