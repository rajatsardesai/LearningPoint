import React from 'react';
import { useState } from 'react';

const Contact = () => {
    const [state, setstate] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setstate((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Hi, My name is ${state.fullname}. My Mobile Number is ${state.phone} and email is ${state.email}. I have a message ${state.message}`);
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                    name="fullname" value={state.fullname} onChange={InputEvent} placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1"
                                    name="phone" value={state.phone} onChange={InputEvent} placeholder="Enter your phone" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                    name="email" value={state.email} onChange={InputEvent} placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1"
                                    name="message" value={state.message} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" class="btn btn-outline-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;