import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoMdCloseCircleOutline } from "react-icons/io";
import swal from 'sweetalert';
const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [mybookData, setMybookData] = useState([]);
    const url = `http://localhost:5000/booking?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMybookData(data))
    }, [])
    const handleDelete = async (_id) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
        if (willDelete) {
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swal("Your data has been deleted!", {
                            icon: "success",
                        });
                        const remaining = mybookData.filter(u => u._id !== _id);
                        setMybookData(remaining);
                    }
                })
                .catch(error => console.error("Error deleting data:", error));
        }
    };
    return (
        <div>
            <div className="px-12 py-4 md:py-16 rounded-lg my-4 " style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, .8)), url('../../../public/assets/images/homeCarousel/slide1.webp')` }}>
                <h1 className="text-4xl font-semibold text-white">My Bookings</h1>
            </div>
            <div className="overflow-x-auto my-4 md:my-12">
                <table className="table">

                    <thead>
                        <tr className='font-bold'>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className='font-semibold'>
                        {
                            mybookData.map(data =>
                                
                                <tr>
                                    <td>
                                        <button  onClick={() => handleDelete(data._id)} className='text-lg font-bold btn rounded-full'> <IoMdCloseCircleOutline /></button>
                                    </td>
                                    <td>
                                        { data.name}
                                       <img src={data.url} alt="" />
                                    </td>
                                    <td>
                                        {data.price}
                                    </td>
                                    <td>{data.date}</td>
                                    <th>
                                        <button className="btn bg btn-sm text-white">pending..</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;