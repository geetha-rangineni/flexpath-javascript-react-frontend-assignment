// SearchPage.jsx
import React from "react";

function SearchPage({ searchState, setSearchState }) {
  const { filterType, keyword, statusMessage, results, error, metrics } = searchState;

  const headings = [
    "User ID",
    "Device Model",
    "Operating System",
    "App Usage Time (min/day)",
    "Screen On Time (hours/day)",
    "Battery Drain (mAh/day)",
    "Number of Apps Installed",
    "Data Usage (MB/day)",
    "Age",
    "Gender",
    "User Behavior Class",
  ];

  const setField = (field, value) => {
    setSearchState((prev) => ({ ...prev, [field]: value }));
  };

  const setMetrics = (metrics) => {
    setSearchState((prev) => ({ ...prev, metrics }));
  };

  const calculateAverage = (arr) =>
    arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

  const calculateMedian = (arr) => {
    if (!arr.length) return 0;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];
  };

  const calculateMetrics = (data) => {
    const get = (key) => data.map((item) => Number(item[key]) || 0);
    const update = (key) => ({
      avg: calculateAverage(get(key)),
      median: calculateMedian(get(key)),
    });

    setMetrics({
      appUsage: update("App Usage Time (min/day)"),
      screenOnTime: update("Screen On Time (hours/day)"),
      appsInstalled: update("Number of Apps Installed"),
      age: update("Age"),
    });
  };

  const resetMetrics = () => {
    setMetrics({
      appUsage: { avg: 0, median: 0 },
      screenOnTime: { avg: 0, median: 0 },
      appsInstalled: { avg: 0, median: 0 },
      age: { avg: 0, median: 0 },
    });
  };

  const handleSearch = async () => {
    setField("statusMessage", "Loading...");
    setField("error", null);

    try {
      const url = keyword
        ? `/api/data/search?filterType=${filterType}&keyword=${keyword}`
        : `/api/data/search`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      const data = await response.json();

      if (data.length > 0) {
        setSearchState((prev) => ({
          ...prev,
          results: data,
          statusMessage: `Displaying ${data.length} records`,
        }));
        calculateMetrics(data);
      } else {
        setSearchState((prev) => ({
          ...prev,
          results: [],
          statusMessage: "No Records To Display",
        }));
        resetMetrics();
      }
    } catch (err) {
      setField("error", "Error retrieving data.");
      setField("results", []);
      setField("statusMessage", "");
      resetMetrics();
    }
  };

  const format = (num) =>
    num.toLocaleString("en-US", { maximumFractionDigits: 2 });

  return (
    <div className="container">
      <h2 className="mb-4">Search Through Dataset</h2>

      <div style={{ maxWidth: "400px" }}>
        <form className="mb-4 text-start">
          <div className="mb-3">
            <label htmlFor="filterType" className="form-label fw-semibold">
              Select data point to filter search by
            </label>
            <select
              id="filterType"
              className="form-select"
              value={filterType}
              onChange={(e) => setField("filterType", e.target.value)}
              style={{ maxWidth: "300px" }}
            >
              <option value="gender">gender</option>
              <option value="operatingSystem">operatingSystem</option>
              <option value="model">model</option>
              <option value="behaviorclass">behaviorclass</option>
            </select>
          </div>

          <div className="mb-3 position-relative" style={{ maxWidth: "300px" }}>
            <input
              type="text"
              className="form-control pe-5"
              placeholder="Search by Keyword"
              value={keyword}
              onChange={(e) => setField("keyword", e.target.value)}
            />
            {keyword && (
              <button
                type="button"
                onClick={() => setField("keyword", "")}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  border: "none",
                  background: "transparent",
                  fontSize: "20px",
                  color: "#888",
                  cursor: "pointer",
                  padding: "0",
                }}
                aria-label="Clear input"
              >
                &times;
              </button>
            )}
          </div>

          <div className="mb-4" style={{ maxWidth: "150px" }}>
            <button
              type="button"
              className="btn btn-outline-dark w-100"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {error && <p className="text-danger fw-bold">{error}</p>}
      <div className="mb-3">
        <strong>{statusMessage}</strong>
      </div>

      <div className="row mb-4">
        <div className="col-md-3">
          <div className="card p-3">
            <h6>App Usage Time (min/day)</h6>
            <p>Average - {format(metrics.appUsage.avg)} Minutes</p>
            <p>Median - {format(metrics.appUsage.median)} Minutes</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">
            <h6>Screen On Time (hours/day)</h6>
            <p>Average - {format(metrics.screenOnTime.avg)} Hours</p>
            <p>Median - {format(metrics.screenOnTime.median)} Hours</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">
            <h6>Number of Apps Installed</h6>
            <p>Average - {format(metrics.appsInstalled.avg)} Apps</p>
            <p>Median - {format(metrics.appsInstalled.median)} Apps</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">
            <h6>Age</h6>
            <p>Average - {format(metrics.age.avg)} Years Old</p>
            <p>Median - {format(metrics.age.median)} Years Old</p>
          </div>
        </div>
      </div>

      {/* Table Header Always Renders */}
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "none",
          marginBottom: "2rem",
        }}
      >
        <thead>
          <tr>
            {headings.map((heading, idx) => (
              <th
                key={idx}
                style={{
                  textAlign: "left",
                  borderBottom: "2px solid #dee2e6",
                  padding: "10px",
                  fontWeight: "bold",
                  backgroundColor: "#fff",
                  whiteSpace: heading === "Device Model" ? "nowrap" : "normal",
                }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        {results.length > 0 && (
          <tbody>
            {results.map((record, index) => (
              <tr
                key={index}
                style={{ backgroundColor: index % 2 === 0 ? "#fff" : "#f8f9fa" }}
              >
                {Object.values(record).map((value, i) => (
                  <td
                    key={i}
                    style={{
                      textAlign: "left",
                      borderBottom: "1px solid #dee2e6",
                      padding: "10px",
                      whiteSpace: i === 1 ? "nowrap" : "normal",
                    }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

export default SearchPage;
