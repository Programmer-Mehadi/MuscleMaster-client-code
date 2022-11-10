import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hooks/useTitle';
const AddService = () => {
    useTitle('Add service')
    const [reviewRating, setReviewRating] = useState(1);

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const image = form.image.value;
        const rating = reviewRating;
        const price = "$" + form.price.value;
        const description = form.description.value;
        const newService = { serviceName, image, rating, price, description };

        fetch('https://musclemaster-server.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast("Service Added Successfully!");
                    form.reset();

                }
            })
    }
    const handleRatingChange = (event) => {
        setReviewRating(event.target.value)
    }
    return (
        <div className='container'>
            <ToastContainer />
            <div>
                <form onSubmit={handleAddService} className='rounded d-flex flex-column gap-3 p-4 my-4 shadow mx-auto' style={{ maxWidth: '500px' }}>
                    <h2 className='text-center py-2'>Add New Services</h2>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Service Name:</label>
                        <input name='serviceName' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter service name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Image:</label>
                        <input name="image" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image url" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Price:</label>
                        <input name="price" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter price" required />
                    </div>
                    <div className="form-group d-flex">
                        <span className='me-2'>Rating: </span>
                        <select className="form-select w-25" aria-label="Default select example" onChange={handleRatingChange} required>
                            <option defaultValue="1">1</option>
                            <option defaultValue="2">2</option>
                            <option defaultValue="3">3</option>
                            <option defaultValue="4">4</option>
                            <option defaultValue="5">5</option>
                        </select>
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label htmlFor="exampleInputEmail1">Description: </label>
                        <textarea className='w-100' name="description" id="" rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;