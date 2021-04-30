import commentAPI from "./commentAPI";
import postAPI from "./postAPI";
import userAPI from "./userAPI";

const API = {
    ...postAPI,
    ...commentAPI,
    ...userAPI
}

export default API;