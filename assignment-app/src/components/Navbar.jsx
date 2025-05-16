import React from 'react';
import { NavLink } from 'react-router-dom';
import obsLogo from '../assets/obs-logo.png';
import discord from '../assets/discord.png';
import twitter from '../assets/twitter.png';
import mastodon from '../assets/sponsors/mastodon.png';
import github from '../assets/sponsors/github.png';

export default function Header() {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Search', to: '/search' },
    { label: 'Download', to: '/download' },
    { label: 'News', to: '/news' },
    { label: 'Help', to: '/help' },
    { label: 'Forum', to: '/forum' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#23286C] text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-start">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-4">
          <img src={obsLogo} alt="OBS Logo" className="w-12 h-12" />
          <div className="leading-tight">
            <div className="text-3xl font-extrabold">OBS</div>
            <div className="text-xl font-extrabold">Open Broadcaster Software</div>
          </div>
        </div>

        {/* Right: Navigation and Icons */}
        <div className="flex flex-col items-end">
          {/* Nav Items */}
          <nav className="flex gap-6 mb-2">
            {navItems.map(({ label, to }, idx) => (
              <NavLink
                key={idx}
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white underline underline-offset-4 decoration-blue-400'
                    : 'text-white hover:underline'
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Social Icons and Button */}
          <div className="flex items-center gap-2">
            <a href="#"><img src={discord} alt="Discord" className="h-8 w-8 bg-[#5865F2] p-1 rounded-sm" /></a>
            <a href="#"><img src={twitter} alt="Twitter" className="h-8 w-8 bg-[#1DA1F2] p-1 rounded-sm" /></a>
            <a href="#"><img src={mastodon} alt="Mastodon" className="h-8 w-8 bg-[#6364FF] p-1 rounded-sm" /></a>
            <a href="#"><img src={github} alt="GitHub" className="h-8 w-8 bg-black p-1 rounded-sm" /></a>
            <a
              href="#"
              className="bg-[#36A300] text-white px-4 py-2 rounded hover:bg-[#2c8500] font-semibold flex items-center ml-2"
            >
              💚 Contribute
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
