import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getData } from '../utils/parser'

interface DataState {
    info: string[][],
    loading: string
}

const initialState: DataState = {
    info: [],
    loading: 'idle'
}

export const fetchData = createAsyncThunk(
    'data/fetchData',
    () => getData()

)

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, state => { state.loading = 'loading' })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<string[][]>) => {
                state.loading = 'idle'
                state.info = action.payload
            })
            .addCase(fetchData.rejected, state => {
                state.loading = 'error'
            })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = dataSlice

export { reducer }

export const { } = actions