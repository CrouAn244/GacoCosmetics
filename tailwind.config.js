/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Gaco Signature Brand Palette (Infusing Gấc Ruby with Cocoon's Ivory & Ochre Gold)
        gaco: {
          ruby: '#9E2A2B',        // Signature Gấc Ruby Red
          rubyDark: '#7C1D1E',    // Deep ruby for hover
          rubyLight: '#FDF2F2',   // Delicate ruby tint
          gold: '#C5A25D',        // Herbal ochre gold
          goldDark: '#8C6F2E',    // Dark ochre gold
          bg: '#FEFBF4',          // Warm ivory cream
          dark: '#1F1C17',        // Deep ink charcoal
          border: '#E7E5DF',      // Hairline subtle border
          muted: '#97958F',       // Secondary muted text
          sage: '#5E7A4A',        // Botanical forest green
          cream: '#F4EFE6',       // Deep sand cream
        },
        cocoon: {
          bg: '#FEFBF4',          // Primary light background
          dark: '#1F1C17',        // Primary dark text / buttons
          gold: '#C5A25D',        // Iconic Ochre / Gold accent
          darkGold: '#8C6F2E',    // Dark gold for hover
          border: '#E7E5DF',      // Hairline subtle border
          borderLight: '#EDE0CC', // Warmer beige border
          muted: '#97958F',       // Secondary muted text
          red: '#BE2F31',         // Alert / sale red
          green: '#7BAD34',       // Vegan / natural green
          cream: '#F4EFE6',       // Slightly deeper cream for cards/sections
        },
        primary: {
          DEFAULT: '#1F1C17',
          light: '#FEFBF4',
          dark: '#1F1C17',
          accent: '#C5A25D',
          ruby: '#9E2A2B',
        },
      },
      fontFamily: {
        heading: ['Vollkorn', 'Cormorant Garamond', 'serif'],
        serif: ['Cormorant Garamond', 'Vollkorn', 'serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
        body: ['Nunito', 'Barlow', 'sans-serif'],
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px',
        'md': '4px',
        'lg': '6px',
        'card': '4px',
      },
      boxShadow: {
        'cocoon': '0 2px 10px rgba(31, 28, 23, 0.05)',
        'cocoon-card': '0 4px 16px rgba(31, 28, 23, 0.07)',
      },
    },
  },
  plugins: [],
};
