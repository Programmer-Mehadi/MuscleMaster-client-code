import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../customContexts/AuthProvider';
const Service = () => {
    const serviceData = useLoaderData();
    const [reviewRating, setReviewRating] = useState(5);
    const { _id, image, serviceName, rating, price, description } = serviceData;
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data =>
                setReviews(data))
    }, [])
    const handleReviewSubmit = (e) => {
        e.preventDefault()
        const reviewText = e.target.reviewtext.value;
        if (reviewText !== "") {
            const review = { reviewText: '', serviceId: '', serviceName: '', userId: '', userName: '', userPhoto: '', rating: '', time: '' };
            review['reviewText'] = reviewText;
            review['serviceId'] = _id;
            review['serviceName'] = serviceName;
            review['userId'] = user.uid;
            review['userName'] = user.displayName;
            review['userPhoto'] = user.photoURL;
            review['rating'] = reviewRating;
            review['time'] = new Date();
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
    const handleRatingChange = (event) => {
        setReviewRating(event.target.value)
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
                                <h6 className='pt-3 pb-2'>Give Rating</h6>
                                <select class="form-select w-25" aria-label="Default select example" onChange={handleRatingChange}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5" selected>5</option>
                                </select>
                                <button type='submit' className='btn btn-primary my-4'>Add Review</button>
                            </Form>
                                :
                                <p className='my-4 btn-primary' >Please
                                    <Link className='h-full my-auto ms-2' to='/login'>Login</Link> for give review
                                </p>

                        }
                    </div>
                    <div className='py-5'>
                        {
                            reviews.map(review => <div className='py-2'>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex items-align-center'>
                                        <img className='border border-dark' src={review.userPhoto} alt="" style={{ height: '40px', width: '40px', borderRadius: '5%' }} />
                                        <h6 className=' ms-2'>{review.userName}</h6>

                                    </div>
                                    <div className='text-danger'>{review.rating}</div>
                                </div>
                                <p style={{ marginLeft: '46px' }}>{review.reviewText}</p>
                                <hr />
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;