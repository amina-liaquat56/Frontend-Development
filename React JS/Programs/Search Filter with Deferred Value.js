// App.js
import { useState, useDeferredValue, useMemo } from "react";
const ITEMS = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

export default function SearchFilter() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    return ITEMS.filter(i =>
      i.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [deferredQuery]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Search Filter</h2>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Type to search"
      />
      <p>Showing {filtered.length} results</p>
      <ul>
        {filtered.slice(0, 20).map(i => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
