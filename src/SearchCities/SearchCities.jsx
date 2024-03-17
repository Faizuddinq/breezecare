import React, { useState, useEffect, useRef } from 'react';

import { useAQIAPIs } from '../UseAQIApi/useAQIAPIs';

import CityAQIList from '../CityAQIList/CityAQIList';

import {TOKEN, SEARCH_CITIES_BASE_URL} from '../utils/AQIConst';
import MapTile from '../components/MapTile/MapTile';


const SearchCities = () => {
    const [url, setUrl] = useState('');
    const [cities , loading, initial, error] = useAQIAPIs(url);
    const [searchText, setSearchText] = useState('');
    const searchInput = useRef(null);

    useEffect(() => {
        searchInput.current.focus();
    }, []);
    
    const searchCityName = (event) => {
        event.preventDefault();
        setUrl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${searchText}`);
    }


    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    }
    return(
        <div className=' h-screen overflow-auto rounded-xl flex flex-col  justify-center items-center'>
            { error }
            <div className=' flex flex-col '>
            
            {/* <MapTile/> */}
            <form onSubmit={ e => searchCityName(e)}>
                <label>
                <input 
                    
                    type="text" 
                    ref={ searchInput }
                    value={ searchText } 
                    placeholder="Enter a City Name"
                    onChange={ e => handleSearchTextChange(e) } 
                    />
                </label>
                <input type="submit" className=' bg-blue-400' value="Show AQI" />
            </form>
            {/* air quality monitoring station */}
            {
                loading ?
                    (<span>loading...</span>)
                    :
                    !initial && (<CityAQIList data={ cities.data }/>)
            }
            
            </div>
            
            
        </div>
    )
};

export default SearchCities;