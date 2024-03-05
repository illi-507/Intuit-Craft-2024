import React from 'react'

function CountryDetail({popContent,setShowPop}) {
  const {
    flag, population, region, capital, name,currencies,languages,borders
}   = popContent;
   
console.log("what is it ?", );
  return (
    <div className='modal'>
        <div className='modal-content'> 
            <div className='close-button' onClick={()=>{
                setShowPop(false)
            }}>X</div>
            <div style={{fontSize:"120px"}}>{flag}</div>
            <div>Population: {population}</div>
            <div>Region: {region}</div>
            <div>Capital: {capital}</div>
            <div>Native Name: {[...Object.values(name.nativeName)][0].official}</div>
            <div>Currencies: {[...Object.values(currencies)][0].name}</div>
            <div>Languages: {[...Object.values(languages)].map((lan,index)=>{
                if(index === [...Object.values(languages)].length-1){
                    return <span key={index}>{lan}</span>
                }
                return <span><span key={index}>{lan}</span> <span>,</span></span>
            })}</div>

             {borders ?<div>Borders: {borders.map((border, index)=>{
                if(index === borders.length-1){
                    return <span key={index}>{border}</span>
                }

                return <span><span key={index}>{border}</span> <span>,</span></span>
            })}</div>:"Borders: No borders" }

        </div>
    </div>
  )
}

export default CountryDetail
