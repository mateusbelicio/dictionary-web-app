import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';

import AppLayout from './ui/AppLayout';
import Home from './pages/Home';
import Word, { loader as wordLoader } from './pages/Word';
import PageNotFound from './pages/PageNotFound';
import ContextsProvider from './contexts';

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'search', element: <Word />, loader: wordLoader, errorElement: <PageNotFound /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function App() {
  return (
    <ContextsProvider>
      <RouterProvider router={router} />;
    </ContextsProvider>
  );
}

export default App;

// export default function App() {
// const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

// const [valid, setValid] = useState(true);
// const [wordData, setWordData] = useState({});
// const [mainState, setMainState] = useState();

// const mainStates = {
//   blank: <div></div>,
//   error: <NotFound />,
//   main: <WordInfo word={wordData} />,
//   loading: <Loader />,
// };

// const validateInput = function (e) {
//   e.preventDefault();
//   const searchInput = document.querySelector('.search-bar__input');

//   if (searchInput.value === '') {
//     setValid(false);
//     setWordData(undefined);
//     setMainState('blank');
//   } else {
//     setValid(true);
//     getWordData(searchInput.value);
//   }
// };

// const getWordData = async function (word) {
//   try {
//     setMainState('loading');

//     const response = await fetch(API_URL + word);

//     if (!response.ok) throw new Error(`⚠️ Error (${response.status})`);

//     const [data] = await response.json();
//     const structuredData = {
//       word: data.word,
//       phonetic: data.phonetic || data.phonetics.filter((phonetic) => phonetic.text)[0].text,
//       audio: data.phonetics.filter((phonetic) => phonetic.audio !== '')[0].audio,
//       meanings: data.meanings,
//       source: data.sourceUrls[0],
//     };

//     setWordData(structuredData);
//     setMainState('main');
//   } catch (error) {
//     console.warn(error);
//     setMainState('error');
//   }
// };

// return (
//   <>
//     <header>
//       <img src={logo} alt="" aria-hidden="true" />
//       <div className="controls">
//         <ControlFont />
//         <span className="vertical-bar"></span>
//         <ControlTheme />
//       </div>
//       <form noValidate className="search-bar" onSubmit={validateInput}>
//         <SearchBar valid={valid} />
//       </form>
//     </header>
//     <main>{mainStates[mainState]}</main>
//   </>
// );
// }
