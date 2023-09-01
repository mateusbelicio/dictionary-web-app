import { redirect } from 'react-router-dom';

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

function Word() {
  return <div>WORD</div>;
}

export default Word;

export async function loader({ params }) {
  try {
    const res = await fetch(API_URL + params.word);
    if (!res.ok) throw new Error('Not found');
    const data = await res.json();

    console.log(data);

    return data;
  } catch (error) {
    return redirect('/not-found');
  }
}
