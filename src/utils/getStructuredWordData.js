export function getStructuredWordData(wordData) {
  const structuredData = {
    word: '',
    phonetic: '',
    audio: '',
    meanings: [],
    source: '',
  };

  wordData.forEach((data) => {
    structuredData.word = structuredData.word || data.word;
    structuredData.source = structuredData.source || data.sourceUrls.at(0);
    structuredData.phonetic =
      structuredData.phonetic ||
      data.phonetic ||
      data.phonetics.map((phonetic) => phonetic.text).find((text) => text);
    structuredData.audio =
      structuredData.audio ||
      data.phonetics.map((phonetic) => phonetic.audio).find((audio) => audio);
    structuredData.meanings =
      structuredData.meanings.length !== 0 ? structuredData.meanings : data.meanings;
  });

  return structuredData;
}

// word: wordData.word,
// phonetic: wordData.phonetic || wordData.phonetics.filter((phonetic) => phonetic.text)[0].text,
// audio: wordData.phonetics.filter((phonetic) => phonetic.audio !== '')[0].audio,
// meanings: wordData.meanings,
// source: wordData.sourceUrls[0],
