import React from 'react';
import { motion } from 'framer-motion';
import staffData from '../data/staff-list.json';
import { FadeInView, StaggerContainer, StaggerItem } from '../components/animations';
import logo from '../assets/logo-server.png';
import { SITE_CONFIG } from '../lib/constants';

// Mappatura ruoli staff -> colori (definiti in index.css)
// Owner(CEO) -> rosso | Manager -> viola | Admin -> rosso | Developer -> azzurro | Builder -> teal | Mod -> blu | Helper -> verde | ChatMod -> rosa
const STAFF_ROLES = [
  { key: "Owner", color: "red", gradient: "text-gradient-red" },
  { key: "Manager", color: "purple", gradient: "text-gradient-purple" },
  { key: "Sr. Admin", color: "red", gradient: "text-gradient-red" },
  { key: "Admin", color: "red", gradient: "text-gradient-red" },
  { key: "Sr. Developer", color: "cyan", gradient: "text-gradient-cyan" },
  { key: "Developer", color: "cyan", gradient: "text-gradient-cyan" },
  { key: "Jr. Developer", color: "cyan", gradient: "text-gradient-cyan" },
  { key: "Builder", color: "teal", gradient: "text-gradient-teal" },
  { key: "Sr. Mod", color: "blue", gradient: "text-gradient-blue" },
  { key: "Mod", color: "blue", gradient: "text-gradient-blue" },
  { key: "Jr. Mod", color: "blue", gradient: "text-gradient-blue" },
  { key: "Helper", color: "green", gradient: "text-gradient-green" },
  { key: "Jr. Helper", color: "green", gradient: "text-gradient-green" },
  { key: "ChatMod", color: "pink", gradient: "text-gradient-pink" },
];

const getColorClasses = (color) => {
  const colors = {
    // Owner (CEO) - rosso
    red: { glow: "bg-red-500/10", border: "border-red-400/30", text: "text-red-300", accent: "bg-red-400/40" },
    // Manager - viola
    purple: { glow: "bg-purple-500/10", border: "border-purple-400/30", text: "text-purple-300", accent: "bg-purple-400/40" },
    // Ruoli Developer - azzurro
    cyan: { glow: "bg-cyan-500/10", border: "border-cyan-400/30", text: "text-cyan-300", accent: "bg-cyan-400/40" },
    // Builder - teal
    teal: { glow: "bg-teal-500/10", border: "border-teal-400/30", text: "text-teal-300", accent: "bg-teal-400/40" },
    // Ruoli Helper - verde
    green: { glow: "bg-green-500/10", border: "border-green-400/30", text: "text-green-300", accent: "bg-green-400/40" },
    // Ruoli Mod - blu
    blue: { glow: "bg-blue-500/10", border: "border-blue-400/30", text: "text-blue-300", accent: "bg-blue-400/40" },
    // ChatMod - rosa
    pink: { glow: "bg-pink-500/10", border: "border-pink-400/30", text: "text-pink-300", accent: "bg-pink-400/40" },
    // NON USATO - tenuto per uso futuro: oro, violetto
    gold: { glow: "bg-amber-500/10", border: "border-amber-400/30", text: "text-amber-300", accent: "bg-amber-400/40" },
    violet: { glow: "bg-violet-500/10", border: "border-violet-400/30", text: "text-violet-300", accent: "bg-violet-400/40" },
  };
  return colors[color] || colors.purple;
};

