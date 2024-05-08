import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";


const axiosScequre = axios.create({
    baseURL : 'https://car-doctor-server-12z1vgrph-tahsins-projects-aaa37910.vercel.app',
    withCredentials: true
})
const useAxios = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    axiosScequre.interceptors.response.use(res=>{
        return res;
    },error=>{
        console.log('error tracked',error.response)
        if(error.response.status === 401 || error.response.status === 403){
            console.log('logout user')
            logOut()
            .then(()=>{
                navigate('/login');
            })
            .catch(error=> alert(error.message))
        }
    }
)
    return axiosScequre;
};

export default useAxios;