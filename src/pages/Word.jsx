import { useLoaderData, useNavigation } from 'react-router-dom';
import { fetchWord } from '../utils/fetchWord';
import Loader from '../ui/Loader';

function Word() {
  const wordData = useLoaderData();
  const { state } = useNavigation();

  if (state === 'loading') return <Loader />;

  console.log(wordData);
  return <div>WORD</div>;
}

export default Word;

export async function loader({ request }) {
  const url = new URL(request.url);
  const queryTerm = url.searchParams.get('q');

  const response = await fetchWord(queryTerm);

  console.log(response);

  if (!response.data) throw response.error;
  return response.data;
}
