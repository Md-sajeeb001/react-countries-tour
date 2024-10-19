import { useState } from "react";
import "./country.css";
const Country = ({ country , handelVisitedCountries}) => {
  const { name, flags, flag, region, ccn3 } = country;

  const [visited, setVisited] = useState(false);

  const handelBtn = () => {
    setVisited(!visited);
  };



  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h4>Name: {name.common}</h4>
      <img src={flags.png} alt="" />
      <p>Flag: {flag}</p>
      <p>languages: {region}</p>
      <p>CCA3: {ccn3}</p>
      <br />
      <button onClick={()=>handelVisitedCountries(country)} className="btn">Mark Countries</button>
      <button id="button" onClick={handelBtn} className="btn">
        {visited ? "visited" : "visit"}
      </button>
      {visited ? "visited" : "not visited"}
    </div>
  );
};

export default Country;
