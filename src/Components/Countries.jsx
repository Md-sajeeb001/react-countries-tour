import { useEffect, useState } from "react";
import Country from "./country";
import "./country.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitedCountries = (country) => {
    const newVisited = [...visitedCountries, country];
    setVisitedCountries(newVisited);
  };

  return (
    <div>
      <h3>Countris: {countries.length}</h3>
      <div>
        <h3>Mark Countries: {visitedCountries.length}</h3>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            handelVisitedCountries={handelVisitedCountries}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
