import { fetchWord } from '../utils/fetchWord';

function Word() {
  return <div>WORD</div>;
}

export default Word;

export async function loader({ request }) {
  const url = new URL(request.url);
  const queryTerm = url.searchParams.get('q');

  return fetchWord(queryTerm);
}
