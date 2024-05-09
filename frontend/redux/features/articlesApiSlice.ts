import { Article } from "@/lib/types";
import { apiSlice } from "../services/apiSlice";

interface ArticleListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Article[];
}

const articlesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listArticles: builder.query<ArticleListResponse, { pageNumber: number }>({
      query: ({ pageNumber }) => {
        const url =
          pageNumber == 1 ? "/articles/" : `/articles/?page=${pageNumber}`;
        return url;
      },
    }),
    getArticle: builder.query({
      query: (slug) => `/articles/${slug}/`,
    }),
    createArticle: builder.mutation({
      query: ({
        title,
        content,
        topic,
        coverImageUrl,
        tags,
        isPublic,
        published,
      }) => ({
        url: "/articles/",
        method: "POST",
        body: {
          title,
          content,
          topic,
          coverImageUrl,
          tags,
          isPublic,
          published,
        },
      }),
    }),
    updateArticle: builder.mutation({
      query: ({ slug, data }) => ({
        url: `/articles/${slug}/`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteArticle: builder.mutation({
      query: (slug) => ({
        url: `/articles/${slug}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useListArticlesQuery,
  useGetArticleQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articlesApiSlice;
