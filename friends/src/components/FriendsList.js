import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {axiosWithAuth} from "../util/axiosWihAuth"

const List = (props) => {
    const [FriendsList, setFriendsList] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => setFriendsList(res.data))
            .catch(err => console.log(err))
    }, [FriendsList]);

    return (
        <>
            {FriendsList.map((item) => {
                return (
                    <>
                        <br/>
                            <p>{item.name}</p>
                            <p>age: {item.age}</p>
                            <p>height: {item.email}</p>
                            <p>id: {item.id}</p>
                        <br/>
                    </>
                )
            })}
        </>
    )
}

export default connect((state) =>{
    return {
        initialState: state
    }
})(List);