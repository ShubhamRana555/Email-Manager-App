import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/UserReducer';
 
const Create = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const users = useSelector((state) => state.users.userList);
    // console.log(users);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({name, email}));
        navigate('/');
    }

    return (
    <div className='flex w-full h-[50vh] justify-center items-center mt-5'>
        <div className='w-1/2 border bg-gray-600 text-white p-5'>
            <h3 className='text-xl font-semibold mb-4'>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor='name' className='block mb-2'>Name:</label>
                    <input 
                        type='text' 
                        name='name' 
                        className='w-full px-3 py-2 border rounded-lg text-black' 
                        placeholder='Enter name'  
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='email' className='block mb-2'>Email:</label>
                    <input 
                        type='email' 
                        name='email' 
                        className='w-full px-3 py-2 border rounded-lg text-black' 
                        placeholder='Enter email'  
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button 
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded-lg'>
                    Submit
                </button>
            </form>
        </div>
    </div>
);

}
 
export default Create
