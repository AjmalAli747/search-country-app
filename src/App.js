import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("India");
  const [getValue, setGetValue] = useState([]);
  const submitFunction = async (e) => {
    e?.preventDefault();
    const data = await fetch(
      `https://restcountries.com/v2/name/${search.trim()}?fullText=true`
    );
    const response = await data.json();
    setGetValue(response);


    
    console.log(getValue[0])
  };


 

  useEffect(() => {
    submitFunction();
  }, []);
  return (
    <>
      <div className="country">
        <div className="row">
          <div className="search">
            <form action="" onSubmit={submitFunction}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Country"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>Search</button>
            </form>
          </div>
          <div className="flag">
            <img src={getValue[0]?.flag} alt={getValue[0]?.flag} />
          </div>
          <div className="container_list">
            <div className="title">
              <div className="title_content">
                <h1>
                  Country : <b>{getValue[0]?.name}</b>
                </h1>
              </div>
              <div className="title_content">
                <h1>
                  Capital : <b>{getValue[0]?.capital}</b>
                </h1>
              </div>
            </div>
          </div>

          <div className="content_list">
            <div className="content_details">
              <h1>
                Population : <b>{getValue[0]?.population}</b>
              </h1>
              <h1>
                Area : <b>{getValue[0]?.area}</b>
              </h1>
              <h1>
                Region : <b>{getValue[0]?.region}</b>
              </h1>
              <h1>
                Independent : <b>{getValue[0]?.independent}</b>
              </h1>
            </div>
            <div className="content_details">
              <h1>
                alpha2Code : <b>{getValue[0]?.alpha2Code}</b>
              </h1>
              <h1>
                demonym : <b>{getValue[0]?.demonym}</b>
              </h1>
              <h1>
                gini : <b>{getValue[0]?.gini}</b>
              </h1>
              <h1>
                subregion :  <b>{getValue[0]?.subregion}</b>
              </h1>
            </div>
          </div>

          <div className="border_list">
            <h1>
              Border : <b> {getValue[0]?.borders.join(" | ")}</b>
            </h1>
          </div>
          <div className="border_list">
            <h1>
             AltSpellings :
              <b> {getValue[0]?.altSpellings.join(" | ")}</b>
            </h1>
          </div>
          <div className="border_list">
            <h1>
            CallingCodes :
              <b> {getValue[0]?.callingCodes}</b>
            </h1>
          </div>
          <div className="border_list">
            <h1>
            Currencies : 
               <b> {getValue[0]?.currencies[0]?.code} | {getValue[0]?.currencies[0]?.name} | {getValue[0]?.currencies[0]?.symbol}</b>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
