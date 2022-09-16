import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getCurrency } from '../utils/parser'

interface DataState {
    code: string,
    name: string,
    info: string[][],
    loading: string
}

const initialState: DataState = {
    code: '',
    name: '',
    info: [],
    loading: 'idle'
}

export const fetchCurrency = createAsyncThunk(
    'currency/fetchCurrency',
    (currency: string) => getCurrency(currency)

)

const dataSlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrency: (state, action: PayloadAction<string[]>) => {
            state.code = action.payload[0]
            state.name = action.payload[1]
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrency.pending, state => { state.loading = 'loading' })
            .addCase(fetchCurrency.fulfilled, (state, action: PayloadAction<string[][]>) => {
                state.loading = 'idle'
                state.info = action.payload
            })
            .addCase(fetchCurrency.rejected, state => {
                state.loading = 'error'
            })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = dataSlice

export { reducer }

export const { setCurrency } = actions