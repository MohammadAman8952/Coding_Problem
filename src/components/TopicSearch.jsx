import React, { useState } from "react";

const topics = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Calculus", category: "Mathematics" },
  { id: 3, name: "Organic Chemistry", category: "Chemistry" },
  { id: 4, name: "Genetics", category: "Biology" },
  { id: 5, name: "World War II", category: "History" },
];

function TopicSearch() {
  const [search, setSearch] = useState("");

  const results = topics.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-50 to-blue-100 flex justify-center items-center px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Topic Finder</h1>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search topics..."
          className="w-full px-4 py-3 rounded-lg border border-blue-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.length > 0 ? (
            results.map((topic) => (
              <div
                key={topic.id}
                className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-md transition duration-200"
              >
                <h3 className="text-lg font-semibold text-blue-800">{topic.name}</h3>
                <p className="text-sm text-gray-600">Category: {topic.category}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-red-500 col-span-2 italic">No topics found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopicSearch;
