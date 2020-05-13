
import { axiosWithAuth } from "../util/axiosWihAuth";

export const PostFriends = (data) => {
    return dispatch => {
        axiosWithAuth()
            .post("/friends", data)
            .then(res => {
                dispatch({ type: "POST_FRIEND", payload: res.data[res.data.length -1] })
            })
            .catch(err => console.log("Error!!!", err));
    }
}