import React from "react";

const Newsletters = () => {
  return (
    <section className="bg-primary mt-20">
      <div className="py-10 flex justify-center flex-col items-center text-neutral gap-6">
        <h5 className="text-3xl font-bold">Sign Up For Newsletters</h5>
        <p>Get E-mail updates about our latest shop and special offers.</p>
        <div className="w-full">
          <form action="">
            <div className="flex justify-center md:gap-10 sm:gap-4 gap-2 px-4">
              <input
                type="text"
                placeholder="Enter you email"
                class="input rounded-none max-w-sm w-full  "
              />
              <button className="text-white bg-[#090A27] font-bold  py-[14px] px-10">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletters;
