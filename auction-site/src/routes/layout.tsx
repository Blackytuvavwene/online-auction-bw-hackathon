import { component$, createContext, Slot, useStore } from '@builder.io/qwik';
import {  RequestHandler, useEndpoint, useLocation } from '@builder.io/qwik-city';

import AuthRepository from '~/helpers/api/auth.repository';
import { ApiUserRootResponse } from '~/types/user.type';
import Header from '../components/header/header';

export const onGet: RequestHandler<ApiUserRootResponse> = async () => {
  const user = await AuthRepository.getCurrentUser();
  return user;
};

export const USER_STATE = createContext<ApiUserRootResponse >('userState');

export default component$(() => {

  const loc = useLocation();
  const path = loc.pathname;

  // user store 
  const user = useStore({
    data: {} as ApiUserRootResponse,
  });

  const userState = createContext('user', user);	



  const categories=[
      {
        name: 'All Categories',
        path: '/'
      },
      {
        name:'Property',
        path:'/property'
      },
      {
        name:'Electronics',
        path:'/electronics'
      },
      {
        name:'Furniture',
        path:'/furniture'
      },
      {
        name:'Land',
        path:'/land'
      },
      {
        name:'Vehicles',
        path:'/vehicle'
      },
    ];

    // get and watch current window width


  const currentIndex = categories.findIndex((category) => category.path === path);

  // get current category
  const currentCategory = categories.find((category) => category.path === path);
  
  return (
    <>
      <main className=' flex-1 flex flex-col'>
        <Header />
        <section className='flex flex-1 flex-col md:flex-row'>
          <aside className=' bg-base-200 relative w-full md:max-w-[25vw] mb-6  md:mb-0'>
            <div  className='w-full dropdown md:hidden top-20 sticky'>
              <div tabIndex={currentIndex} className='flex justify-between '>
                <p >{currentCategory?.name}</p>
                <i>Down</i>
              </div>
              <ul tabIndex={currentIndex} className='dropdown-content menu'>
                {categories.map((category) => (
                  <li>
                    <a 
                    href={category.path}
                    className={ "btn-secondary p-4 max-w-xs block w-full text-center  "}>
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>
            <div className='hidden md:block w-full p-6 top-20 sticky'>
                  <ul className='bg-base-100 rounded-xl  w-full h-max flex  py-6 flex-col justify-center items-start'>
                    {categories.map((category) => (
                      <li className='w-full '>
                        <a 
                        href={category.path} 
                        className={`${category.path == path ? 'text-blue-500':''}  p-4 block  text-start`}>
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>
            </div>
          </aside>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://tuvatech.xyz" target="_blank">
          Made with ♡ by Boitumelo Tubabwene
        </a>
      </footer>
    </>
  );
});
