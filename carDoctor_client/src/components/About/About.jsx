import abImg from '../../../public/assets/images/about_us/person.jpg'
import partImg from '../../../public/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4 my-8 md:my-24'>
            <div className='relative'>
                <img className='md:w-[70%] rounded-lg ' src={abImg} alt="" />
                <img className='w-[60%] p-3 bg-white md:w-[50%] absolute right-1  -bottom-3' src={partImg} alt="" />
            </div>
            <div>
                <p className='text-lg font-bold clr'>About</p>
                <h1 className='text-4xl font-bold py-4'>We are qualified & of experience in this field</h1>
                <p className='text-lg text-gray-500 pb-2 leading-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-lg text-gray-500 leading-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn bg my-3 text-white'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;