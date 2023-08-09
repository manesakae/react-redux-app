import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: nanoid(),
            name: "Manisha Shakya",
            email: "manisha@gmail.com"
        },
        {
            id: nanoid(),
            name: "John Doe",
            email: "john@gmail.com"
        }
    ]
}
const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdd: (state, action) => {
            const { payload: user } = action;
            return [...state, user];
        }
    }
});

export const { userAdd } = usersSlice.actions;

export default usersSlice.reducer;