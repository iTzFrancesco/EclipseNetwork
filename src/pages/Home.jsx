import React from 'react';
import Hero from '../components/home/Hero';
import Steps from '../components/home/Steps';
import Modes from '../components/home/Modes';
import Features from '../components/home/Features';
import Discord from '../components/home/Discord';

const Home = ({ serverIP, mcPlayers, discordOnline, discordInvite, copyToClipboard, copied }) => {
  return (
    <>
      <Hero discordInvite={discordInvite} />
      <Steps 
        serverIP={serverIP} 
        mcPlayers={mcPlayers} 
        discordOnline={discordOnline} 
        copyToClipboard={copyToClipboard} 
        copied={copied} 
      />
      <Modes />
      <Features />
      <Discord discordInvite={discordInvite} discordOnline={discordOnline} />
    </>
  );
};

export default Home;
