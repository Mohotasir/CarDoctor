import Title from "../Title/Title";
import { FaArrowRight } from "react-icons/fa";
import cardImg from '../../../public/assets/images/services/1.jpg'
const Service = () => {
    return (
        <div>
            <Title 
            menu="ABOUT" 
            heading ="Our Service Area"
            para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " 
            ></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mb-8">
                 <div className="p-4 rounded-lg border">
                    <img className="rounded-lg" src={cardImg} alt="" />
                    <h1 className="text-2xl font-bold py-2">Electrical System</h1>
                    <div className="flex justify-between clr font-semibold text-xl">
                      <h4>Price : $20.00</h4>
                      <p className="btn clr font-semibold text-xl"><FaArrowRight /></p>
                    </div>
                 </div>
                 <div className="p-4 rounded-lg border">
                    <img className="rounded-lg" src={cardImg} alt="" />
                    <h1 className="text-2xl font-bold py-2">Electrical System</h1>
                    <div className="flex justify-between clr font-semibold text-xl">
                      <h4>Price : $20.00</h4>
                      <p className="btn clr font-semibold text-xl"><FaArrowRight /></p>
                    </div>
                 </div>
                 <div className="p-4 rounded-lg border">
                    <img className="rounded-lg" src={cardImg} alt="" />
                    <h1 className="text-2xl font-bold py-2">Electrical System</h1>
                    <div className="flex justify-between clr font-semibold text-xl">
                      <h4>Price : $20.00</h4>
                      <p className="btn clr font-semibold text-xl"><FaArrowRight /></p>
                    </div>
                 </div>
                 <div className="p-4 rounded-lg border">
                    <img className="rounded-lg" src={cardImg} alt="" />
                    <h1 className="text-2xl font-bold py-2">Electrical System</h1>
                    <div className="flex justify-between clr font-semibold text-xl">
                      <h4>Price : $20.00</h4>
                      <p className="btn clr font-semibold text-xl"><FaArrowRight /></p>
                    </div>
                 </div>
                 
            </div>
            <div className="text-center ">
                <button className="btn btn-outline border-orange-600 clr ">View More...</button>
            </div>
        </div>
    );
};

export default Service;