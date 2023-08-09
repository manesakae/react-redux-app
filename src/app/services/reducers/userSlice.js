import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Manisha Shakya",
    email: "manisha@gmail.com",
    password: "Password",
    isLoggedIn: true
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const { payload: user } = action;
            return { ...user, isLoggedIn: true };
        }

    }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;