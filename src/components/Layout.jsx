import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen relative px-3 md:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-20 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />
        <div className="absolute top-1/4 right-[-80px] h-80 w-80 rounded-full bg-violet-300/15 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/3 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />
      </div>

      <Navbar serverName="Eclipse Network" />

      <main className="relative z-10 max-w-[1200px] mx-auto pt-28 md:pt-32 pb-14">
        <Outlet />
      </main>

      <footer className="relative z-10 max-w-[1200px] mx-auto pb-10">
        <div className="w-full flex flex-col items-center pt-32 pb-20 text-center">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_0_40px_rgba(139,92,246,0.5)] animate-pulse italic">
              <span className="font-bold text-gradient-purple">Eclipse</span><span className="text-white">Network</span>
            </h2>
            <div className="flex flex-col gap-2">
              <p className="text-violet-100/60 font-black tracking-[0.4em]">© All Rights Reserved 2026</p>
              <p className="text-violet-100/60 font-black tracking-[0.4em]">Non siamo affiliati con Mojang, AB.</p>
              <span className="text-violet-100/60 font-bold tracking-[0.2em] text-sm group">
                By <a className="text-gradient-purple text-lg animate-pulse" href='https://traflix.netlify.app' target='__blank'>𝖎𝕿𝖟𝕱𝖗𝖆𝖓𝖈𝖊𝖘𝖈𝖔</a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
