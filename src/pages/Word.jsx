import { useLoaderData, useNavigation } from 'react-router-dom';
import { styled } from 'styled-components';

import { fetchWord } from '../utils/fetchWord';
import { getStructuredWordData } from '../utils/getStructuredWordData';

import Loader from '../ui/Loader';
import WordHeader from '../features/word/WordHeader';
import WordMeaningSection from '../features/word/WordMeaningSection';
import WordSource from '../features/word/WordSource';

const StyledWord = styled.main`
  display: grid;
  row-gap: 2rem;

  @media (min-width: 40em) {
    row-gap: 2.5rem;
  }
`;

function Word() {
  const wordData = useLoaderData();
  const { state } = useNavigation();

  if (state === 'loading') return <Loader />;

  const { word, phonetic, audio, meanings, source } = getStructuredWordData(wordData);
  return (
    <StyledWord>
      <WordHeader word={word} phonetic={phonetic} audioSrc={audio} />
      {meanings.map((meaning, index) => (
        <WordMeaningSection key={index} meaning={meaning} />
      ))}
      <WordSource src={source} />
    </StyledWord>
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
