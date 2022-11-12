export type Role = 'user' | 'admin' | 'auctioner';


export interface AuctionItemRootResponse {
    docs: AuctionItemResponse[];
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
  
export interface AuctionItemResponse {
    id: string;
    itemName: string;
    itemDescription: string;
    itemShortDescription: string;
    seller: AuctionItemSellerInfo;
    startingBid: number;
    incrementalBid: number;
    category: string;
    images: AuctionItemImageField[];
    createdAt: string;
    updatedAt: string;
  }
  
 export interface AuctionItemImageField {
    image: AuctionItemImageFieldResponse;
    id: string;
  }
  
 export interface AuctionItemImageFieldResponse {
    id: string;
    imageAlt: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    createdAt: string;
    updatedAt: string;
    sizes: AuctionItemImageSizes;
    url: string;
  }
  
 export interface AuctionItemImageSizes {
    thumbnail: Thumbnail;
    card: Thumbnail;
    tablet: Thumbnail;
  }
  
  export interface Thumbnail {
  }
  
 export interface AuctionItemSellerInfo {
    id: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    role: string;
    username: string;
    auctionItems: string[];
  }


 export interface ErrorRootResponse {
    errors: ErrorsResponse[];
  }
  
 export  interface ErrorsResponse {
    name: string;
    message: string;
    data: ApiErrors[];
  }
  
 export interface ApiErrors{
    message: string;
    field: string;
  }