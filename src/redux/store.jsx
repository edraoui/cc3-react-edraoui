
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./PostsSlice";
import UserReducer from "./UserSlice";


const reducer = combineReducers({
    posts: PostsReducer,
    user: UserReducer
});

const store = configureStore({reducer}); 
export default store;