import React, { useEffect,useState } from 'react'

const Custom = () => {
    const [Test,SetTest] = useState([])
    useEffect(()=>{
        CustomApi();
    },[])
    const CustomApi = async () =>{
        const data = await fetch('https://cat-fact.herokuapp.com/facts/');
        const json = await data.json();
        SetTest(json)
        console.log("aaa",json);
    }
  return (
    <div>{
        Test.map((items)=>{
            // const text = ;
            return <li>{items.text}</li>;
        })
        }</div>
  )
}

export default Custom