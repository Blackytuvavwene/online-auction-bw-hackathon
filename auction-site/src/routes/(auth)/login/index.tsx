import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section className=" w-full flex flex-col items-center justify-center">
        <h1>BW Auctions</h1>
        <form action="" method="post" className=" form-control gap-12 flex flex-col items-center justify-center h-[80vh] w-full max-w-sm m-auto">
            <fieldset className="max-w-xs w-full">
                
                <div className="max-w-xs w-full">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label for="email" className="input-group  w-full">
                        <span>
                            Email
                        </span>
                        <input type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Input your email"
                        className="input input-bordered w-full"
                        />
                    </label>

                </div>
                <div className="max-w-xs w-full">
                    <label className="label">
                        <span className="label-text">Your Password</span>
                    </label>
                    <label for="password" className="input-group w-full">
                        <span>
                            Password
                        </span>
                        <input type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Enter password"
                        className="input input-bordered w-full"
                        />
                    </label>

                </div>
            </fieldset>
            <button type="submit" className="btn-primary btn-md max-w-xs w-full">
                Sign in
            </button>
        </form>
    </section>
  );
});