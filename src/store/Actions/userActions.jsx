import { saveUser, removeUser } from "../Reducers/userSlice";
import axios from "../../config/axios";
export const asyncsignup = (user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/student/signup", user);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
