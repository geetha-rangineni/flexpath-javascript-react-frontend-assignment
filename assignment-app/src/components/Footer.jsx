import React from 'react';

export default function Footer() {
  const languages = [
    'Čeština', 'Dansk', 'Deutsch', 'Español', 'Euskara', 'Suomi',
    'Français', 'Magyar', '日本語', '한국어', 'Português do Brasil',
    'русский', 'Svenska', 'Türkçe', 'українська', '中文(简体)'
  ];

  return (
    <footer className="bg-black text-white py-12 text-sm text-center mt-12">
      <div className="max-w-screen-xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-left">
        <div>
          <h3 className="text-lg font-bold mb-3">OBS Project</h3>
          <div className="flex gap-4 mt-2">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-discord"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">OBS Studio</h3>
          <ul>
            <li><a href="#" className="hover:underline">Download</a></li>
            <li><a href="#" className="hover:underline">Ideas</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Contribute</h3>
          <ul>
            <li><a href="#" className="hover:underline">GitHub</a></li>
            <li><a href="#" className="hover:underline">Open Collective</a></li>
            <li><a href="#" className="hover:underline">Patreon</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">Support</h3>
          <ul>
            <li><a href="#" className="hover:underline">Knowledge Base</a></li>
            <li><a href="#" className="hover:underline">Discord</a></li>
            <li><a href="#" className="hover:underline">Forums</a></li>
            <li><a href="#" className="hover:underline">Help Portal</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-xs text-gray-400 text-center">
        <p>
          © 2012 - 2025. OBS and OBS Studio are created and maintained by Lain. Development by <a href="#" className="underline">OBS Studio Contributors</a>.
        </p>
        <p>
          Website designed and created by <a href="#" className="underline">Warchamp7</a>, powered by <a href="#" className="underline">Kirby CMS</a>. Downloads powered by <a href="#" className="underline">Fastly</a>.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-500">
        {languages.map((lang, idx) => (
          <span key={idx} className="hover:underline cursor-pointer">{lang}</span>
        ))}
      </div>
    </footer>
  );
}
