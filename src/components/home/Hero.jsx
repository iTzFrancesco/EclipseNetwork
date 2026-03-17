import { motion } from 'framer-motion';
import { FadeInView } from '../animations';
import logo from '../../assets/logo-server.png';
import { SITE_CONFIG } from '../../lib/constants';

const Hero = ({ discordInvite }) => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center overflow-hidden mb-12 md:mb-16 pt-32 pb-20 px-6 rounded-[2.5rem] shadow-2xl mx-3 md:mx-6 group">
      <div className="absolute inset-0 bg-abyss-950 z-0" />
      <div className="absolute inset-0 bg-deep-gradient opacity-80 z-0" />
      <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay z-0" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="light-ray opacity-30" />
        <div className="light-ray opacity-20" style={{ transform: 'translateX(-30%) rotate(-15deg)' }} />
        <div className="light-ray opacity-10" style={{ transform: 'translateX(-70%) rotate(10deg)' }} />

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0px',
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
            }}
            animate={{ y: -1000, x: [0, Math.random() * 40 - 20, 0], opacity: [0.6, 0.3, 0] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 5, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <FadeInView direction="down" duration={1}>
          <div className="relative mb-12 group/logo">
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full scale-150 animate-glow-pulse" />
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative z-10">
              <img src={logo} alt="EclipseNetwork logo" className="w-48 md:w-72 drop-shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-transform duration-700 group-hover/logo:scale-110" />
            </motion.div>
          </div>
        </FadeInView>

        <FadeInView direction="up" delay={0.3} duration={0.8}>
          <h1 className="font-display font-black text-6xl md:text-9xl tracking-tighter leading-[0.85] text-white">
            <span className="text-glow-purple">Eclipse </span>
            <span className="relative">Network</span>
          </h1>
        </FadeInView>

        <FadeInView direction="up" delay={0.4} duration={0.8}>
          <p className="mt-8 text-xl md:text-2xl text-violet-100/70 max-w-2xl leading-relaxed font-light">
            Benvenuto nel network ufficiale di <span className="font-bold text-gradient-purple">Eclipse</span>. Vieni a giocare con noi su <span className="text-purple-300 font-semibold">{SITE_CONFIG.serverIP}</span>, entra nelle nostre modalità e partecipa ai nuovi eventi con premi in palio.
          </p>
        </FadeInView>

        <FadeInView direction="up" delay={0.6} duration={0.8}>
          <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6">
            <motion.a
              href="#come-entrare"
              className="eclipse-button px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-display group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Inizia a Giocare
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.a>

            <motion.a
              href={discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 md:px-12 py-4 md:py-5 rounded-xl border border-white/10 bg-white/5 text-white font-bold text-lg md:text-xl backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 text-[#5865F2] transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.756 11.756 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
              </svg>
              Community
            </motion.a>
          </div>
        </FadeInView>
      </div>

      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex lg:hidden flex-col items-center gap-2" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
