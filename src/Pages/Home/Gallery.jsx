import img1 from '../../../src/assets/gallery/1000_F_305129938_WzKIewqVc9F6HQLbrND9Qqo0hZk5h304.jpg';
import img2 from '../../../src/assets/gallery/big-red-truck-with-trailer-transporting-racing-boat-white-surface_101266-1558.avif';
import img3 from '../../../src/assets/gallery/isolated-realistic-shiny-blue-elegant-classic-city-sedan-car-from-left-front-view_16145-4165.avif';
import img4 from '../../../src/assets/gallery/isolated-realistic-shiny-red-classic-elegant-sedan-car-from-top-left-rear-view_16145-4533.jpg';
const Gallery = () => {
    return (
        <div>
            <h2 className='text-3xl text-left text-gray-500 font-bold my-4 opacity-70 py-4 rounded-lg'>|| Toys Gallery</h2>
            <div className="carousel rounded-box">
  <div className="carousel-item">
    <img className='w-72 h-36' src={img1} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 h-36' src={img2} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 h-36' src={img3} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 h-36' src={img4} alt="Burger" />
  </div> 
  
</div>
<div className="carousel rounded-box">
  <div className="carousel-item">
    <img className='w-72 h-36' src={img1} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 h-36' src={img2} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 h-36' src={img3} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img className='w-72 h-36' src={img4} alt="Burger" />
  </div> 
  
</div>
        </div>
    );
};

export default Gallery;