import React, { useContext, useEffect, useState } from 'react';
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../customContexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
const MyReviews = () => {
    useTitle('MyReview')
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://musclemaster-server.vercel.app/myreviews/${user.uid}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('MuscleMaster-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.message) {
                    logOut()
                }
                else {
                    setReviews(data)
                }
            })
    }, [])
    const deleteReview = (id) => {
        console.log(id);
        fetch(`https://musclemaster-server.vercel.app/deletereview/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const newReviews = reviews.filter(review => review._id !== id);
                    setReviews(newReviews);
                    toast("Review Delete Successfully!");
                }

            })
    }

    return (
        <div className='container py-5'>
                <ToastContainer />
            <h4 className='text-center'>All Reviews</h4>

            <div> {
                reviews.length == 0 ?
                    <p className='text-center py-5'>No reviews were added</p>
                    :
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
                                        <td style={{ fontSize: '20px' }}
                                        >
                                            <Link to={`/editreview/${review._id}`}><AiFillEdit className='text-info' /></Link>

                                            <AiTwotoneDelete className='ms-2 text-danger' onClick={() => deleteReview(review._id)} /></td>
                                    </tr>
                                ))

                            }

                        </tbody>
                    </table>

            }
            </div>
        </div>
    );
};

export default MyReviews;