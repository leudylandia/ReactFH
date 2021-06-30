export const getBreeds = async () => {
   const url = "https://api.thedogapi.com/v1/breeds"
   const data = await fetch(url);
   const breeds = await data.json();

   return breeds;
}
