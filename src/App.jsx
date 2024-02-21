import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
import { useDispatch, useSelector } from "react-redux";
import { asynccurrentUser, asyncremoveUser } from "./store/Actions/userActions";
const App = () => {
    const { isAuth, user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asynccurrentUser());
        console.log("hii")
    }, []);

    const LogoutHandler = () => {
        console.log("click");
        dispatch(asyncremoveUser());
    };

    return (
        <div className="h-screen w-screen">
            <nav className="p-5 flex gap-x-5">
                <Link to="/">Home</Link>
                {!isAuth ? (
                    <>
                        <Link to="/signup">Signup</Link>
                        <Link to="/signin">Signin</Link>
                    </>
                ) : (
                    <>
                        <button
                            className="flex justify-center items-center"
                            title="Signout"
                            onClick={LogoutHandler}
                        >
                            <img
                                className="w-[10vh] h-[10vh] object-cover rounded-full"
                                src={user && user.avatar.url}
                                alt=""
                            />
                        </button>
                    </>
                )}
            </nav>
            <hr />
            <Routes>
                <Route path="/" element={!isAuth ? <Home /> : <Profile />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </div>
    );
};

export default App;
