
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/UserReducer.js'; 
const Update = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const { id } = useParams();          // 'users' is a reducer or key paired with userReducer slice
    const users = useSelector((state) => state.users.userList);
    
    const existingUser = users.find(user => user.id == Number(id));
    if (!existingUser) {
    return <p>User not found!</p>;
    }
    
    const [name, setName] = useState(existingUser.name ? existingUser.name : '');
    const [email, setEmail] = useState(existingUser.email ? existingUser.email : ''); 

    const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({  // payload object
        id: Number(id), 
        name,
        email
    }));
    navigate('/');
    }



   return (
    <div className='flex w-full h-[50vh] justify-center items-center mt-5'>
        <div className='w-1/2 border bg-gray-600 text-white p-5 rounded-lg'>
            <h3 className='text-xl font-semibold mb-4'>Update User</h3>
            <form onSubmit={handleUpdate}>
                <div className='mb-4'>
                    <label htmlFor='name' className='block mb-2'>Name:</label>
                    <input
                        type='text'
                        name='name'
                        value={name} 
                        className='w-full px-3 py-2 border rounded-lg text-black'
                        placeholder='Enter name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='email' className='block mb-2'>Email:</label>
                    <input
                        type='email'
                        name='email'
                        value={email} 
                        className='w-full px-3 py-2 border rounded-lg text-black'
                        placeholder='Enter email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
                    Update
                </button>
            </form>
        </div>
    </div>
);
 
}
 
export default Update;