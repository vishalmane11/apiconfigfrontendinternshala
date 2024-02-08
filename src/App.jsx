import React, { useEffect } from "react";
import axios from "./config/axios";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
const App = () => {
    const TestRoute = async () => {
        try {
            const { data } = await axios.get("/");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        TestRoute();
    }, []);

    return (
        <div className="h-screen w-screen">
            <nav className="p-5 flex gap-x-5">
                <Link to="/">Home</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Signin</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
};

export default App;
