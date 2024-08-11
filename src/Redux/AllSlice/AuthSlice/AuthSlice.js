import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let api_url = "https://wtsacademy.dedicateddevelopers.us/api/user/signup"
const login_api = "https://wtsacademy.dedicateddevelopers.us/api/user/signin"
let profile_api = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details"
const initial_value = {
    isLoading: false, usersname: [], error: null,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    profile_pic: "",
    ph_no: '',
    status: 0,
    message: "",
    authentication: window.sessionStorage.getItem("token") ? "true" : "false", // Check for an existing token
    token: "",
    data: {},

}
export const signup = createAsyncThunk("user/signup",
async (userdata) => {
        const res = await axios.post(api_url, userdata, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            }
        })
        return res?.data
    }
)
export const signin = createAsyncThunk("user/signin",
    async (users) => {
        const res = await axios.post(login_api, users, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            },
        })
        return res?.data
    }
)
export const profile = createAsyncThunk("user/profile",

    async () => {
        let token = window.sessionStorage.getItem("token")
        // console.log("token for profile",token)
        const res = await axios.get(profile_api, {
           
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": token,
                },
          
        })
        return res?.data
    }
)
export const deletion =createAsyncThunk("user/delete",
async()=>{
    window.sessionStorage.clear("token");
})
export const authSlice = createSlice({
    name: "user",
    initialState: initial_value,
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state, action) => {
            state.isLoading = "true"
        })
        builder.addCase(signup.fulfilled, (state, action) => {
            console.log("Action:", action);
            state.isLoading = false;
            state.users = action.payload;
            state.error = null
        })
        builder.addCase(signup.rejected, (state, action) => {
            console.log("Action", action);
            state.isLoading = false;
            state.usersname = [];
            state.error = action.error.message
        })
        builder.addCase(signin.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(signin.fulfilled, (state, action) => {

            console.log("login action: ", action)
            if (action.payload.status === 200) {
                state.isLoading = false;
                state.status = action.payload.status;               
            }
        })
        builder.addCase(signin.rejected, (state, action) => {
            console.log("Action", action);
            state.isLoading = false;
            state.usersname = [];
            state.error = action.error.message
        })
        
        builder.addCase(profile.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(profile.fulfilled, (state, action) => {
            console.log("Action profile:", action);
            state.isLoading = false;
        
            if (action.payload.status === 200) {
                state.error = null;
                state.status = action.payload.status;
                state.first_name = action.payload.data.first_name;
                state.last_name = action.payload.data.last_name;
                state.email = action.payload.data.email;
                state. ph_no=action.payload.data.ph_no;
                state.profile_pic = action.payload.data.profile_pic;
                state.data = action.payload.data;
                // console.log(state.profile_pic)
                // console.log(state.first_name)
               
            } else {
                state.error = "Profile data not found";
            }
        });
        builder.addCase(deletion.pending, (state, action) => {
            state.isLoading = "true"
        })
            builder.addCase(deletion.fulfilled,(state,action)=>{
                console.log("Action:",action);
                state.isLoading=false;
                state.authentication=false
               
           state.userdata=action.payload;
                state.error=null;
               
              
            })
            builder.addCase(deletion.rejected,(state,action)=>{
                console.log("Action",action);
                state.isLoading=false;
                state.userdata=[];
                     state.error=action.error.message
            })
    }
})
export default authSlice.reducer