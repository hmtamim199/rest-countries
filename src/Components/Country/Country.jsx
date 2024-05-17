import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry, handleVisitedFlags, handleCountryCapital }) => {
  console.log(country)
  const { name, flags, population, capital } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited)
  }
  return (
    <div className='country'>
      <h4>name:{name.common}</h4>
      <img src={flags.png} alt="" />
      <p>capital:{capital}</p>
      <p>population: {population}</p>
      <button onClick={() => handleVisitedCountry(country)}>mark As Visited</button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>add flags</button>
      <br />
      <button onClick={() => handleCountryCapital(country.capital)}>add capital</button>
      <button onClick={handleVisited}>{visited ? 'visit' : 'going'}</button>
      <p>{visited ? 'i have visited this country' : 'i want to visit'}</p>
    </div>
  );
};

export default Country;