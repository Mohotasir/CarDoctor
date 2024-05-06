import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const CardService = ({service}) => {
    const {_id,url,name,des,price} = service;
   
    return (
        <div className="p-4 rounded-lg border" data-aos="zoom-in" data-aos-duration="1000">
            <img className="rounded-lg" src={url} alt="" />
            <h1 className="text-xl font-bold py-2">{name}</h1>
            <p className="text-gray-500 ">{des}</p>
            <div className="flex justify-between clr font-semibold text-xl">
                <h4>Price : ${price}</h4>
                <Link to={`/checkout/${_id}`} className="btn clr font-semibold text-xl"><FaArrowRight /></Link>
            </div>
        </div>
    );
};

export default CardService;