import { createSlice } from '@reduxjs/toolkit';

let lastId = 0; // Initialize the last ID

// Function to get the next unique integer ID
const getNextId = () => {
    lastId += 1; // Increment lastId for each call
    return lastId;
};

const initialState = {
    userList: [
        {
            id: getNextId(), // Use the function to set initial ID
            name: 'Shubham',
            email: 'shubham@gmail.com',
        },
        {
            id: getNextId(), // Use the function to set initial ID
            name: 'John Doe',
            email: 'johndoe@gmail.com',
        },
        {
            id: getNextId(), // Use the function to set initial ID
            name: 'adarsh',
            email: 'adarsh@gmail.com',
        },
    ],
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Add user
        addUser: (state, action) => {
            const user = {
                id: getNextId(), // Use the function to get a new unique ID
                name: action.payload.name,
                email: action.payload.email,
            };
            return {
                ...state,
                userList: [...state.userList, user],
            }
        },
        
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const userToUpdate = state.userList.find(user => user.id === id);
            if (userToUpdate) {
                userToUpdate.name = name;
                userToUpdate.email = email;
            }
        },


        // Delete user
        deleteUser: (state, action) => {
            const { id } = action.payload;
            return {
                ...state,
                userList: state.userList.filter((user) => user.id !== id),
            }
    
        },
    },
});

// Export actions and reducer
export const { deleteUser, addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
