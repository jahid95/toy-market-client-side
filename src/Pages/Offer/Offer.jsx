import offer from '../../assets/login/Capture-removebg-preview.png'

const Offer = () => {
    return (
        <div className='bg-red-500 p-4 rounded-xl my-6 flex justify-around flex items-center'>
            <img className='h-24 w-24' src={offer} alt="" />
            <h2 className='font-bold text-5xl text-white'>Hot Sale</h2>
            <h3 className='text-white font-semibold'> <span className='bg-white rounded-full p-4 text-red-600 mt-12 font-bold text-2xl'>30%</span> Offer For Summer</h3>
        </div>
    );
};

export default Offer;