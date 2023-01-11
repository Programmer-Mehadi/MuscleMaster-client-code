import React from 'react';
import useTitle from '../../hooks/useTitle';

const Contactus = () => {
    useTitle('Contactus')
    return (
        <div className='container'>
            <h2 className='py-4 text-center '>Contact Us</h2>
            <form className='py-5  ' style={{ maxWidth: '700px', margin: 'auto' }}>
                <div class="form-group mb-3">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input required type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />

                </div>
                <div class="form-group mb-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input required type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mb-3 w-100">
                    <label >Message</label>
                    <textarea required className='w-100 ps-3' placeholder='Type here '></textarea>
                </div>
                <div class="form-check mb-3">
                    <input required  type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button  class="btn btn-primary">Send Message</button>
            </form>
            <br />
            <br />
        </div>
    );
};

export default Contactus;