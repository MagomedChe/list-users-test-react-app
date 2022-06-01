import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sliceApi = createApi({
  reducerPath: 'usersApi',
  tagTypes: ['Comments'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => 'users',
    }),
    getPosts: build.query({
      query: (id) => `posts?userId=${id}`,
    }),
    getComments: build.query({
      query: (postId) => `comments?postId=${postId}`,

      // providesTags для автоматического обновления после добавления комментария
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comments', id })),
              { type: 'Comments', id: 'LIST' },
            ]
          : [{ type: 'Comments', id: 'LIST' }],
    }),
    addComment: build.mutation({
      query: (body) => ({
        url: 'comments',
        method: 'POST',
        body,
      }),
      invalidatesTags:[{type: 'Comments', id: 'LIST'}]
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetPostsQuery,
  useGetCommentsQuery,
  useAddCommentMutation,
} = sliceApi;
