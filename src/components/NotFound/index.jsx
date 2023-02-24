import './style.css';
import emoji from '/src/assets/images/icon-emoji.svg';

export default function NotFound() {
  return (
    <div className='not-found'>
      <img className='not-found__icon' src={emoji} alt='' aria-hidden='true' />
      <h1 className='not-found__title'>No Definitions Found</h1>
      <p className='not-found__message'>
        Sorry pal, we couldn't find definitions for the word you were looking for. You can try the
        search again at later time or head to the web instead.
      </p>
    </div>
  );
}
