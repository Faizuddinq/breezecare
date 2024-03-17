import React from 'react'

export default function Precaution() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    {/* <MapTile/> */}
                    <div className="md:5/12 lg:w-5/12">
                        <img 
                            src="https://images.pexels.com/photos/4145244/pexels-photo-4145244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="image"
                        />
                    </div>
                     
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Consider these precautionary steps.
                        </h2>
                        {/* <p className="mt-6 text-gray-600"> */}
                        <ul className=" list-disc px-3 py-4">
                            <li>Good (0-50): Air quality is satisfactory; no precautions needed.</li>
                            <li>Moderate (51-100): Sensitive individuals should consider reducing prolonged outdoor exertion.</li>
                            <li>Unhealthy for Sensitive Groups (101-150): People with respiratory or heart conditions, children, and older adults should limit prolonged outdoor exertion.</li>
                            <li>Unhealthy (151-200): Everyone may experience health effects; outdoor activities should be limited, especially for sensitive groups.</li>
                            <li>Very Unhealthy (201-300): Outdoor activities should be avoided, especially for sensitive groups, and everyone should reduce prolonged outdoor exertion.</li>
                            <li>Hazardous (301 and above) :Everyone should avoid outdoor activities, and people with respiratory or heart conditions should remain indoors.</li>
                        </ul>
                                {/* </p> */}
                        <p className="mt-4 text-gray-600">
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}