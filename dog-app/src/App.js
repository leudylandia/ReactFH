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

  useEffect(() => {
    updateDog();
  }, [])
  
  const updateDog = () => {
     getDog().then((response) => {
      setdog(response);
     })
  }

  return (
    <div className="app">
       <h1>Practicando lo visto en el video</h1><br/>
       <Select/>
       <Card dog={dog}/>
    </div>
  );
}

export default App;
