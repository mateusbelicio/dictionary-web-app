import { useEffect, useState } from 'react';
import './style.css';

// import iconMoon from '/src/assets/images/icon-moon.svg';
// import iconMoonHighlight from '/src/assets/images/icon-moon-highlight.svg';

export default function ControlTheme() {
  const htmlElement = document.querySelector('html');

  // Handler functions
  const toggleTheme = function (e) {
    htmlElement.dataset.theme = !e.target.checked ? 'light' : 'dark';
    setButtonState(e.target.checked);

    window.localStorage.setItem('theme', htmlElement.dataset.theme);
  };

  // Hooks
  const [buttonState, setButtonState] = useState(
    htmlElement.dataset.theme === 'light' ? false : true
  );

  useEffect(() => {
    const prefersTheme = window.localStorage.getItem('theme');
    const switchButton = document.querySelector('.control-theme input');

    if (prefersTheme) {
      htmlElement.dataset.theme = prefersTheme;
      setButtonState(prefersTheme === 'light' ? false : true);
      switchButton.checked = prefersTheme === 'light' ? false : true;

      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDark) {
      htmlElement.dataset.theme = 'dark';
      setButtonState(true);
      switchButton.checked = true;
    }
  }, []);

  return (
    <div className="control-theme" data-checked={buttonState}>
      <input className="control-theme__input" type="checkbox" id="theme" onChange={toggleTheme} />
      <label className="control-theme__label" htmlFor="theme">
        <span className="sr-only">Toggle dark mode</span>
      </label>
      {/* <img
        className='control-theme__icon'
        src={buttonState ? iconMoonHighlight : iconMoon}
        alt=''
        aria-hidden='true'
      /> */}
    </div>
  );
}
