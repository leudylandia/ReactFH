export const getBreeds = async () => {
   const url = "https://api.thedogapi.com/v1/breeds"
   const data = await fetch(url);

   if(!data.ok){
      throw new Error("Error en la llamada del api, raza: " + data.statusText + " status: " + data.status);
   }

   console.log(data, 'getBreeds');
   const breeds = await data.json();

   return breeds;
}
