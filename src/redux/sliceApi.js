import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sliceApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => 'users',
    }),
    getPosts: build.query({
      query: (id) => `posts?userId=${id}`,
    }),
    getComments: build.query({
      query: (postId) => `comments`,
    }),
  })
});

export const {useGetUsersQuery, useGetPostsQuery, useGetCommentsQuery} = sliceApi;