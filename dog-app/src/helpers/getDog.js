
export const getDog = async () => {
    const url = 'https://api.thedogapi.com/v1/images/search';
    const res = await fetch(url);
    const [data] = await res.json();

    const {url: image, breeds: [breed]} = data;  //breeds: [breed] usamos esto para tomar la posicion 0 si no tueviera que usar breeds[0].name

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
