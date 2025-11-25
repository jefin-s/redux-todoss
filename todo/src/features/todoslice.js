import { createSlice } from "@reduxjs/toolkit";

const todoslice = createSlice({
  name: "todoSlice",
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      state.push(action.payload);
    },
    removetodo:(state,action)=>{
       return state.filter((itemm,i)=>i!=action.payload)
    }
  },
});
  
export const { addtodo,removetodo } = todoslice.actions;
export default todoslice.reducer;



// this methd push   todo into the array of object
//   state.push({
//     id: Date.now(),
//     text: action.payload,
//     completed: false,
//   });
