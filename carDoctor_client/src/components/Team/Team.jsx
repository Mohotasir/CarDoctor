import Title from "../Title/Title";
import pImg1 from '../../../public/assets/images/team/1.jpg'
import pImg2 from '../../../public/assets/images/team/2.jpg'
import pImg3 from '../../../public/assets/images/team/3.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Team = () => {
    return (
        <div>
            <div className="">
                <Title
                    menu="Team"
                    heading="Meet Our Team"
                    para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
                ></Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16 mb-8">
                <div className="p-4 rounded-lg border text-center flex flex-col items-center justify-center"data-aos="zoom-in"data-aos-duration="2000">
                    <img className="rounded-lg bg-gray-200 " src={pImg1} alt="" />
                    <h1 className="text-2xl font-bold py-1">Car Engine Plug</h1>
                    <h4 className=" text-gray-600 italic text-lg">Engine Expert</h4>
                    <div className="flex mb-3 gap-4 clr text-2xl text-center mt-2"data-aos="zoom-in"data-aos-duration="3000">
                        <FaFacebook /> 
                        <FaSquareXTwitter />
                        <FaInstagramSquare />
                        <FaLinkedin />
                    </div>
                </div>
                <div className="p-4 rounded-lg border text-center flex flex-col items-center justify-center"data-aos="zoom-in"data-aos-duration="2000">
                    <img className="rounded-lg bg-gray-200" src={pImg2} alt="" />
                    <h1 className="text-2xl font-bold py-1">Car Engine Plug</h1>
                    <h4 className=" text-gray-600 italic text-lg">Engine Expert</h4>
                    <div className="flex mb-3 gap-4 clr text-2xl text-center mt-2">
                        <FaFacebook /> 
                        <FaSquareXTwitter />
                        <FaInstagramSquare />
                        <FaLinkedin />
                    </div>
                </div>
                <div className="p-4 rounded-lg border text-center flex flex-col items-center justify-center"data-aos="zoom-in"data-aos-duration="2000">
                    <img className="rounded-lg bg-gray-200" src={pImg3} alt="" />
                    <h1 className="text-2xl font-bold py-1">Car Engine Plug</h1>
                    <h4 className=" text-gray-600 italic text-lg">Engine Expert</h4>
                    <div className="flex gap-4 mb-3 clr text-2xl text-center mt-2">
                        <FaFacebook /> 
                        <FaSquareXTwitter />
                        <FaInstagramSquare />
                        <FaLinkedin />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Team;