import { saveUser, removeUser } from "../Reducers/userSlice";
import axios from "../../config/axios";

export const asynccurrentUser = () => async (dispatch, getState) => {
    try {
        try {
            const { data } = await axios.post("/student");
            dispatch(saveUser(data.student));
        } catch (error) {
            console.log(error.response.data);
        }
    } catch (error) {}
};

export const asyncsignup = (user) => async (dispatch, getState) => {
    try {
        await axios.post("/student/signup", user);
        dispatch(asynccurrentUser());
    } catch (error) {
        console.log(error.response.data);
    }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
    try {
        await axios.post("/student/signin", user);
        dispatch(asynccurrentUser());
    } catch (error) {
        console.log(error.response.data);
    }
};

export const asyncremoveUser = () => async (dispatch, getState) => {
    try {
        await axios.get("/student/signout");
        dispatch(removeUser());
    } catch (error) {
        console.log(error.response.data);
    }
};
