import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: 'var(--color-foreground)',
        surface: 'var(--color-background)',
        card: 'var(--color-card)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        'on-accent': 'var(--color-on-accent)',
        'on-primary': 'var(--color-on-primary)',
        ring: 'var(--color-ring)',
      },
    },
  },
  plugins: [],
};

export default config;
