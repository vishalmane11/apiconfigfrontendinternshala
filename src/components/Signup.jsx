import React from "react";
import { useDispatch } from "react-redux";
import { asyncsignup } from "../store/Actions/userActions";

const Signup = () => {
    const dispatch = useDispatch();
    const signupuser = () => {
        const newuser = {
            firstname: "John",
            lastname: "Doee",
            email: "john@doe.com",
            contact: 1234567890,
            city: "bhopal",
            password: "123456",
            gender: "Male",
        };
        dispatch(asyncsignup(newuser));
    };

    return (
        <div>
            <button onClick={signupuser}>Signin User</button>
        </div>
    );
};

export default Signup;
