import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[countries, setCountries] = useState([]);

  const url="https://restcountries.com/v3.1/all";

  useEffect(()=> {
    fetch(url).then((response) => response.json()).then((data) => setCountries(data)).catch((error) => console.log(error));;
  }, [])

  console.log(countries);

  return (
    <div className="App">
      {countries.map((country, index) => ( 
          <div key={index} className="Card">
          <img src={country.flags.png} alt={country.flags.svg} width={"100px"} height={"100px"} /> 
          <h3>{country.region}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
