import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import Data from '../types/dataTypes'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://run.mocky.io/v3'}),
    endpoints: (builder) => ({
        getData: builder.query<Data, undefined>({
            query: ()=> '/7f02819f-8254-410a-b8af-ab98572bd26b'
        })
    })
})

export const {useGetDataQuery} = apiSlice