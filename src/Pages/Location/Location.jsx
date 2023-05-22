import location from '../../assets/location/city-map-location-marker-high-angle-view-red-126304585.jpg';

const Location = () => {
    return (
        <div className="bg-red-500 text-white my-12 rounded-lg">
            <h2 className='font-bold text-center text-3xl my-4 py-4'>Our Outlet</h2>
            <div className='flex justify-around gap-2 pb-6'>
                <div>
                    <img className='h-28 w-28' src={location} alt="" />
                    <h2>Dhanmondi-04</h2>
                    <p>Momotaz Plaza , Dhaka -1215</p>
                </div>
                <div>
                    <img className='h-28 w-28' src={location} alt="" />
                    <h2>Gulshan-02</h2>
                    <p>Momotaz Plaza , Dhaka -1215</p>
                </div>
                <div>
                    <img className='h-28 w-28' src={location} alt="" />
                    <h2>Karwan Bazar</h2>
                    <p>Momotaz Plaza , Dhaka -1215</p>
                </div>
            </div>
        </div>
    );
};

export default Location;