import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {

    const handleAddSevices = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const price = form.price.value;
        
        const service = {
            title: name,
            img: photo,
            description: description,
            price: price,
            service_id: parseInt(Math.random()*100)
        }
        fetch('https://star-cloud-kitchen-server.vercel.app/addservice', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(service),
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Successfully added.')
            form.reset();
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Toaster />
            <form onSubmit={handleAddSevices}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sevices Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Enter the services name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter services photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Enter photo url" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter services description</span>
                    </label>
                    <input type="text" name='description' placeholder="Enter services description" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter Price</span>
                    </label>
                    <input type="text" name='price' placeholder="Enter Price" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;