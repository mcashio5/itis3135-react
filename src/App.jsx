import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'ITIS 3135 – Michael Cashion';
  }, []);

  return (
    <>
      <h2>Welcome</h2>
      <p>This is my ITIS 3135 course homepage.</p>
    </>
  );
}
