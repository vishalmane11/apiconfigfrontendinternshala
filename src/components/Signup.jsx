import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncsignup } from "../store/Actions/userActions";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.user);

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

    useEffect(() => {
        isAuth && navigate("/");
    }, [isAuth]);
    return (
        <div>
            <button onClick={signupuser}>Signup User</button>
        </div>
    );
};

export default Signup;
