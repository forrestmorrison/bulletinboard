import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Dude Lebowski'},
    { id: '1', name: 'Bob Dylan'},
    { id: '2', name: 'Forrest Morrison'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUser = (state) => state.users;

export default usersSlice.reducer