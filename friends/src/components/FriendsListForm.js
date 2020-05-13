import React, {useState} from "react";
import { connect } from "react-redux";
import { PostFriends } from "../actions/index";

const FriendsListForm = (props) => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        email: "",
        id: "",
    });

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
            age: parseInt(e.target.value, 10) 
        })
    }


    const submitHandler = e => {
        e.preventDefault();

        props.PostFriends(formState);
        
        setFormState({
            name: "",
            age: "",
            email: "",
            id: "",
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <h1>Friends List</h1>

            <input name="name" placeholder="name" 
            value={formState.name} onChange={changeHandler}/>

            <input name="age" placeholder="age" type="number"
            value={formState.age} onChange={changeHandler}/>

            <input name="email" placeholder="email" 
            value={formState.email} onChange={changeHandler}/>

            <input name="id" placeholder="id"
            value={formState.id} onChange={changeHandler}/>

            <button type="submit" onClick={props.getFriend}>Add New Friend</button>
        </form>

    );
}

export default connect(null, { PostFriends: PostFriends })(FriendsListForm);