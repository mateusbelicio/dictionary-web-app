import './style.css';
import spinner from '/src/assets/images/spinner.svg';

export default function Loader() {
  return (
    <div className='loader'>
      <img src={spinner} alt='' aria-hidden='true' className='loader__spinner' />
    </div>
  );
}
