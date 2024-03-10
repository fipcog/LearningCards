import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './base-api-with-reauth'

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Card', 'Cards', 'RandomCard', 'Decks', 'Deck', 'Auth'],
})

export const {} = baseApi
