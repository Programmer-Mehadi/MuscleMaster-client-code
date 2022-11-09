import React, { useContext, useEffect, useState } from 'react';
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { AuthContext } from '../../customContexts/AuthProvider';
const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${user.uid}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const deleteReview = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deletereview/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='container py-5'>
            <h4 className='text-center'>All Reviews</h4>
            <table className="table my-4">
                <thead className="text-white bg-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Review</th>
                        <th scope="col">Service Name</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Operation</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        reviews.length > 0 &&
                        reviews.map(((review, index) =>
                            <tr key={review._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{review.reviewText}</td>
                                <td>{review.serviceName}</td>
                                <td>{review.rating}</td>
                                <td style={{ fontSize: '20px' }}><AiFillEdit className='text-info' /><AiTwotoneDelete className='ms-2 text-danger' onClick={() => deleteReview(review._id)} /></td>
                            </tr>
                        ))

                    }

                </tbody>
            </table>
            <div> {
                reviews == 0 &&
                <p className='text-center py-5'>No Reviews</p>

            }
            </div>
        </div>
    );
};

export default MyReviews;