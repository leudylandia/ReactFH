

export const getGifs = async(category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=mL9uPpnCLyFzRM088aWh28GzW2v9pOqw`;
    const resp = await fetch(url);
    const {data} = await resp.json ();

    const gifs = data.map(item => {
        return{
            id: item.id,
            title: item.title,
            url: item.images.downsized_medium.url
        }
    })

    //console.log(gifs);
    
    return gifs;

}