import Title from "../Title/Title";
import CardService from "./CardService";
const Service = ({services}) => {
    //console.log(services)
    return (
        <div>
            <Title 
            menu="ABOUT" 
            heading ="Our Service Area"
            para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " 
            ></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mb-8">
              {
                services.map(service=> <CardService  key={service._id} service={service}></CardService> )
              }  
                 
                 
            </div>
            <div className="text-center ">
                <button className="btn btn-outline border-orange-600 clr ">View More...</button>
            </div>
        </div>
    );
};

export default Service;