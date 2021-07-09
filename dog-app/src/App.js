import Select from "./components/Select";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { getDog } from "./helpers/getDog";

const initialDog = {
  image: 'https://despilfarra.files.wordpress.com/2013/07/portada1.jpg',
  breed: {
    id: 1,
    name: 'Labrador'
  }
}

function App() {

  const [dog, setdog] = useState(initialDog);
  const [loading, setloading] = useState(false)

  useEffect(() => {
    updateDog();
  }, [])
  
  const updateDog = (breedId) => {
    //console.log(breedId, 'App');
    setloading(true);
     getDog(breedId).then((response) => {
      setdog(response);
      setloading(false);
     })
  }

  return (
    <div className="app">
       <h1>Practicando lo visto en el video</h1><br/>
       <Select updateDog={updateDog}/>
       <Card dog={dog} updateDog={updateDog} loading={loading}/>
    </div>
  );
}

export default App;
