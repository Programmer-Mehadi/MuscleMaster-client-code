import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const serviceData = useLoaderData();
    const { _id, image, serviceName, rating, price, description } = serviceData;
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data =>
                setReviews(data))
    }, [reviews])
    const handleReviewSubmit = (e) => {
        e.preventDefault()
        const reviewText = e.target.reviewtext.value;
        console.log(reviewText);
    }
    return (
        <div className='container'>
            <img src={image} className='w-100 ' style={{ height: '400px' }} alt="" />
            <h2 className='py-3'>{serviceName}</h2>
            <h4>Rating: {rating}</h4>
            <h4 >Price: {price}</h4>
            <p className='py-3'>{description}</p>
            <div>
                <h2 className='py-3'>Reviews</h2>
                <div>
                    <div>
                        <Form onSubmit={handleReviewSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Give a review</Form.Label>
                                <div><textarea name="reviewtext" id=""  className='w-100' rows="3"></textarea> </div>
                            </Form.Group>
                            <button type='submit' className='btn btn-primary'>Add Review</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;