import { component$, Resource } from '@builder.io/qwik';
import { DocumentHead, RequestHandler, useEndpoint } from '@builder.io/qwik-city';
import { AuctionItemCard } from '~/components/global/AuctionItemCard';
import AuctionApiRepository from '~/helpers/api/auction.repository';
import { AuctionItemResponse } from '~/types/global.types';



export const onGet: RequestHandler<AuctionItemResponse[]> = async () => {
  const items = await AuctionApiRepository().getAuctions();
  return items.docs ;
};

export default component$(() => {

  // const itemData= useStore<AuctionItemResponse[]>([]);
  // const auctionItems= useResource$<AuctionItemResponse[] >(async () => {
  //   // track(()=> itemData);
  //   // const abortController = new AbortController();
  //   // cleanup(() => abortController.abort("cleanup"));
  //   // const items = await AuctionApiRepository().getAuctions();
  //   const  apiUrl = "http://localhost:3000/api";

  //   const response = await fetch(`${apiUrl}/auction-items`,{
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  // });

  // if (!response.ok) {
  //     const data = await response.json();
  //   throw new Error(data.message);
  // }

 

  // const {docs} = await response.json() as AuctionItemRootResponse;
  
  // return  docs;
    
  //   // return items.docs;
  // });

  const auctionItems = useEndpoint<typeof onGet>();
  return (
    <Resource 
    value={auctionItems}
    onPending={() => <div>Loading...</div>}
    
    onRejected={() => (
      <div className=' w-full flex flex-1 gap-10 flex-col items-center justify-center'>
        <p className=' text-error'>
          Error loading items
        </p>
        <button className='btn btn-primary max-w-sm w-full btn-sm'>
          Try again 
        </button>
      </div>
      )}
    onResolved={(items) => (
      <>
      <section className='flex-1'>

        <div className=' lg:grid lg:grid-cols-2  flex flex-wrap gap-6 p-6'>
          {  
          items.length != 0 ? items.map((item) =>{
              return <AuctionItemCard {...item}/>
            }) : <p className='text-3xl text-center'>No items</p>
          }
        </div>
      </section>
      </>
    )}
    />

 
    
  );
});

export const head: DocumentHead = {
  title: 'Welcome to BW Auctions',
  
};
