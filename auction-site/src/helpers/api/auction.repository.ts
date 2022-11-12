import { AuctionItemRootResponse } from "~/types/global.types";

const AuctionApiRepository=() =>{
 const  apiUrl = "http://localhost:3000/api";



 const getAuctions=async():Promise<AuctionItemRootResponse | string | undefined | any> =>{

        const response = await fetch(`${apiUrl}/auction-items?depth=1`,{
            method: 'GET',
        });

        if (!response.ok) {
            const data = await response.json();
            console.log('error',data);
           throw new Error(data.message);
        }

        const data = await response.json() as AuctionItemRootResponse;
        
        return  data;
    }

    return {
        getAuctions
    }
}


export default  AuctionApiRepository;