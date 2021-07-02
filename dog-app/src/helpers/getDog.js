
export const getDog = async (breedId) => {

   let url = 'https://api.thedogapi.com/v1/images/search'; //Traer un dog aleatorio

   //Traer un dog especifico si breedId es diferente de underfine(false) o breedId diferente de 0
   if(!!breedId || breedId > 0)
        url = 'https://api.thedogapi.com/v1/images/search?breed_ids=' + breedId;

        console.log(breedId, 'getDog', url);
        
    const res = await fetch(url);
    const [data] = await res.json();

    let {url: image, breeds: [breed]} = data;  //breeds: [breed] usamos esto para tomar la posicion 0 si no tueviera que usar breeds[0].name

    if(!breed){
        image = 'https://despilfarra.files.wordpress.com/2013/07/portada1.jpg';
        breed ={
            id: 0,
            name: 'Breed not found'
        }
    }

    

    const dog = {
        image: image,
        breed: {
          id: breed.id,
          name: breed.name
        }
    }

    //Tambien puedo ser de esta manera, ya que lo tengo con el mismo nombre, pero el breed tomaria las demas propiedades
    const dog2 = {
        image,
        breed
    }
    console.log(dog)

    return dog;
}
