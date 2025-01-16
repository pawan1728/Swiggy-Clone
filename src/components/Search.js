import React from 'react'

const Search = ({type,placeholder,onChange,className}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={onChange} className={className}/>
    </div>
  )
}

export default Search