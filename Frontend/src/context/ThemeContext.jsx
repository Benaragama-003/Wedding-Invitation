import React, { createContext, useContext } from 'react';

/* ============================================
   THEME CONTEXT — Static Passthrough

   The invitation now uses a single unified
   luxury palette defined in index.css :root.
   No runtime theme switching.

   ThemeProvider is kept as a passthrough for
   backward compatibility with any child imports.
   ============================================ */

const ThemeContext = createContext({ theme: 'luxury' });

export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ theme: 'luxury' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
