const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export async function fetchWord(query) {
  try {
    const res = await fetch(API_URL + query);
    const data = await res.json();

    if (!res.ok) throw data;
    return { data, error: undefined };
  } catch (error) {
    return { data: undefined, error };
  }
}
