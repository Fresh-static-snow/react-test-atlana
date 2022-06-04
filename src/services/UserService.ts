import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, IUserData, IUserRepo } from "../models/types";

interface IUsersResponse {
  items: IUser[];
}

type TUserRes = {
  searchQuery: string;
  perPage: number;
};

export const userAPI = createApi({
  reducerPath: "userAPI",
  tagTypes: ["User", "UserRepos"],
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.github.com`,
  }),
  endpoints: (build) => ({
    getAllUsers: build.query<IUsersResponse, TUserRes>({
      query: ({ searchQuery = "stars:%3E1", perPage = 30 }) =>
        `/search/users?q="${searchQuery}"&sort=stars&per_page=${perPage}`,

      providesTags: (result) => ["User"],
    }),
    getUserData: build.query<IUserData, string>({
      query: (username) => `/users/${username}`,
    }),
    ////
    getAllUserRepos: build.query<IUserRepo[], string>({
      query: (username) => `/users/${username}/repos`,
    }),
  }),
});
