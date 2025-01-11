
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
              ✨ Mewujudkan Kesempurnaan di Setiap Perayaan ✨
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
               Elpano Production {"   "}
                
              </h1>
              <p>
               Partner tepercaya untuk semua kebutuhan pesta Anda, dari acara formal hingga perayaan penuh warna. Hadirkan momen terbaik bersama Elpano Production.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-red-700 px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-600"
                    >
                      Booking Now 🔥
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                 
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className=" relative aspect-[700/444] w-full">
                  <img
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/studio.jpg"
                    alt="Hero"
                  />
                  <img
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/studio.jpg"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
