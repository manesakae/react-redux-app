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
        },
        logout: (state, action) => {
            const { payload: user } = action;
            return { ...state, isLoggedIn: false };
        }

    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;