import './App.css';
import React, {useEffect, useState} from 'react';
import CountryList from './Components/CountryList';
import CountryDetail from './Components/CountryDetail';

const countryUrl = "https://restcountries.com/v3.1/all";

function App(){
  
  const [popContent, setPopContent] = useState({})
  const [countries, setCountries] = useState(null);
  const[allCountries, setAllCountries] = useState(null);
  const [showPop, setShowPop] = useState(false);
   const [searchInput, setSearchInput] = useState('');


  useEffect(()=>{
    async function fetchAllCountries(url){
         fetch(url).then(response=>{
           if(response.ok){
            return response.json();
           }
         })
         .then(response=>{
               console.log(response);
               setCountries(response);
               setAllCountries(response)
         })
    }
    fetchAllCountries(countryUrl);

  },[])

  console.log("pop content", popContent);
  function handleSearchInput(e){
    let input = e.target.value;
    let temp = allCountries;
        if(input.length ===0){
           setCountries([...temp])
        }
         setSearchInput(input);
  }

  function handleSearch(){

      let url = "https://restcountries.com/v3.1/name/"
      async function fetchCountriesByName(name){
        let fullUrl = url+name;
        console.log("fullUrl",fullUrl);
        fetch(fullUrl).then(response=>{
          if(response.ok){
           return response.json();
          }
        })
        .then(response=>{
              console.log(response);
              setCountries(response);            
        })
    }
    fetchCountriesByName(searchInput);         
  }

  function handleKeyDown(e){
    if(e.key==="Enter"){
      handleSearch();
    }
  }

  console.log("searchInput",searchInput);
  return (
    <div className="App">
      Search: <input value={searchInput} onChange={handleSearchInput} onKeyDown={handleKeyDown}></input> 
      <button onClick={handleSearch} >Click to Search</button>
      {countries && <CountryList setPopContent={setPopContent} setShowPop ={setShowPop} countries={countries}/>}
       {showPop && <CountryDetail popContent={popContent} setShowPop={setShowPop}/>}
    </div>
  );
}

export default App;
