import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../redux/UserReducer';


const Home = () => {
    const navigate = useNavigate();
    const users = useSelector((state) => state.users.userList);  // 'useSelector' is used to get the state of the store
    const dispatch = useDispatch();  // 'useDispatch' is used to update the state of the store(deleting data etc.)
//     const deleteData = (id) => {
//         dispatch(deleteUser());
//         // navigate(0)
        
//    }



    return (
        <div className='container mt-40 mx-40 font-mono'>
            <div className='px-80'>
                <h1 className='text-5xl font-bold mb-5 underline font-mono'>Email Manager</h1>
            </div>
            <Link to={"/create"}  className='bg-green-500 text-white px-4 py-2 rounded-md mb-5 inline-block'>
                Create +
            </Link>
            <div className="overflow-x-auto rounded-lg w-3/4">
                <table className='min-w-full bg-white text-black'>
                    <thead>
                        <tr className="text-left">
                            <th className='py-2 px-4 border-b'>ID</th>
                            <th className='py-2 px-4 border-b'>Name</th>
                            <th className='py-2 px-4 border-b'>Email</th>
                            <th className='py-2 px-4 border-b'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((user,index) => (
                            <tr key={index}>
                                <td className='py-2 px-5 border-b'>{user.id}</td>
                                <td className='py-2 px-5 border-b'>{user.name}</td>
                                <td className='py-2 px-5 border-b'>{user.email}</td>
                                <td className='py-2 px-5 border-b'>
                                    <Link to={`/edit/${user.id}`} className="inline-flex items-center px-6 py-2 my-2 text-sm font-medium text-center text-white bg-blue-500 hover:bg-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Edit
                                    </Link>
                                    <button className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-6 py-2 mx-5 my-2 dark:bg-red-600 dark:hover:bg-red-700 focus:ring-red-700 dark:focus:ring-red-700" 
                                    onClick={()=> dispatch(deleteUser(user.id))}>
                                        Delete
                                    </button>
                                </td>
                                
                            </tr>
                        ))
                       } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
