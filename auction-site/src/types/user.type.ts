// import { Role } from "./global.types";


export interface ApiUsersRootResponse {
    docs: UserResponse[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage?: any;
    nextPage?: any;
  }
  
 export  interface UserResponse {
    id: string;
    username: string;
    role: string;
    auctionItems: string[];
    email: string;
    createdAt: string;
    updatedAt: string;
  }


  export type ApiUserRootResponse = LoginUserRootResponse | RegisterUserRootResponse;



  export type  LoginUserRootResponse = {
    message: string;
    user: UserResponse;
    token: string;
    exp: number;
  };

  export type  RegisterUserRootResponse = {
    message: string;
    doc: UserResponse;
  };