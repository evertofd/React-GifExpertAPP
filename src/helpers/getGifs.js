export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=12&api_key=mVQrxB1cOPSWC90V0qNOS8ivtofwM9Kq`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images?.downsized_medium.url,
    };
  });

  return gifs;
};
