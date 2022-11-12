export declare interface FakeItemModel{
    id: number;
    name: string;
    price: number;
    description: string;
    image: string[];
    category: string;
    quantity: number;
    seller: string;
    sellerId: number;
    sellerRating: number;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export declare interface FakeOrderModel{
    id: number;
    buyer: string;
    buyerId: number;
    seller: string;
    sellerId: number;
    items: FakeItemModel[];
    status: string;
    createdAt: string;
    updatedAt: string;
}

