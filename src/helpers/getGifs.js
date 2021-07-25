export const getGifs = async (categoria) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=x4sQCONdaq2ktTOZ94NFSORownYrZIHE`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gisf = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gisf;
 };