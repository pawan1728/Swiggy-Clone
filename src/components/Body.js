import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import FilterButton from './FilterButton'
import Shimmer from './Shimmer'
import { RESLISTAPIS } from '../Constant/Utils/resListApi'
import Search from './Search'
const Body = () => {
  const [ListOfRestaurents, SetListOfRestaurents] = useState([]);
  const [FilteredRestaurents, SetFilteredRestaurents] = useState([]);
  const [inputValue, SetInputValue] = useState();
  useEffect(() => {
    fetchAPI();
  }, [])

  const fetchAPI = async () => {
    const data = await fetch(RESLISTAPIS);
    const json = await data.json();
    const finalData = json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    SetListOfRestaurents(finalData);
    SetFilteredRestaurents(finalData)
  }



  const onSubmitHandler = (e) => {
    // SetListOfRestaurents()
    console.log(ListOfRestaurents);
    const searchTextLowerCase = e.target.value;
    SetInputValue(searchTextLowerCase)
  }

  const handleSearchText = () => {
    const finterSearchData = ListOfRestaurents.filter((res) => {
      return res.info.name.toUpperCase().includes(inputValue.toUpperCase());
    })
    SetFilteredRestaurents(finterSearchData);
  }

  const topRatedFilterBTn = () => {
    SetFilteredRestaurents(ListOfRestaurents.filter(ele => ele.info.avgRating > 4))
  }
  const VegFilterBTn = () => {
    SetFilteredRestaurents(ListOfRestaurents.filter(ele => ele.info.veg === true))
  }
  const NonVegFilterBTn = () => {
    SetFilteredRestaurents(ListOfRestaurents.filter(ele => ele.info.veg !== true))
  }
  const ResetFilterBTn = () => {
    SetFilteredRestaurents(ListOfRestaurents);
  }
  if (FilteredRestaurents.length === 0) {
    return (
      <div>
        <div className='flex'>
          <FilterButton onClick={topRatedFilterBTn} name="Top Rated  Restaurents" className="border cursor-pointer p-2 ml-4 bg-lime-400 rounded" />
          <FilterButton onClick={VegFilterBTn} name="Veg Only" className="bg-lime-500 border cursor-pointer p-2 ml-4 rounded" />
          <FilterButton onClick={NonVegFilterBTn} name="Non-Veg Only" className="border cursor-pointer p-2 ml-4 bg-red-500 rounded" />
          <FilterButton onClick={ResetFilterBTn} name="Reset" className="border cursor-pointer p-2 ml-4 bg-green-700 text-gray-100 rounded" />
          <Search type="text" className="border border-cyan-400 ml-2 p-2 w-full rounded rounded-tr-none rounded-br-none" onChange={onSubmitHandler} />
          <button onClick={handleSearchText} className='p-2 m-2 rounded border bg-lime-500 hover:bg-green-500 rounded-tl-none rounded-bl-none'>Submit</button>
        </div>
        <div className='flex flex-wrap'>
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
          <Shimmer />
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className='flex items-center'>
        <FilterButton onClick={topRatedFilterBTn} name="Top Rated  Restaurents" className="border cursor-pointer p-2 ml-4 bg-lime-400 rounded" />
        <FilterButton onClick={VegFilterBTn} name="Veg Only" className="bg-lime-500 border cursor-pointer p-2 ml-4 rounded" />
        <FilterButton onClick={NonVegFilterBTn} name="Non-Veg Only" className="border cursor-pointer p-2 ml-4 bg-red-500 rounded" />
        <FilterButton onClick={ResetFilterBTn} name="Reset" className="border cursor-pointer p-2 ml-4 bg-green-700 text-gray-100 rounded" />
        <Search type="text" className="border border-cyan-400 ml-2 p-2 w-full rounded rounded-tr-none rounded-br-none" onChange={onSubmitHandler} />
        <button onClick={handleSearchText} className='p-2 m-2 rounded border bg-lime-500 hover:bg-green-500 rounded-tl-none rounded-bl-none'>Submit</button>
      </div>
      <div className='flex flex-wrap justify-start '>{

        FilteredRestaurents.map((resturant) => {
          return (<ResCard resData={resturant} key={resturant.info.id} />)
        })}
      </div>
    </div>
  )
}

export default Body