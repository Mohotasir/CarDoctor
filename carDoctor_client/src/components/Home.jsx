import About from "./About/About";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import Team from "./Team/Team";
import Choose from "./WhyChoose/Choose";
import Service from "./service/Service";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Products></Products>
            <Team></Team>
            <Choose></Choose>
        </div>
    );
};

export default Home;