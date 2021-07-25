import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Axios from 'axios'
// import user from '../users'

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });
    const { name, username, email } = user;


    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

    };

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    }

    const loadUser = async () => {
        const result = await Axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };

    return (
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2>Edit A user</h2>
                    <form onSubmit={e => onSubmit(e)}>

                        <div className="form-group ">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Type your Name"
                                name="name"
                                value={name}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group ">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Type your Username"
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group ">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Type Your Email"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-warning btn-block">Update User</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditUser;
