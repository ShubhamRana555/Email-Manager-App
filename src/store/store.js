import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../redux/UserReducer.js';

const store = configureStore({
    // reducer
    reducer: {
        users: UserReducer  // 'users' is used to access the state of the userReducer slice
   }
   
  // this becomes the updated redux store structure now 
//    {
//     users: {
//         userList: [
//             { id: 1, name: 'Shubham', email: 'shubham@gmail.com' },
//             { id: 2, name: 'John Doe', email: 'johndoe@gmail.com' },
//             { id: 3, name: 'adarsh', email: 'adarsh@gmail.com' }
//         ]
//     }
// }

    
})

export default store;
