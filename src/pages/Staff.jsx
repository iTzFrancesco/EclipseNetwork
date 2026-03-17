import React from 'react';
import { motion } from 'framer-motion';
import staffData from '../data/staff-list.json';
import { FadeInView, StaggerContainer, StaggerItem } from '../components/animations';
import logo from '../assets/logo-server.png';
import { SITE_CONFIG } from '../lib/constants';

const Staff = () => {
  const owners = staffData["Owner"] || [];

  return (
    <div className="space-y-12 md:space-y-20 pt-24 px-6 max-w-7xl mx-auto">
      <section className="relative overflow-hidden rounded-[3rem] p-12 md:p-24 text-center group font-display">
        <div className="absolute inset-0 bg-abyss-900/40 backdrop-blur-2xl z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,184,166,0.15)_0%,transparent_50%)] z-0" />
        
        <div className="relative z-10">
          <FadeInView direction="down" duration={0.8}>
            <h1 className="font-black text-5xl md:text-8xl text-white tracking-tighter leading-none mb-6">
              Il nostro Team
            </h1>
          </FadeInView>

          <FadeInView direction="up" delay={0.2} duration={0.8}>
            <p className="text-xl md:text-2xl text-sky-100/60 max-w-3xl mx-auto font-light leading-relaxed">
              Le menti dietro la visione del network, impegnate nello sviluppo e nella crescita di <span className="text-gradient-ocean font-bold">Sea</span><span className="text-white font-bold">MC</span>.
            </p>
          </FadeInView>
        </div>
      </section>

        
      
      <section className="relative py-10">
        <FadeInView
          delay={0.2}>
          <div className='flex mb-4 justify-center item-center'>
            <h2 className='text-gradient-ocean font-bold text-6xl'>Owner</h2>
          </div>
        </FadeInView>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {owners.map((owner, index) => (
            <FadeInView 
              key={owner.displayName} 
              direction="up"
              delay={0.2 + index * 0.1}
              duration={0.8}
            >
              <div className="relative group/owner h-full">
                {/* Background Glow */}
                <div className="absolute -inset-6 bg-ocean-500/10 blur-[80px] rounded-full opacity-0 group-hover/owner:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="glass-panel p-8 border-white/5 hover:border-ocean-400/30 transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden">
                  {/* Full Body Skin */}
                  <div className="relative shrink-0 flex items-center justify-center mb-8">
                    <motion.div 
                      className="absolute -inset-4 bg-ocean-400/10 blur-2xl rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.img 
                      src={`https://mc-heads.net/body/${owner.mcName}/right`} 
                      alt={owner.mcName} 
                      className="relative z-10 w-40 md:w-44 h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover/owner:scale-105 transition-transform duration-500"
                    />
                  </div>


                  {/* Owner Info */}
                  <div className="space-y-4 flex-1 flex flex-col justify-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-display font-black text-gradient-ocean mb-1">
                        {owner.displayName}
                      </h2>
                      <div className="flex items-center gap-2 justify-center">
                        <span className="h-px w-6 bg-ocean-400/40" />
                        <p className="text-white-300 font-bold text-xs uppercase tracking-[0.3em]">
                          {owner.mcName}
                        </p>
                        <span className="h-px w-6 bg-ocean-400/40" />
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center glass-panel border-coral-400/20 mb-20 shadow-2xl">
        <div className="absolute inset-0 bg-coral-500/5 z-0" />
        <div className="relative z-10">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-8"
          >
            <img src={logo} alt="SeaMC Logo" className="w-24 md:w-32 mx-auto drop-shadow-[0_0_30px_rgba(251,113,133,0.3)]" />
          </motion.div>
          
          <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-6">Unisciti al Team</h2>
          <p className="text-xl text-sky-100/60 max-w-2xl mx-auto mb-10 font-light">
            Cerchiamo persone motivate per far crescere il network. Invia la tua candidatura sul Discord ufficiale.
          </p>
          
          <motion.a 
            href={SITE_CONFIG.discordInvite} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sea-button px-10 py-5 text-xl font-display bg-coral-500/10 border-coral-400/30 text-coral-300 hover:bg-coral-500/20 hover:border-coral-400/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Invia Candidatura
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Staff;
