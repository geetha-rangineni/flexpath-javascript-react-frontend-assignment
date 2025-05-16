import React, { useState } from 'react';
import SearchMenu from '../components/SearchMenu';
import SearchMetrics from '../components/SearchMetrics';
import SearchResults from '../components/SearchResults';

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState('idle'); 

  return (
    <div className="mt-32 p-6 bg-[#0f111c] min-h-screen text-white">
      <SearchMenu setSearchResults={setSearchResults} setStatus={setStatus} />

      {status === 'loading' && <p className="text-blue-600 font-medium mb-2">Loading…</p>}
      {status === 'success' && (
        searchResults.length === 0
          ? <p className="text-red-500 font-medium mb-2">No records to display</p>
          : <p className="text-green-600 font-medium mb-2">Displaying {searchResults.length} records</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 font-medium mb-2">Error fetching records. Please try again.</p>
      )}

      <SearchMetrics data={searchResults} />
      <SearchResults data={searchResults} status={status} />
    </div>
  );
}
