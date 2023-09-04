import { useLoaderData, useNavigation } from 'react-router-dom';

import { fetchWord } from '../utils/fetchWord';
import { getStructuredWordData } from '../utils/getStructuredWordData';

import Loader from '../ui/Loader';
import AudioPlayer from '../components/AudioPlayer';
import Meaning from '../components/Meaning';
import Row from '../ui/Row';

function Word() {
  const wordData = useLoaderData();
  const { state } = useNavigation();

  if (state === 'loading') return <Loader />;

  const structuredData = getStructuredWordData(wordData);
  console.log(structuredData);

  return (
    <>
      <Row className="word-info">
        <div className="word-info__heading">
          <h1 className="word-info__title">{structuredData.word}</h1>
          <span className="word-info__phonetic">{structuredData.phonetic}</span>
        </div>
        <AudioPlayer src={structuredData.audio} />
      </Row>

      {structuredData.meanings.map((meaning, index) => (
        <Meaning
          key={meaning.partOfSpeech + index}
          name={meaning.partOfSpeech}
          definitions={meaning.definitions}
          synonyms={meaning.synonyms}
          antonyms={meaning.antonyms}
        />
      ))}

      <div className="word-info__source">
        <p className="word-info__source-title">Source</p>
        <a href={structuredData.source} target="_blank" className="word-info__link">
          {structuredData.source}
        </a>
      </div>
    </>
  );
}

export default Word;

export async function loader({ request }) {
  const url = new URL(request.url);
  const queryTerm = url.searchParams.get('q');

  const response = await fetchWord(queryTerm);

  if (!response.data) throw response.error;
  return response.data;
}
