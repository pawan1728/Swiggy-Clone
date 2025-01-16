import React, { useEffect,useState } from 'react'
import { RESMENULIST } from '../Constant/Utils/resListApi'

const ResMenu = () => {
    const [ResMenuItems,SetResMenuItems] = useState()
    useEffect(()=>{
        ResMenuList();
    },[])
    const ResMenuList = async () =>{
        const data =  await fetch(RESMENULIST);
        const json = await data.json();
        SetResMenuItems(json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR)
        // console.log("ResMenuList ",json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR);
        console.log("ResMenuItems ",ResMenuItems);
     }
  return (
    <div>
    {/* <div>{ResMenuItems[0]?.card?.card.itemCards[0]?.card.info.name}</div> */}
    </div>
  )
}

export default ResMenu