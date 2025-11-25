import { configureStore } from "@reduxjs/toolkit";
import todoreducer from '/src/features/todoslice.js'
const store=configureStore({
    reducer:{
        todo:todoreducer
    }
})

export default store