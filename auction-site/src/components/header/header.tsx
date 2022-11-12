import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './header.css?inline';


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header className="navbar bg-base-300 sticky top-0 z-10">
      <div className=" w-full flex items-center text-center">
        <a href="/" className=" text-primary text-4xl">
          BW <span className='text-3xl'>
            Auctions
          </span>
        </a>
      </div>
      <ul className="justify-between gap-10 hidden md:flex">
        <li>
          <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            About
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
            <button>
              Login
            </button>
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            <button className="btn-secondary">
              Register
            </button>
          </a>
        </li>
      </ul>
    </header>
  );
});
