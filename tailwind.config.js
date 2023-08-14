/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      'body': [
        'Poppins', ...defaultTheme.fontFamily.sans
      ],
      'sans': [
        'Poppins', ...defaultTheme.fontFamily.sans
      ]
    },
    colors: {
      "primary": "rgb(var(--color-primary) / <alpha-value>)",
      "on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
      "primary-container": "rgb(var(--color-primary-container) / <alpha-value>)",
      "on-primary-container": "rgb(var(--color-on-primary-container) / <alpha-value>)",
      "secondary": "rgb(var(--color-secondary) / <alpha-value>)",
      "on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
      "secondary-container": "rgb(var(--color-secondary-container) / <alpha-value>)",
      "on-secondary-container": "rgb(var(--color-on-secondary-container) / <alpha-value>)",
      "tertiary": "rgb(var(--color-tertiary) / <alpha-value>)",
      "on-tertiary": "rgb(var(--color-on-tertiary) / <alpha-value>)",
      "tertiary-container": "rgb(var(--color-tertiary-container) / <alpha-value>)",
      "on-tertiary-container": "rgb(var(--color-on-tertiary-container) / <alpha-value>)",
      "success": "rgb(var(--color-success) / <alpha-value>)",
      "on-success": "rgb(var(--color-on-success) / <alpha-value>)",
      "success-container": "rgb(var(--color-success-container) / <alpha-value>)",
      "on-success-container": "rgb(var(--color-on-success-container) / <alpha-value>)",
      "warning": "rgb(var(--color-warning) / <alpha-value>)",
      "on-warning": "rgb(var(--color-on-warning) / <alpha-value>)",
      "info": "rgb(var(--color-info) / <alpha-value>)",
      "on-info": "rgb(var(--color-on-info) / <alpha-value>)",
      "info-container": "rgb(var(--color-info-container) / <alpha-value>)",
      "on-info-container": "rgb(var(--color-on-info-container) / <alpha-value>)",
      "error": "rgb(var(--color-error) / <alpha-value>)",
      "on-error": "rgb(var(--color-on-error) / <alpha-value>)",
      "error-container": "rgb(var(--color-error-container) / <alpha-value>)",
      "on-error-container": "rgb(var(--color-on-error-container) / <alpha-value>)",
      "background": "rgb(var(--color-background) / <alpha-value>)",
      "on-background": "rgb(var(--color-on-background) / <alpha-value>)",
      "surface": "rgb(var(--color-surface) / <alpha-value>)",
      "on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
      "on-surface-variant": "rgb(var(--color-on-surface-variant) / <alpha-value>)",
      "surface-container": "rgb(var(--color-surface-container) / <alpha-value>)",
      "on-surface-container": "rgb(var(--color-surface-on-container) / <alpha-value>)",
      "outline": "rgb(var(--color-outline) / <alpha-value>)",
      "highlight": "rgb(var(--color-highlight) / <alpha-value>)",
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated'),
    require('flowbite-typography'),
  ],
}