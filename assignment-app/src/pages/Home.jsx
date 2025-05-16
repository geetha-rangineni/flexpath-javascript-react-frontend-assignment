import React, { useState } from 'react';
import obs from '../assets/image.png';
import visualSearchIcon from '../assets/visual-search.png';
import youtube from '../assets/sponsors/youtube.png';
import logitech from '../assets/sponsors/logitech.png';
import twitch from '../assets/sponsors/twitch.png';
import nvidia from '../assets/sponsors/nvidia.png';
import amd from '../assets/sponsors/amd.png';
import intel from '../assets/sponsors/intel.png';
import yamaha from '../assets/sponsors/yamaha.png';
import qualcomm from '../assets/sponsors/qualcomm.png';
import elgato from '../assets/sponsors/elgato.png';
import overwolf from '../assets/sponsors/overwolf.png';
import featureImage from '../assets/sponsors/feature.png';
import featureImage1 from '../assets/sponsors/feature1.png';
import featureImage2 from '../assets/sponsors/feature2.png';
import featureImage3 from '../assets/sponsors/feature3.png';
import prod1 from '../assets/sponsors/prod1.png';
import prod2 from '../assets/sponsors/prod2.png';
import prod3 from '../assets/sponsors/prod3.png';
import prod4 from '../assets/sponsors/prod4.png';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative overflow-hidden text-white min-h-screen bg-[#1e2351]">
      {/* Search Bar */}
      <div className="w-full flex justify-center mt-32 z-10 px-6 relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for features or resources..."
          className="w-full sm:w-2/3 md:w-1/2 py-3 px-6 bg-white text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto pt-12 text-center px-4">
        <h1 className="text-6xl font-bold mb-6">OBS Studio</h1>
        <p className="text-lg font-semibold mb-4">
          Latest Release <span className="text-white/80"> 31.0.2 – March 7th</span>
        </p>

        <div className="flex justify-center gap-6 mb-10">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-bold rounded">Windows</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-bold rounded">macOS</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 font-bold rounded">Linux</button>
        </div>

        <div>
          <p className="max-w-2xl mx-auto text-lg">
            Free and open-source software for video recording and live streaming.
          </p>
          <p className="max-w-2xl mx-auto text-lg mt-2">
            Download and start streaming quickly and easily on Windows, Mac or Linux.
          </p>
        </div>
      </div>

      {/* Image with Hover Icon */}
      <div className="flex justify-center items-center mt-12 px-6">
        <div className="relative group w-[70%]">
          <img src={obs} alt="OBS Logo" className="w-full h-auto rounded-md" />
          <button
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => alert('Visual search triggered')}
          >
            <img src={visualSearchIcon} alt="Visual Search" className="w-10 h-10" />
          </button>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="bg-[#162458] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-12">PREMIER TIER SPONSORS</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <img src={youtube} alt="YouTube" className="h-24" />
          <img src={logitech} alt="Logitech" className="h-24" />
          <img src={twitch} alt="Twitch" className="h-24" />
        </div>

        <h2 className="text-3xl font-bold mb-12">DIAMOND TIER SPONSORS</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <img src={nvidia} alt="NVIDIA" className="h-24" />
          <img src={amd} alt="AMD" className="h-24" />
          <img src={intel} alt="Intel" className="h-24" />
          <img src={yamaha} alt="Yamaha" className="h-24" />
          <img src={qualcomm} alt="Qualcomm" className="h-24" />
          <img src={elgato} alt="Elgato" className="h-24" />
        </div>

        <h2 className="text-3xl font-bold mb-12">GOLD SPONSORS</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <img src={overwolf} alt="OverWolf" className="h-24" />
        </div>
      </div>


      {/* Features Section */}
      <div className="py-16 text-white text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Explore OBS Features</h2>
        <div className="w-[920px] h-2 bg-blue-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-24 text-left mt-4">
          {[featureImage, featureImage1, featureImage2, featureImage3].map((img, index) => (
            <div key={index} className="flex flex-col items-center w-[70%] mx-auto">
              <img src={img} alt={`Feature ${index + 1}`} className="rounded-lg shadow-lg w-full mb-6" />
              <p className="text-lg text-center">
                {[
                  'High performance real time video/audio capturing and mixing. Create scenes made up of multiple sources including window captures, images, text, browser windows, webcams, capture cards and more.',
                  'Set up an unlimited number of scenes you can switch between seamlessly via custom transitions.',
                  'Built-in audio mixer with noise gate, noise suppression, and gain controls. Take full control of your audio setup.',
                  'Powerful and easy-to-use configuration options. Stream to Twitch, YouTube, and many other platforms with just a few clicks.'
                ][index]}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg mt-4 px-4">
          OBS supports all your favorite streaming platforms and more.
        </p>
      </div>

      

      {/* Productions Section */}
      <div className="bg-[#162458] py-16 text-white text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Create Professional Productions</h2>
        <div className="w-[920px] h-2 bg-blue-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-24 text-left mt-4">
          {[prod1, prod2, prod3, prod4].map((img, index) => (
            <div key={index} className="flex flex-col items-center w-[70%] mx-auto">
              <img src={img} alt={`Production ${index + 1}`} className="rounded-lg shadow-lg w-full mb-6" />
              <p className="text-lg text-center">
                {[
                  'Choose from a number of different and customizable transitions for when you switch between your scenes or add your own stinger video files.',
                  'Set hotkeys for nearly every sort of action, such as switching between scenes, starting/stopping streams or recordings, muting audio sources, push to talk, and more.',
                  'Studio Mode lets you preview your scenes and sources before pushing them live. Adjust your scenes and sources or create new ones and ensure they\'re perfect before your viewers ever see them.',
                  'Get a high level view of your production using the Multiview. Monitor 8 different scenes and easily cue or transition to any of them with merely a single or double click.'
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </div>

      

      {/* Collaborative Creativity Section */}
      <div className="py-16 text-white text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Collaborative Creativity</h2>
        <div className="w-[920px] h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>

        <div className="max-w-3xl mx-auto px-4 text-center text-lg">
          <p>
            OBS Studio is equipped with a powerful API, enabling plugins and scripts to provide further customization and functionality specific to your needs. Utilize native plugins for high performance integrations or scripts written with Lua or Python that interface with existing sources. Work with developers in the streaming community to get the features you need with endless possibilities.
          </p>
          <p className="mt-4">
            Browse or submit your own in the <span className="text-blue-400 underline">Resources section</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
