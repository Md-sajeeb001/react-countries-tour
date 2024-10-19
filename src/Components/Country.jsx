import { useState } from "react";
import "./country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, flag, region, ccn3 } = country;

  const [visited, setVisited] = useState(false);

  const handelBtn = () => {
    setVisited(!visited);
    
  };

  return (
    <div className="country">
      <h4>Name: {name.common}</h4>
      <img src={flags.png} alt="" />
      <p>Flag: {flag}</p>
      <p>languages: {region}</p>
      <p>CCA3: {ccn3}</p>
      <button id="button" onClick={handelBtn} className="btn">
        {visited? "visited" : "visit"}
      </button>
      {visited ? "visited" : "not visited"}
    </div>
  );
};

export default Country;
