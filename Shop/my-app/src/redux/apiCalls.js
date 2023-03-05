import { loginFailure, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";


export const login = async (dispatch, user) => {
    
    try {
        const res =  await publicRequest.post("/auth/login", user);

        dispatch(loginSuccess(res.data));
            
       
          
    } catch (err) {
        dispatch(loginFailure());
        return false;
    }
};