import { motion } from 'framer-motion';
import { FadeInView, StaggerContainer, StaggerItem } from '../animations';
import smpIcon from '../../assets/logo-smp.png';

const modeCards = [
  {
    title: 'SeaSMP',
    body: 'Modalita survival principale con economia, gang, missioni ed eventi.',
    accent: 'border-sky-300/30 bg-sky-400/10',
  },
  /*{
    title: 'ElyBox',
    body: 'Modalita veloce e competitiva, ideale per sfide dinamiche e gameplay rapido.',
    accent: 'border-amber-200/35 bg-amber-300/10',
  },*/
];

const Modes = () => {
  return (
    <section className="relative mb-24 px-6 py-20 overflow-hidden rounded-[3rem] mx-3 md:mx-6">
      <div className="absolute inset-0 bg-abyss-900/40 backdrop-blur-2xl z-0" />
      <div className="absolute inset-0 bg-biolume z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeInView direction="up" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">Le nostre Modalità</h2>
            <p className="text-xl text-sky-100/60 max-w-2xl mx-auto font-light leading-relaxed">
              Ogni modalita offre un'esperienza diversa, scegli quella giusta per il tuo stile di gioco.
            </p>
          </div>
        </FadeInView>

        <StaggerContainer className="flex items-center justify-center" staggerDelay={0.2}>
          {modeCards.map((mode) => (
            <StaggerItem key={mode.title}>
              <motion.article className="group/mode p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent hover:from-ocean-400/30 transition-all duration-700" whileHover={{ scale: 1.02 }}>
                <div className="z-10 flex-items-center bg-abyss-950/90 rounded-[2.4rem] p-8 md:p-12 overflow-hidden h-full ">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-500/5 blur-[80px] rounded-full group-hover/mode:bg-ocean-500/10 transition-all" />

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 flex-1">
                    <div className="relative shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/5 bg-white/5 flex items-center justify-center overflow-hidden group-hover/mode:border-ocean-400/40 transition-all duration-700 relative z-10">
                        <img src={smpIcon} alt="mode icon" className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover/mode:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="absolute inset-0 bg-ocean-500/20 blur-2xl rounded-full opacity-0 group-hover/mode:opacity-100 transition-opacity" />
                    </div>

                    <div className="text-center md:text-left">
                      <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-4 tracking-tight group-hover/mode:text-ocean-300 transition-colors">
                        {mode.title}
                      </h3>
                      <p className="text-lg md:text-xl text-sky-100/60 leading-relaxed font-light mb-8 max-h-[4.5rem]">{mode.body}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Modes;
