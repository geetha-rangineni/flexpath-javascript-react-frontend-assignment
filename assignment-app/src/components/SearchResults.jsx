import React from 'react';
export default function SearchResults({ data, status }) {
    if (status === 'loading') return <div>Loading Records...</div>;
    if (status === 'error') return <div className="text-red-600">Error fetching results.</div>;
    if (data.length === 0) return <div>No records to display</div>;
  
    return (
      <table className="table-auto w-full mt-4 border">
       <thead className="bg-gray-200">
  <tr>
    {Object.keys(data[0]).map((key) => (
      <th
        key={key}
        className="p-2 text-left text-black capitalize"
      >
        {key}
      </th>
    ))}
  </tr>
</thead>

        <tbody>
        {data.map((row, i) => (
  <tr key={i} className={i % 2 === 0 ? 'bg-white text-black' : 'bg-gray-800 text-white'}>
    {Object.values(row).map((val, j) => (
      <td key={j} className="p-2">{val}</td>
    ))}
  </tr>
))}

        </tbody>
      </table>
    );
  }