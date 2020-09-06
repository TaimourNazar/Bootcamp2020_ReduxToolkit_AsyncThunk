import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const counterUpdate = createAsyncThunk(
    "counter/counterUpdate",
    async(value, thunkAPI)=>{
        const response = await fetch("http://localhost:3000/api/updatecounter");
        const data = await response.json();
        return data;
    }
);

export const counterSlice=createSlice({
    name: "Counter",
    initialState:{
        count: 0,
        isLoading: false,
        error:""
    },
    reducers:{
        increment:(state)=>{
            state.count=state.count+1;
        },
        decrement:(state)=>{
            state.count--;
        },
        incrementByValue:(state,action)=>{
            state.count+=action.payload;
        }
    },
    extraReducers:{
        [counterUpdate.fulfilled]:(state,action)=>{
            console.log("FUllfilled-->"+action.payload);
            state.count+=action.payload;
            state.isLoading=false;
        },
        [counterUpdate.pending]:(state)=>{
            state.isLoading=true;
        },
        [counterUpdate.rejected]:(state,action)=>{
            console.log("rejected-->"+action.payload)
            state.isLoading=false;
            state.error="Error in Update Counter";
        }
    }
});

export const {increment, decrement, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;
