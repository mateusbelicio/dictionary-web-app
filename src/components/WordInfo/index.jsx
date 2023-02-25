import './style.css';

import AudioPlayer from '../AudioPlayer';
import Meaning from '../Meaning';

export default function WordInfo(props) {
  return (
    <>
      <div className='word-info'>
        <div className='word-info__heading'>
          <h1 className='word-info__title'>{props.word?.word}</h1>
          <span className='word-info__phonetic'>{props.word?.phonetic}</span>
        </div>
        <AudioPlayer src={props.word?.audio} />
      </div>

      {props.word.meanings.map((meaning, index) => (
        <Meaning
          key={meaning.partOfSpeech + index}
          name={meaning.partOfSpeech}
          definitions={meaning.definitions}
          synonyms={meaning.synonyms}
          antonyms={meaning.antonyms}
        />
      ))}

      <div className='word-info__source'>
        <p className='word-info__source-title'>Source</p>
        <a href={props.word.source} target='_blank' className='word-info__link'>
          {props.word.source}
        </a>
      </div>
    </>
  );
}
