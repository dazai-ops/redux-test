import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

export const counterSlide = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log(state.value+=1)
    },
    decrement: (state) => {
      state.value -= 1;
      console.log(state.value-=1)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      console.log(state.value+=action.payload)
    },
  }
})

export const {increment, decrement, incrementByAmount} = counterSlide.actions
export default counterSlide.reducer