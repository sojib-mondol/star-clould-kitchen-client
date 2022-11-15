import React from 'react';

const AddService = () => {
    return (
        <div>
            <form>
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