
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Checkout = () => {
    const {user} = useContext(AuthContext);
    const serviceData = useLoaderData();
    const {name,price} = serviceData;
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        const textArea = form.textarea.value;
        const formData = { fname,lname,phone,email,date,price,textArea,name }
        console.log(formData)
        fetch("http://localhost:5000/booking", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    swal({
                        title: "Successfull !",
                        text: "Added data successfully",
                        icon: "success",
                        button: "Ok",
                    });
                }
                form.reset();
            });
    }
    return (
        <div className=''>
            <div className="px-12 py-16 rounded-lg my-4 " style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, .8)), url('../../../public/assets/images/homeCarousel/slide1.webp')` }}>
                <h1 className="text-4xl font-semibold text-white">Check Out</h1>
                <h1 className="text-4xl font-semibold text-white">service name : <span className='clr'>{name}</span></h1>
                
            </div>
            <div>
                <form  onSubmit={handleForm} className="border bg-slate-100 shadow-xl md:w-[60%] mx-auto rounded-lg p-4 md:p-12 my-12 flex flex-col gap-3" >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div>
                            <label htmlFor="fname" className=" font-semibold">First Name</label>
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                placeholder="First Name  here.."
                                className=" w-full rounded border outline-none px-3 py-2 "
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lname" className="font-semibold">Last Name</label>
                            <input
                                type="text"
                                id="lname"
                                name="lname"
                                className=" w-full rounded border outline-none px-3 py-2 "
                                placeholder="Last name.."
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block font-semibold">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="block w-full rounded border outline-none px-3 py-2 "
                                placeholder="Mobile number.."
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-semibold">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                defaultValue={user?.email}
                                className="block w-full rounded border outline-none px-3 py-2 "
                                placeholder="email.."
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="date" className="block font-semibold">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="block w-full rounded border outline-none px-3 py-2 "
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block font-semibold"> Service Price</label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                defaultValue={price}
                                className="block w-full rounded border outline-none px-3 py-2 "
                                placeholder="email.."
                                required
                            />
                        </div>

                    </div>
                    <div>
                        <textarea className='px-3 py-2 w-full outline-none border' name="textarea" id="textarea" placeholder='text here..'></textarea>
                    </div>
                    <button className="btn px-6 bg">Check Out</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;