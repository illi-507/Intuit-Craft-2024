import React from 'react'

function Country(input) {
    
    let {name, flag, population, region, capital,currencies,languages,borders
      
    } = input.props;
    let setPopContent = input.setPopContent;
     let setShowPop = input.setShowPop;

    let additionalInfo ={
        flag, population, region, capital, name,currencies,languages,borders
    }  
    
    function handleViewMore(){
        setPopContent(additionalInfo);
        setShowPop(true);
    }
  return (
    <div className='country-widget'>
        <div>Country Name: {name.common}</div>
        <div>Flag: {flag}</div>
        <div>Population: {population}</div>
        <div>Region: {region}</div>
        <div>capital: {capital&&capital[0]}</div>
        <button onClick={handleViewMore}>View More</button>

    </div>
  )
}

export default Country
