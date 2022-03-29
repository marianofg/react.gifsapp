export const getGifs = async ( categoria) => {
    const limite = 10;
    const api_key = 'rH2hbbUWoUjmJIO4v3z816DtVRvewIj3';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=${limite}&api_key=${api_key}`
    const resp = await fetch(url);
    const { data } = await resp.json();


    const gifs = data.map(img => {
        return {
            id: img.id,
            titulo: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}