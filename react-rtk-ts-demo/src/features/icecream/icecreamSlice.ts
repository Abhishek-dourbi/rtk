import { ordered as cakeOrdered } from '../cake/cakeSlice';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    numOfIceCreams: number
}

const initialState: InitialState = {
    numOfIceCreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--;
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfIceCreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state, action) => {
    //         state.numOfIceCreams--;
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCreams--
        })
    }
})

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;