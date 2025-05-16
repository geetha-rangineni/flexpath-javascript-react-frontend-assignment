import React, { useState } from 'react';
import mockData from '../data/mockDataset.json';

export default function SearchMenu({ setSearchResults, setStatus }) {
  const [field, setField] = useState('gender');
  const [keyword, setKeyword] = useState('');

  const genderOptions = ['Male', 'Female', 'Other'];
  const osOptions = ['iOS', 'Android', 'Windows', 'Linux', 'Other'];
  const modelOptions = ['pixel', 'iphone', 'OnePlus', 'nokia' , 'galaxy', 'motorola'];

  const handleSearch = () => {
    setStatus('loading');

    setTimeout(() => {
      try {
        const results = keyword
          ? mockData.filter((item) =>
              String(item[field]).toLowerCase() === (keyword.toLowerCase())
            )
          : mockData;

        setSearchResults(results);
        setStatus('success');
      } catch {
        setStatus('error');
        setSearchResults([]);
      }
    }, 400);
  };

  return (
    <div className="mb-6 p-4 bg-gray-100 rounded text-black">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Filter Field Selector */}
        <select
          value={field}
          onChange={(e) => {
            setField(e.target.value);
            setKeyword('');
          }}
          className="border p-2 rounded text-black bg-white"
        >
          <option value="gender">Gender</option>
          <option value="operatingSystem">Operating System</option>
          <option value="model">Model</option>
          <option value="behaviorclass">Behavior Class</option>
        </select>

        {/* Field-Specific Input / Dropdown */}
        {field === 'gender' ? (
          <select
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border p-2 rounded w-full sm:w-64 text-black bg-white"
          >
            <option value="">Select gender</option>
            {genderOptions.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        ) : field === 'operatingSystem' ? (
          <select
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border p-2 rounded w-full sm:w-64 text-black bg-white"
          >
            <option value="">Select OS</option>
            {osOptions.map((os) => (
              <option key={os} value={os}>{os}</option>
            ))}
          </select>
        ) : field === 'model' ? (
          <select
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border p-2 rounded w-full sm:w-64 text-black bg-white"
          >
            <option value="">Select model</option>
            {modelOptions.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            placeholder="Enter keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border p-2 rounded w-full sm:w-64 text-black bg-white"
          />
        )}

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}

