import React from 'react'
import Country from './Country'
function CountryList({countries,setPopContent, setShowPop}) {
  
  //  console.log("in country list", countries);
  return (
    <div className='country-list'>
         {countries.map((country, index)=>{
            return <Country props={country} key={index} setPopContent={setPopContent} setShowPop={setShowPop}/>
         })}
    </div>
  )
}

export default CountryList