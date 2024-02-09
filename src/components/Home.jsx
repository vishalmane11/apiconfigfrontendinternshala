import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const { isAuth } = useSelector((state) => state.user);

    useEffect(() => {
        isAuth && navigate("/");
    }, [isAuth]);

    return <div>Home</div>;
};

export default Home;
