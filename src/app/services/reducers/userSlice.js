import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Manisha Shakya",
    email: "manisha@gmail.com",
    password: "Password",
    isLoggedIn: false
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const { payload: username } = action;
            return { ...state, isLoggedIn: true, name: username };
        },
        logout: (state, action) => {
            return { ...state, isLoggedIn: false };
        }

    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;