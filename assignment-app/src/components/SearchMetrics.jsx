import React from 'react';

function getAvg(data, key) {
  const values = data.map(item => Number(item[key])).filter(n => !isNaN(n));
  if (!values.length) return '-';
  return (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
}

function getMedian(data, key) {
  const values = data.map(item => Number(item[key])).filter(n => !isNaN(n)).sort((a, b) => a - b);
  if (!values.length) return '-';
  const mid = Math.floor(values.length / 2);
  return values.length % 2
    ? values[mid]
    : ((values[mid - 1] + values[mid]) / 2).toFixed(2);
}

export default function SearchMetrics({ data }) {
  const fields = [
    { label: 'App Usage Time', key: 'appUsageTime', unit: 'Minutes' },
    { label: 'Screen On Time', key: 'screenOnTime', unit: 'Hours' },
    { label: 'Apps Installed', key: 'numberOfApps', unit: 'Apps' },
    { label: 'Age', key: 'age', unit: 'Years' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {fields.map(({ label, key, unit }) => (
        <div key={key} className="p-4 bg-gray-100 rounded shadow text-black">
          <h4 className="font-semibold mb-2">{label}</h4>
          <p>Average: {getAvg(data, key)} {unit}</p>
          <p>Median: {getMedian(data, key)} {unit}</p>
        </div>
      ))}
    </div>
  );
}
