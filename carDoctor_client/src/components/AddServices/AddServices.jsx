
import swal from 'sweetalert';
const AddServices = () => {
    const handleForm = (e)=>{
        e.preventDefault();
        const form = e.target;
        const url = form.image.value;
        const name = form.serviceName.value;
        const des = form.description.value;
        const price = form.price.value;
        const formData = {url,name,des,price}
        console.log(formData)
        fetch("http://localhost:5000/services",{
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(res=> res.json())
          .then(data =>{
            console.log(data)
            if(data.insertedId){
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
            <div className="px-12 py-16 rounded-lg my-4 " style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, .8)), url('../../../public/assets/images/homeCarousel/slide1.webp')`}}>
                <h1 className="text-4xl font-semibold text-white">Added New Services</h1>
            </div>
            <div>
                <form className="border bg-slate-100 shadow-xl md:w-[60%] mx-auto rounded-lg p-4 md:p-12 my-12 flex flex-col gap-3" onSubmit={handleForm}>
                  <div>
                        <label htmlFor="image" className=" font-semibold">Image URL</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            placeholder="image  URL here.."
                            className=" w-full rounded border outline-none px-3 py-2 "
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="serviceName" className="font-semibold">Service Name</label>
                        <input
                            type="text"
                            id="serviceName"
                            name="serviceName"
                            className=" w-full rounded border outline-none px-3 py-2 "
                            placeholder="service name.."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block font-semibold">Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            className="block w-full rounded border outline-none px-3 py-2 "
                            placeholder="Descripton..."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block font-semibold">price</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="block w-full rounded border outline-none px-3 py-2 "
                            placeholder="price.."
                            required
                        />
                    </div>
                    <button className="btn px-6 bg">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;