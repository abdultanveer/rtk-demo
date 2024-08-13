const createSlice =  require('@reduxjs/toolkit').createSlice

const initialState = {
    numIcrecreams: 20
}

const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered :(state)=>{ state.numIcrecreams--},
        restocked:(state,action)=>{ state.numIcrecreams += action.payload}
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions