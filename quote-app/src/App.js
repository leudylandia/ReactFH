import { useEffect, useState } from "react";
import { Qoute } from "./components/Qoute";
import { QuotePrueba } from "./components/QuotePrueba";

const InitialValues = {
  quote: 'No Qoute',
  author: 'No Author'
}

function App() {

  const [phrase, setPhrase] = useState(InitialValues)
 
  const getQoute = async () =>{
      const url = "http://quotes.stormconsultancy.co.uk/random.json";
      const res = await fetch(url);
      const data = await res.json();
      //console.log(data);
      setPhrase(data);
  }

  useEffect(() => {
    getQoute();
  }, [])

  const handleNext = (e) =>{
    getQoute();
  }



  return (
    <div className="app">
     <img 
        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Autoquotes.png"
        alt="logo"
      />
     <button onClick={(e) => handleNext(e)}>Get next</button>
    
     <Qoute quote={phrase}/>
     <hr/>
     <QuotePrueba/>
    </div>
  );
}

export default App;
