import './style.css';

export default function SearchBar(props) {
  return (
    <>
      <input
        className='search-bar__input'
        type='text'
        id='search'
        placeholder='Search for any word...'
        data-valid={props.valid}
      />
      <label htmlFor='search' className='search-bar__label'>
        <span className='sr-only'>Search for any word...</span>
      </label>
      <span className='search-bar__error'>{props.valid ? '' : 'Whoops, can’t be empty...'}</span>
    </>
  );
}
