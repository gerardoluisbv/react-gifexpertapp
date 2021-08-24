    
  export const getGifs = async( category ) => {
   
   const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=20&api_key=Hn15UQLWUTekfQCtI7MLm89zxqzIPu5h`;
   const resp = await fetch( url );                     
   const { data } = await resp.json();
   console.log(data);
   const gifs = data.map( img => {
       return {
           id: img.id,
           title: img.title,
           url: img.images?.downsized_large.url
       }
   })
   
   return gifs;

}  