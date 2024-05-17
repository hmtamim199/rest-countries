import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  // const [visitedFlags, setVisitedFlags] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  const [countryCapital, setCountryCapital] = useState([]);


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  const handleVisitedFlags = (flag) => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag)
  }

  // const handleVisitedFlags = (flag) => {
  //   console.log('adding flags')
  //   const newVisitedFlags = [...visitedFlags, flag];
  //   setVisitedFlags(newVisitedFlags)
  // }


  const handleVisitedCountry = (country) => {
    console.log('mark as visited country')
    // console.log(country)
    const newVisitedCountries = [...visitedCountry, country]
    setVisitedCountry(newVisitedCountries)

  }

  const handleCountryCapital = (capital) => {
    const newCountryCapital = [...countryCapital, capital]
    setCountryCapital(newCountryCapital);
  }
  return (
    <>
      <h3>countries: {countries.length}</h3>
      {/* display visited country name */}
      <div>
        <h3>visited contries {visitedCountry.length}</h3>
        <ul>
          {
            visitedCountry.map(country => <li
              key={country.cca3}
            >{country.name.common}</li>)
          }
        </ul>
        {/* display visited cuntry's flag */}
      </div>
      {/* display visited country flags */}
      <div className="flags-container">
        <h3>visited coutry flag{visitedFlags.length}</h3>
        {
          // visitedFlags.map(flag => <img src={flag}></img>)
          visitedFlags.map(flag => <img src={flag}></img>)
        }
      </div>

      {/* display country's capital  */}
      <div>
        <h3>countrys capital :{countryCapital.length}</h3>
        {
          countryCapital.map(capital => <li> {capital}</li>)
        }
      </div>
      <div className="country-container">
        {
          countries.map(country => <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            handleCountryCapital={handleCountryCapital}
          ></Country>)
        }
      </div>
    </>
  );
};

export default Countries;