const StaffCard = ({ member, color, size = 2 }) => {
  const colors = getColorClasses(color);
  const isSingle = size === 1;
  const isSmall = size >= 3;
  
  const imageSize = isSingle ? "w-28 md:w-32" : isSmall ? "w-32 md:w-36" : "w-36 md:w-40";
  const padding = isSingle ? "p-5" : isSmall ? "p-6" : "p-8";
  
  return (
    <div className="relative group/member h-full">
      <div className={`absolute -inset-4 md:-inset-6 ${colors.glow} blur-[60px] md:blur-[80px] rounded-full opacity-0 group-hover/member:opacity-100 transition-opacity duration-700 pointer-events-none`} />
      
      <div className={`glass-panel ${padding} border-white/5 hover:${colors.border} transition-all duration-500 flex flex-col items-center text-center h-full overflow-hidden`}>
        <div className="relative shrink-0 flex items-center justify-center mb-4 md:mb-6">
          <motion.div 
            className={`absolute -inset-3 md:-inset-4 ${colors.glow.replace('/10', '/20')} blur-2xl rounded-full`}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.img 
            src={`https://mc-heads.net/body/${member.mcName}/right`} 
            alt={member.mcName} 
            className={`relative z-10 ${imageSize} h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover/member:scale-105 transition-transform duration-500`}
          />
        </div>

        <div className="space-y-2 md:space-y-3 flex-1 flex flex-col justify-center">
          <div>
            <h2 className={`${isSingle ? 'text-2xl md:text-3xl' : isSmall ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'} font-display font-black ${getGradientClass(color)} mb-1`}>
              {member.displayName}
            </h2>
            <div className="flex items-center gap-2 justify-center">
              <span className={`h-px w-4 md:w-6 ${colors.accent}`} />
              <p className="text-white-300 font-bold text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
                {member.mcName}
              </p>
              <span className={`h-px w-4 md:w-6 ${colors.accent}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getGridClasses = (count) => {
  if (count === 1) return "grid-cols-1 max-w-md mx-auto";
  if (count === 2) return "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto";
  return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
};

const getCardSize = (count) => {
  if (count === 1) return "p-6";
  if (count === 2) return "p-6 md:p-8";
  return "p-6 md:p-8";
};

const getGradientClass = (color) => {
  const gradients = {
    // Owner (CEO) - rosso
    red: 'text-gradient-red',
    // Manager - viola
    purple: 'text-gradient-purple',
    // Ruoli Developer - azzurro
    cyan: 'text-gradient-cyan',
    // Builder - teal
    teal: 'text-gradient-teal',
    // Ruoli Helper - verde
    green: 'text-gradient-green',
    // Ruoli Mod - blu
    blue: 'text-gradient-blue',
    // ChatMod - rosa
    pink: 'text-gradient-pink',
    // NON USATO - tenuto per uso futuro: oro, smeraldo, violetto
    gold: 'text-gradient-gold',
    emerald: 'text-gradient-emerald',
    violet: 'text-gradient-violet',
  };
  return gradients[color] || 'text-gradient-purple';
};

const StaffRoleSection = ({ role, label, members, color, index }) => {
  if (!members || members.length === 0) return null;
  
  const gridClasses = getGridClasses(members.length);
  const cardPadding = getCardSize(members.length);
  const displayLabel = label || role;
  const gradientClass = getGradientClass(color);
  
  return (
    <section className="relative py-10">
      <FadeInView delay={0.1}>
        <div className='flex mb-4 justify-center item-center'>
          <h2 className={`font-bold text-4xl md:text-6xl ${gradientClass}`}>{displayLabel}</h2>
        </div>
      </FadeInView>
      
      <div className={`grid ${gridClasses} gap-6 lg:gap-8`}>
        {members.map((member, idx) => (
          <FadeInView 
            key={member.displayName} 
            direction="up"
            delay={0.1 + idx * 0.05}
            duration={0.6}
          >
            <StaffCard member={member} color={color} size={members.length} />
          </FadeInView>
        ))}
      </div>
    </section>
  );
};

const Staff = () => {

  return (
    <div className="space-y-12 md:space-y-20 pt-24 px-6 max-w-7xl mx-auto">
      <section className="relative overflow-hidden rounded-[3rem] p-12 md:p-24 text-center group font-display">
        <div className="absolute inset-0 bg-abyss-900/40 backdrop-blur-2xl z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.15)_0%,transparent_50%)] z-0" />
        
        <div className="relative z-10">
          <FadeInView direction="down" duration={0.8}>
            <h1 className="font-black text-5xl md:text-8xl text-white tracking-tighter leading-none mb-6">
              Il nostro Team
            </h1>
          </FadeInView>

          <FadeInView direction="up" delay={0.2} duration={0.8}>
            <p className="text-xl md:text-2xl text-violet-100/60 max-w-3xl mx-auto font-light leading-relaxed">
              Le menti dietro la visione del network, impegnate nello sviluppo e nella crescita di <span className="text-gradient-purple font-bold">Eclipse</span><span className="text-white font-bold">Network</span>.
            </p>
          </FadeInView>
        </div>
      </section>

      {STAFF_ROLES.map((role, index) => (
        <StaffRoleSection 
          key={role.key} 
          role={role.key}
          label={role.label}
          members={staffData[role.key]} 
          color={role.color}
          index={index}
        />
      ))}

      <section className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center glass-panel border-purple-400/20 mb-20 shadow-2xl">
        <div className="absolute inset-0 bg-purple-500/5 z-0" />
        <div className="relative z-10">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-8"
          >
            <img src={logo} alt="EclipseNetwork Logo" className="w-24 md:w-32 mx-auto drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]" />
          </motion.div>
          
          <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-6">Unisciti al Team</h2>
          <p className="text-xl text-violet-100/60 max-w-2xl mx-auto mb-10 font-light">
            Cerchiamo persone motivate per far crescere il network. Invia la tua candidatura sul Discord ufficiale.
          </p>
          
          <motion.a 
            href={SITE_CONFIG.discordInvite} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="eclipse-button px-10 py-5 text-xl font-display bg-purple-500/10 border-purple-400/30 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400/50"
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
