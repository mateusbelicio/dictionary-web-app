import './style.css';

export default function Meaning(props) {
  return (
    <section className='meaning'>
      <h2 className='meaning__title'>{props.name}</h2>
      <p className='meaning__subtitle'>Meaning</p>

      <ul className='meaning__list'>
        {props.definitions.map((def, index) => (
          <li key={props.name + index} className='meaning__item'>
            {def.definition && <p className='meaning__description'>{def.definition}</p>}
            {def.example && <p className='meaning__example'>{def.example}</p>}
          </li>
        ))}
      </ul>

      {props.synonyms.length > 0 && (
        <div className='meaning__relation-container'>
          <p className='meaning__relation-title'>Synonyms</p>
          <p className='meaning__relation-words'>{props.synonyms.join(', ')}</p>
        </div>
      )}

      {props.antonyms.length > 0 && (
        <div className='meaning__relation-container'>
          <p className='meaning__relation-title'>Antonyms</p>
          <p className='meaning__relation-words'>{props.antonyms.join(', ')}</p>
        </div>
      )}
    </section>
  );
}
