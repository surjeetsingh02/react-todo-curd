import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

const Home = () => {

    const [user, setuser] = useState([])

    useEffect(() => {
        lodeUsers();
    }, []);


    const lodeUsers = async () => {
        const result = await axios.get("http://localhost:3003/users", user);
        setuser(result.data)
    }

    const deletUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        lodeUsers();
    }

    return (
        <>
            <div className='container' className= "mt2">
                <div className='py4'></div>
                
                <table className="table border shadow ">
                    <thead className="thead-success">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            user.map((user, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <th>{user.name}</th>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className="btn btn-success mr-2" to={`/users/${user.id}`}>View </Link>
                                        <Link className="btn btn-outline-secondary mr-2 " to={`/users/edit/${user.id}`}>
                                            Edit
                                            </Link>
                                        <Link className="btn btn-danger" onClick={() => deletUser(user.id)}>Delete </Link>
                                    </td>
                                </tr>
                            ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home
