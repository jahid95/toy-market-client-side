import img1 from '../../../src/assets/banner/model-truck_248415-3263.jpg';
import img2 from '../../../src/assets/banner/colorful-car-toys_1194-2341.avif';
import img3 from '../../../src/assets/banner/supply-chain-representation-with-yellow-truck_23-2149853111.avif';
import img4 from '../../../src/assets/banner/funny-illustrated-car-painted-rainbow-colors_183364-23794.avif';


const Carousel = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-full flex items-center h-full right-[100px] top-[220px]">
                <div className='text-white space-y-7 bg-red-500 rounded-lg p-6'>
                        
                        <div>
                            <button className="btn btn-primary mr-5">Offer 20%</button>
                            <button className="btn btn-warning">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-[270px]">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full right-[100px] top-[220px]">
                <div className='text-black space-y-7 bg-red-300 rounded-lg opacity-75 p-6'>
                        
                        <div>
                            <button className="btn btn-primary mr-5">30% Offer Now</button>
                            <button className="btn btn-outline btn-secondary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-[270px]">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full right-[100px] -top-[220px]">
                <div className='text-black space-y-7 bg-yellow-300 rounded-lg opacity-75 p-6'>
                        
                        <div>
                            <button className="btn btn-primary mr-5">30% Offer Now</button>
                            <button className="btn btn-outline btn-secondary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-[270px]">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full right-[100px] top-[220px]">
                <div className='text-black space-y-7 bg-yellow-300 rounded-lg opacity-75 p-6'>
                      
                        <div>
                            <button className="btn btn-primary mr-5">30% Offer Now</button>
                            <button className="btn btn-outline btn-secondary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-[270px]">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;