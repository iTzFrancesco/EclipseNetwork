import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ discordInvite }) => {
  return (
    <footer className="relative bg-eclipse-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-white/50 text-center md:text-left">
          &copy; {new Date().getFullYear()} Eclipse Network. Tutti i diritti riservati.
        </p>
        <div className="flex items-center gap-6">
          <a href={discordInvite} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Discord</a>
          <a href="#" className="text-white/70 hover:text-white transition-colors">Store</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
