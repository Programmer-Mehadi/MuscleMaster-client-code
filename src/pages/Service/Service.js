import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../customContexts/AuthProvider';
const Service = () => {
    const serviceData = useLoaderData();
    const { _id, image, serviceName, rating, price, description } = serviceData;
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data =>
                setReviews(data))
    }, [reviews])
    const handleReviewSubmit = (e) => {
        e.preventDefault()
        const reviewText = e.target.reviewtext.value;
        if (reviewText !== "") {
            const review = { reviewText: '', serviceId: '', userId: '', userName: '', userPhoto: '', time: '' };
            review['reviewText'] = reviewText;
            review['serviceId'] = _id;
            review['userId'] = user.uid;
            review['userName'] = user.displayName;
            review['userPhoto'] = user.photoURL;
            // review['time'] = new Date();
            console.log(review)
            fetch('http://localhost:5000/addreview', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        e.target.reset()
                    }
                })
        }
    }
    return (
        <div className='container'>
            <img src={image} className='w-100 my-4' style={{ height: '400px' }} alt="" />
            <h2 className='py-3'>{serviceName}</h2>
            <h4>Rating: {rating}</h4>
            <h4 >Price: {price}</h4>
            <p className='py-3'>{description}</p>
            <div className='py-4'>
                <h2 className='py-3'>Reviews</h2>
                <div>
                    <div>
                        {
                            user ? <Form onSubmit={handleReviewSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Give a review</Form.Label>
                                    <div><textarea name="reviewtext" id="" className='w-100' rows="3"></textarea> </div>
                                </Form.Group>
                                <button type='submit' className='btn btn-primary'>Add Review</button>
                            </Form>
                                :
                                <p className='my-4 btn-primary' >Please
                                    <Link className='h-full my-auto ms-2' to='/login'>Login</Link> for give review
                                </p>
                        }
                    </div>
                    <div>
                        {
                            reviews.map(review => <div>
                                <img src="" alt="" />
                                <h4></h4>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;