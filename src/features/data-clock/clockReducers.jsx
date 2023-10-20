import { createSlice, combineReducers } from "@reduxjs/toolkit";


// Session Length
const initialState = 30;

const dataSessionReducer = createSlice({
  name: "dataClockSession",
  initialState,
  reducers: {
    sessionIncrement: (state, action) => {
      if(state < 60){
        return state + action.payload
      }
    },
    sessionDecrement: (state, action) => {
      if(state > 1){
        return state - action.payload
      }
    },
    sessionStart:(state, action) => {
      return state = action.payload
    },
    sessionStop: (state, action) => {
      return state = action.payload 
    },
    sessionReset: (state, action) => {
      return state = action.payload
    },
  },
});


// Break Length
let dataBreak = 5;
const dataBreakReducer = createSlice({
  name: "dataClockBreak",
  initialState: dataBreak,
  reducers: {
    breakIncrement: (state, action) => {
      if(state < 60){
        return state + action.payload
      }
    },
    breakDecrement: (state, action) => {
      if(state > 1){
        return state - action.payload
      }
    },
    breakStart:(state, action) => {
      return state = action.payload
    },
    breakStop: (state, action) => {
      return state = action.payload 
    },
    breakReset: (state, action) => {
      return state = action.payload
    },
  },
});

// Combine the two reducers into one
const rootReducer = combineReducers({
  dataSession: dataSessionReducer.reducer,
  dataBreak: dataBreakReducer.reducer,
});

export const { 
  sessionIncrement,
  sessionDecrement,
  sessionInitialState,
  sessionStart,
  sessionStop,
  sessionReset,
} = dataSessionReducer.actions;

export const { 
  breakIncrement,
  breakDecrement,
  breakStart,
  breakStop,
  breakReset,
} = dataBreakReducer.actions;

export default rootReducer;