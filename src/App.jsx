import { useEffect, useState } from 'react';

import logo from '/src/assets/images/logo.svg';
import ControlTheme from './components/ControlTheme';
import ControlFont from './components/ControlFont';
import SearchBar from './components/SearchBar';
import WordInfo from './components/WordInfo';

import './styles/App.css';

export default function App() {
  const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  const [valid, setValid] = useState(true);
  const [wordData, setWordData] = useState({});

  const validateInput = function (e) {
    e.preventDefault();
    const searchInput = document.querySelector('.search-bar__input');

    if (searchInput.value === '') {
      setValid(false);
      setWordData(undefined);
    } else {
      setValid(true);
      getWordData(searchInput.value);
    }
  };

  const getWordData = async function (word) {
    try {
      const response = await fetch(API_URL + word);
      if (!response.ok) throw new Error(`⚠️ Error (${response.status})`);

      const [data] = await response.json();
      const structuredData = {
        word: data.word,
        phonetic: data.phonetic,
        audio: data.phonetics.filter((phonetic) => phonetic.audio !== '')[0].audio,
        meanings: data.meanings,
        source: data.sourceUrls[0],
      };

      setWordData(structuredData);
    } catch (error) {
      console.error(error);
      setWordData(undefined);
    }
  };

  /////////////////////////////////////////////////////////////
  // Only for demo

  useEffect(function () {
    getWordData('keyboard');
  }, []);

  /////////////////////////////////////////////////////////////

  return (
    <>
      <header>
        <img src={logo} alt='' aria-hidden='true' />
        <div className='controls'>
          <ControlFont />
          <span className='vertical-bar'></span>
          <ControlTheme />
        </div>
        <form noValidate className='search-bar' onSubmit={validateInput}>
          <SearchBar valid={valid} />
        </form>
      </header>
      <main>{wordData ? <WordInfo word={wordData} /> : <div></div>}</main>
    </>
  );
}
