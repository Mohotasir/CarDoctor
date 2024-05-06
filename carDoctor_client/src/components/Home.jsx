import { useLoaderData } from "react-router-dom";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Team from "./Team/Team";
import Choose from "./WhyChoose/Choose";
import Service from "./service/Service";


const Home = () => {
    const services = useLoaderData();
    //console.log(services);
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service services={services}></Service>
            <Products></Products>
            <Team></Team>
            <Choose></Choose>
        </div>
    );
};

export default Home;