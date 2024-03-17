import React from 'react'
import { Link } from 'react-router-dom';
import SearchCities from '../../SearchCities/SearchCities';
// import polln from '/src/assets/pollution.jpg'
export default function Home() {
    return (
        <div className="mx-auto  w-full max-w-7xl flex flex-col">
            
            <h1 className=' text-center text-2xl text-gray-500 py-5 text-2xl text-gray-800 font-bold md:text-4xl'>Know Air Quality Index(AQI)</h1>
            <SearchCities/>
            {/* <img className=' ' src={polln} alt="" /> */}
            
        </div>
    );
}
