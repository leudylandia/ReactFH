import { useState } from "react";

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
      console.log(data)
  }

  useEffect(() => {
    
  }, [input])



  return (
    <div className="app">
     <img 
        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Autoquotes.png"
        alt="logo"
      />
     <button>Get next</button>
     <blockquote>
       <p>
         {phrase.quote}
         <br/>
         <span>- {phrase.author}</span>
       </p>
       

     </blockquote>
    </div>
  );
}

export default App;
