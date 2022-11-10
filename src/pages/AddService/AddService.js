import React, { useState } from 'react';

const AddService = () => {

    const [reviewRating, setReviewRating] = useState(5);

    const handleRatingChange = (event) => {
        setReviewRating(event.target.value)
    }
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const image = form.image.value;
        const rating = reviewRating;
        const price = "$" + form.price.value;
        const description = form.description.value;

        const newService = { serviceName, image, rating, price, description };

        console.log(newService)
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledge) {
                    form.reset();
                }
            })



    }
    return (
        <div className='container'>
            <div>
                <form onSubmit={handleAddService} className='rounded d-flex flex-column gap-3 p-4 my-4 shadow mx-auto' style={{ maxWidth: '500px' }}>
                    <h2 className='text-center py-2'>Add New Services</h2>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Service Name:</label>
                        <input name='serviceName' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter service name" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Image:</label>
                        <input name="image" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image url" required />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Price:</label>
                        <input name="price" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter price" required />
                    </div>
                    <div class="form-group d-flex">
                        <span className='me-2'>Rating: </span>
                        <select class="form-select w-25" aria-label="Default select example" onChange={handleRatingChange} required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5" selected>5</option>
                        </select>
                    </div>
                    <div className="form-group d-flex flex-column">
                        <label for="exampleInputEmail1">Description: </label>
                        <textarea className='w-100' name="description" id="" rows="3" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;