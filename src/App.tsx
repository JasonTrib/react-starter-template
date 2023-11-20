import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>
          <span className="text-sky-500">React + TypeScript + Vite + Tailwind</span>
        </h1>
        <p>
          pre-configured with <span className="italic text-yellow-300">Eslint + Stylelint + Prettier</span>
        </p>
      </div>
      <div>
        <button
          className="linear rounded-lg border-2 border-transparent bg-zinc-950 px-3 py-2 font-medium transition hover:border-indigo-900 "
          onClick={() => setCount((count) => count + 1)}
        >
          count: <span className="text-indigo-500">{count}</span>
        </button>
      </div>
    </>
  );
}

export default App;
