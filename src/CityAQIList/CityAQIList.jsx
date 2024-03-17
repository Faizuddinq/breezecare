import React from 'react';

import CityAQI from '../CityAQI/CityAQI';
import NoDataFound from '../components/NoDataFound/NoDataFound';

const CityAQIList = props => {
    let  cityList = [];    
    if (props.data) {
        cityList = props.data;
    }
        
    return (
        <div className="cityList-container">

        <div className="cityList">
            <ul>
            {
                cityList.length > 0
                ?
                cityList.map((cityInfo, i) => (
                    <li key={i}>
                        <CityAQI cityInfo={cityInfo} />
                    </li>
                ))
                :
                <NoDataFound />
            }
            </ul>
        </div>
        </div>
    )
};

export default CityAQIList;