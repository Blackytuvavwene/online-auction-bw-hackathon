import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
    return (
      <>
        <main class=" min-h-screen ">
          
          <section>
            <Slot />
          </section>
        </main>
        <footer>
          <a href="https://tuvatech.xyz" target="_blank">
            Made with ♡ by Boitumelo Tubabwene123
          </a>
        </footer>
      </>
    );
  });