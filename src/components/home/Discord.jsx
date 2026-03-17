import { motion } from 'framer-motion';
import { ScaleInView } from '../animations';
import mascot from '../../assets/mascott-discord.png';

const Discord = ({ discordInvite, discordOnline }) => {
  return (
    <ScaleInView className="relative mb-20 md:mb-32 px-6" duration={1}>
      <div className="max-w-7xl mx-auto glass-panel p-10 md:p-20 overflow-hidden relative group/discord border-white/5 hover:border-[#5865F2]/30 transition-all duration-700">
        <div className="absolute inset-0 bg-[#5865F2]/5 opacity-0 group-hover/discord:opacity-100 transition-opacity duration-1000" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#5865F2]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <div className="relative group/mascot">
            <div className="absolute inset-0 bg-[#5865F2]/20 blur-[80px] rounded-full scale-125 animate-pulse" />
            <motion.img
              src={mascot}
              alt="SeaMC Discord mascot"
              className="relative z-10 w-full max-w-[320px] mx-auto drop-shadow-[0_20px_40px_rgba(88,101,242,0.4)]"
              animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 10, repeat: Infinity, ease: 'easeInOut' } }}
            />
          </div>

          <div className="text-center md:text-left">
            <span className="chip bg-[#5865F2]/10 border-[#5865F2]/30 text-[#5865F2] font-display mb-6">Discord Ufficiale</span>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 leading-none tracking-tighter">
              UNISCITI ALLA <br /> <span className="text-[#5865F2]">COMMUNITY</span>
            </h2>
            <p className="text-lg md:text-xl text-sky-100/70 font-light leading-relaxed mb-10 max-w-2xl">
              Entra nel nostro Discord. Ricevi supporto, partecipa a eventi e scala i ranghi!
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <motion.a
                href={discordInvite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-[#5865F2] hover:bg-[#4752c4] text-white font-display font-black text-xl rounded-2xl shadow-[0_10px_30px_rgba(88,101,242,0.4)] transition-all flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-7 h-7 rotate-0" fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.756 11.756 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                </svg>
                Entra nel Discord
              </motion.a>

              <div className="flex flex-col items-start">
                <span className="text-3xl font-display font-black text-white">{discordOnline}</span>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-sky-100/40">Membri Attivi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScaleInView>
  );
};

export default Discord;
