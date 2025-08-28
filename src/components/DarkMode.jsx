import React from 'react';
import { useState, useEffect } from 'react';

function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const IsMediaTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    console.log(IsMediaTheme);

    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="cursor-pointer rounded bg-gray-300 px-4 py-2 uppercase dark:bg-gray-700"
    >
      Theme
    </button>
  );
}

export default DarkMode;
