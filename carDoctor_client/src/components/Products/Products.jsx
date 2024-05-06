import Title from "../Title/Title";
import pImg1 from '../../../public/assets/images/products/1.png'
import pImg2 from '../../../public/assets/images/products/2.png'
import pImg3 from '../../../public/assets/images/products/3.png'
import pImg4 from '../../../public/assets/images/products/4.png'
const Products = () => {
    return (
        <div className="my-24">
            <Title
            menu = "Popular Products"
            heading="Browse Our Products"
            para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            ></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 mb-8">
            <div className="p-4 rounded-lg border text-center bg-white transition duration-300 ease-in-out " data-aos="fade-up" data-aos-duration="1000">
                    <img className="rounded-lg bg-gray-200 max-h-[180px] w-full  " src={pImg1} alt="" />
                    <h1 className="text-2xl font-bold py-2">Electrical System</h1>        
                    <h4 className="clr font-bold">Price : $20.00</h4>
                 </div>
                 <div className="p-4 rounded-lg border text-center"data-aos="zoom-in"data-aos-duration="1000">
                    <img className="rounded-lg bg-gray-200 max-h-[180px] w-full" src={pImg2} alt="" />
                    <h1 className="text-2xl font-bold py-2">Electrical System</h1>        
                    <h4 className="clr font-bold">Price : $20.00</h4>
                 </div>
                 <div className="p-4 rounded-lg border text-center"data-aos="zoom-in"data-aos-duration="1000">
                    <img className="rounded-lg bg-gray-200 max-h-[180px] w-full" src={pImg3} alt="" />
                    <h1 className="text-2xl font-bold py-2">Electrical System</h1>        
                    <h4 className="clr font-bold">Price : $20.00</h4>
                 </div>
                 <div className="p-4 rounded-lg border text-center"data-aos="zoom-in"data-aos-duration="1000">
                    <img className="rounded-lg bg-gray-200 max-h-[180px] w-full" src={pImg4} alt="" />
                    <h1 className="text-2xl font-bold py-2">Electrical System</h1>        
                    <h4 className="clr font-bold">Price : $20.00</h4>
                 </div>
                 
            </div>
            <div className="text-center ">
                <button className="btn btn-outline border-orange-600 clr ">View More...</button>
            </div>
        </div>

    );
};

export default Products;