import React from 'react'
import { RES_IMAGE_URLs } from '../Constant/URLs';
const ResCard = (props) => {
    const {resData} = props;
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId,areaName} = resData?.info;
    return (
        <div>
            <div className='res-container m-2 hover:border  cursor-pointer '>
                <div className='res-card bg-slate-200 w-56 h-64 rounded-lg '>
                    <img src={RES_IMAGE_URLs + cloudinaryImageId} className='w-full h-32 rounded-lg rounded-br-none rounded-bl-none' alt='hg'/>
                    <h2 className='font-semibold px-4 pt-2'>{name.substring(0,25).concat('...')}</h2>
                    <span className='flex font-semibold  px-4'><h4>{avgRating} . </h4><h4>{costForTwo}</h4></span>
                    <h3 className=' px-4'>{cuisines.join(", ").substring(0, 22).concat('...')}</h3>
                    <h3 className=' px-4'>{areaName}</h3>
                </div>
            </div>
        </div>
    )
}

export default ResCard