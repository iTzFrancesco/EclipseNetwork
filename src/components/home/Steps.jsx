import { motion } from 'framer-motion';
import { FadeInView, StaggerContainer, StaggerItem, ScaleInView } from '../animations';
import mcLogo from '../../assets/logo-minecraft.png';

const steps = [
  {
    title: 'Apri Minecraft',
    text: 'Avvia Minecraft Java Edition e apri la sezione Multiplayer',
  },
  {
    title: 'Aggiungi il server',
    text: 'Inserisci l\'ip: play.seamc.it',
  },
  {
    title: 'Entra e gioca',
    text: 'Collegati al network e inizia subito la tua avventura nelle nostre modalità',
  },
];

const Steps = ({ serverIP, mcPlayers, discordOnline, copyToClipboard, copied }) => {
  return (
    <section id="come-entrare" className="relative mb-20 md:mb-24 px-6 scroll-mt-24">
      <FadeInView direction="up" duration={0.8}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">Come Entrare</h2>
          <div className="h-1.5 w-24 bg-ocean-400 mx-auto rounded-full" />
        </div>
      </FadeInView>

      <StaggerContainer className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto" staggerDelay={0.15}>
        {steps.map((step, idx) => (
          <StaggerItem key={step.title}>
            <motion.article className="relative glass-panel p-8 md:p-10 group/step border-white/5 hover:border-ocean-400/30 transition-all duration-300 h-full" whileHover={{ y: -10 }}>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-ocean-400 to-sea-glow rounded-2xl flex items-center justify-center font-display font-black text-3xl text-abyss-950 shadow-glow-cyan">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4 mt-4">{step.title}</h3>
              <p className="text-sky-100/60 leading-relaxed text-lg">{step.text}</p>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-ocean-500/5 blur-3xl rounded-full group-hover/step:bg-ocean-500/10 transition-colors" />
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <ScaleInView duration={0.8}>
        <div className="mt-12 max-w-5xl mx-auto grid gap-6 md:grid-cols-[1.5fr_1fr_1fr] items-stretch">
          <motion.button
            type="button"
            onClick={copyToClipboard}
            className="relative overflow-hidden group/copy p-6 rounded-3xl border border-white/5 bg-abyss-900/40 backdrop-blur-xl flex flex-col items-start"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-500/10 via-transparent to-transparent opacity-0 group-hover/copy:opacity-100 transition-opacity" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-2">Server IP</span>
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-display font-black text-ocean-400">{serverIP}</span>
              <div className={`p-2 rounded-lg ${copied ? 'bg-emerald-500' : 'bg-white/10'} transition-colors`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {copied ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  )}
                </svg>
              </div>
            </div>
            <p className="text-x mt-3 text-sky-100/40 font-medium">{copied ? 'Link Copiato' : 'Clicca per copiare l\'ip'}</p>
          </motion.button>
          
          <motion.article whileHover={{ scale: 1.02 }}>
            <div className="p-6 rounded-3xl border h-full border-white/5 bg-abyss-900/40 backdrop-blur-xl flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center p-3 border border-sky-500/20">
                <img src={mcLogo} alt="Minecraft" className="w-full scale-150 h-full object-contain" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-sky-400 font-bold">Online</p>
                <p className="text-3xl font-display font-black text-white">{mcPlayers}</p>
              </div>
            </div>
          </motion.article>

          <motion.article whileHover={{ scale: 1.02 }}>
            <div className="p-6 h-full rounded-3xl border border-white/5 bg-abyss-900/40 backdrop-blur-xl flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#5865F2]/10 flex items-center justify-center p-3 border border-[#5865F2]/20 text-[#5865F2]">
                <svg className="w-full h-full rotate-0" fill="currentColor" fillRule="evenodd" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.756 11.756 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.579.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#5865F2] font-bold">Community</p>
                <p className="text-3xl font-display font-black text-white">{discordOnline}</p>
              </div>
            </div> 
          </motion.article>
        </div>
      </ScaleInView>
    </section>
  );
};

export default Steps;
