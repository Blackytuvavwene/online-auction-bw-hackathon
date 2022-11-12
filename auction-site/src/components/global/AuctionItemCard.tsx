import { component$ } from "@builder.io/qwik";
import { AuctionItemResponse } from "~/types/global.types";

export const AuctionItemCard = component$((props: AuctionItemResponse) => {
    return (
        <div className="flex md:flex-row  w-full  flex-col bg-base-200 shadow-xl ">
           <img 
           src={props.images[0].image.url} 
           alt={props.images[0].image.imageAlt} 
          className="w-full md:w-1/2 h-64 md:h-full object-cover" />
           
            <div className=" p-6 flex flex-col gap-4">
                <section className="">
                    <h3 className="text-xl font-bold">{props.itemName}</h3>
                    <p>{props.itemShortDescription}</p>
                    
                    <p className="my-2">
                        ${props.startingBid}
                    </p>
                </section>
                <div className="flex flex-col gap-4 w-full justify-between">
                    <button className="btn btn-primary btn-md w-full">
                        Bid
                    </button>
                    <a href="/" className="text-center w-full btn-link  block">
                        Details
                    </a>
                </div>
            </div>
        </div>
    );
    
});