
import errImg from '../../../public/assets/icons/Frame (5).png'
const Error = () => {
    return (
        <div className='flex h-[100vh]  items-center justify-center'>
            <div className=''>
                <img className='mx-auto flex items-center justify-center' src={errImg} alt="" />
            </div>
        </div>
    );
};

export default Error;