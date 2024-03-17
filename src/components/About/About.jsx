import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    {/* <MapTile/> */}
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                     
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Clear Air, Clear Mind: BreezCare - Where Every Breath Counts!
                        </h2>
                        <p className="mt-6 text-gray-600">
                        At BreezCare, we are dedicated to ensuring you breathe easy by providing accurate and up-to-date air quality index (AQI) information. Our mission is to empower individuals and communities to make informed decisions about their health and well-being. With our cutting-edge technology and commitment to excellence, we strive to be your trusted source for real-time air quality data. Join us in our journey towards healthier environments for all. Breathe better with  BreezCare.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}