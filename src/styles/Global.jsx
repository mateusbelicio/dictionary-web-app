import { createGlobalStyle } from 'styled-components';

import fontDeclarations from './Fonts';

const GlobalStyles = createGlobalStyle`
  ${fontDeclarations};

  html {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  /* CUSTOM PROPERTIES */
  :root {
    --max-width: 46rem;
    --min-width: 15rem;

    --clr-neutral-100: #ffffff;
    --clr-neutral-200: #f4f4f4;
    --clr-neutral-300: #e9e9e9;
    --clr-neutral-400: #757575;
    --clr-neutral-500: #3a3a3a;
    --clr-neutral-600: #2d2d2d;
    --clr-neutral-700: #1f1f1f;
    --clr-neutral-800: #050505;

    --clr-accent-200: #e5c3ff;
    --clr-accent-300: #a445ed40;
    --clr-accent-400: #a445ed;
    --clr-accent-500: #8f19e8;

    --clr-error-400: #ff5252;

    --ff-sans: 'Inter';
    --ff-serif: 'Lora';
    --ff-mono: 'Inconsolata';
    ${
      '' /* --ff-sans: 'Inter', sans-serif;
    --ff-serif: 'Lora', serif;
    --ff-mono: 'Inconsolata', monospace; */
    }

    --fs-small: 0.9375rem;
    --fs-base: clamp(0.9375rem, calc(0.76rem + 0.76vw), 1.125rem);
    --fs-medium: clamp(1.00rem, calc(0.76rem + 1.02vw), 1.25rem);
    --fs-large: clamp(1.125rem, calc(0.77rem + 1.53vw), 1.5rem);
    --fs-huge: clamp(2rem, calc(0.09rem + 8.14vw), 4rem);
  }

  /* COLOR THEME */
  html,
  html[data-theme='light'] {
    --clr-bg: var(--clr-neutral-100);
    --clr-body: var(--clr-neutral-600);
    --clr-input: var(--clr-neutral-200);
    --clr-highlight: var(--clr-accent-400);
    --clr-line: var(--clr-neutral-300);
    --clr-gray: var(--clr-neutral-400);
    --clr-modal: var(--clr-neutral-100);
    --clr-backdrop: rgba(0, 0, 0, 0.1);

    --shadow: 0 5px 1.875rem rgba(0, 0, 0, 0.1);
    --dropbox-bg: var(--clr-neutral-100);
  }

  html[data-theme='dark'] {
    --clr-bg: var(--clr-neutral-800);
    --clr-body: var(--clr-neutral-100);
    --clr-input: var(--clr-neutral-700);
    --clr-highlight: var(--clr-accent-400);
    --clr-line: var(--clr-neutral-500);
    --clr-gray: var(--clr-neutral-400);
    --clr-modal: var(--clr-neutral-700);
    --clr-backdrop: rgba(255, 255, 255, 0.1);

    --shadow: 0 5px 1.875rem var(--clr-accent-400);
    --dropbox-bg: var(--clr-neutral-700);
  }

  /* FONT THEME */
  html,
  html[data-font='serif'] {
    --font: var(--ff-serif);
  }

  html[data-font='sans'] {
    --font: var(--ff-sans);
  }

  html[data-font='mono'] {
    --font: var(--ff-mono);
  }

  /* RESET */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    grid-column: center;
  }

  body {
    min-height: 100vh;

    font-family: var(--font);
    font-size: var(--fs-base);
    font-weight: 400;
    text-rendering: optimizeSpeed;

    background-color: var(--clr-bg);
    color: var(--clr-body);
    transition: color 0.3s, background-color 0.3s;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  ::selection {
    background-color: var(--clr-accent-200);
    color: var(--clr-neutral-600);
  }

  /* UTILITIES CLASSES */
  .sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
`;

export default GlobalStyles;
