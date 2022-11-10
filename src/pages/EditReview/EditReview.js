import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditReview = () => {
    const review = useLoaderData();
    const { _id, reviewText, serviceName, rating } = review;
    const [reviewRating, setReviewRating] = useState(review.rating);
    const [updatedReview, setUdatedReview] = useState(review);
    const from =  '/myreviews';
    const navigate = useNavigate();
    const editReview = (e) => {
        e.preventDefault()
        const form = e.target;
        const newReview = updatedReview;
        newReview['reviewText'] = form.reviewtext.value;
        newReview['rating'] = reviewRating;

        setUdatedReview(newReview)
        fetch(`http://localhost:5000/editreview/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast("Review Edit Successfully!");
                    return navigate(from, { replace: true });
                }
            })
    }
    const handleRatingChange = (event) => {
        setReviewRating(event.target.value)
    }
    return (
        <div>
            <ToastContainer />
            <Form className='py-3 my-5 shadow rounded container edit-review mx-auto' style={{ maxWidth: '500px' }} onSubmit={editReview}>
                <h2 className='py-2 text-center'>Edit review</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <div className='pt-3 pb-2 d-flex ' ><h6 className='me-2 '>Service Name:</h6> {serviceName} </div>

                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <h6 className='pt-3 pb-2 w-fit'>Review Text: </h6>
                    <div className='w-100'><textarea defaultValue={reviewText} name="reviewtext" id="" className='w-100' rows="3" required></textarea> </div>
                </Form.Group>
                <h6 className='pt-3 pb-2'>Give Rating: </h6>
                <select class="form-select w-25" aria-label="Default select example" required onChange={handleRatingChange}>
                    {
                        reviewRating == "1" ? <option value="1" selected>1</option> : <option value="1">1</option>
                    }
                    {
                        reviewRating == "2" ? <option value="2" selected>2</option> : <option value="2">2</option>
                    }
                    {
                        reviewRating == "3" ? <option value="2" selected>3</option> : <option value="3">3</option>
                    }
                    {
                        reviewRating == "4" ? <option value="4" selected>4</option> : <option value="4">4</option>
                    }
                    {
                        reviewRating == "5" ? <option value="5" selected>5</option> : <option value="5">5</option>
                    }

                </select>
                <button type='submit' className='btn btn-primary my-4'>Edit Review</button>
            </Form>

        </div>
    );
};

export default EditReview;