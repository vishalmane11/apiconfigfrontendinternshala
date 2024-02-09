import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncsignin } from "../store/Actions/userActions";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const signinuser = () => {
        const newuser = {
            email: "john@doe.com",
            password: "123456",
        };
        dispatch(asyncsignin(newuser));
    };

    useEffect(() => {
        isAuth && navigate("/");
    }, [isAuth]);

    return (
        <div>
            <button onClick={signinuser}>Signin User</button>
        </div>
    );
};

export default Signin;
