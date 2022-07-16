import React from "react";
import { BiCheck } from "react-icons/bi";
import Breadcrumb from "../../Dashboard/Breadcrumb/Breadcrumb";
import Footer from "../../Share/Footer/Footer";
import Navbar from "../../Share/Navbar/Navbar";
import TopNavbar from "../../Share/Navbar/TopNavbar";
import Newsletters from "../Home/Home/Newsletters/Newsletters";

const About = () => {
  const crumbs = [
    { path: "home", name: "Home" },
    { path: "about", name: "About Us" },
  ];
  return (
    <>
      <header className="">
        <TopNavbar />
        <Navbar />
      </header>
      <main>
        <section className=" bg-slate-100 py-2 mb-6 container mx-auto">
          <div className="container mx-auto">
            <div className="text-sm breadcrumbs">
              <Breadcrumb crumbs={crumbs} />
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <h1 className=" h-full text-center text-4xl font-bold">welcome To AWS Shop</h1>
          <div className="pt-4 leading-6">
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti eum rerum rem sit
              porro, ex dolorum debitis voluptates laborum ratione.
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, ducimus!
            </p>
          </div>
          <div class="mt-20">
            <div class="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
              <img src="https://i.ibb.co/DkMNkv8/success.jpg" class=" w-full h-auto shadow-2xl" />
              <div>
                <h1 class="text-3xl font-bold">WHY WE ARE?</h1>
                <p class="py-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, praesentium autem.
                  Fugiat voluptatibus repellendus quibusdam dicta. Error aliquid at, officia minima
                  ea numquam corrupti reiciendis. Debitis, consequatur inventore rerum fugit
                  accusantium molestiae et, voluptatum eligendi, laborum sunt cum dolorum ratione!
                </p>
                <ul className="leading-6">
                  <li className="capitalize flex gapx-2 items-center">
                    <BiCheck className="text-xl" /> <span>Amazing React theme</span>
                  </li>
                  <li className="capitalize flex gapx-2 items-center">
                    <BiCheck className="text-xl" />{" "}
                    <span>HTML & CSS3 build with Tailwindcss & Bootstrap</span>
                  </li>
                  <li className="capitalize flex gapx-2 items-center">
                    <BiCheck className="text-xl" /> <span>PowerFull admin panel</span>
                  </li>
                  <li className="capitalize flex gapx-2 items-center">
                    <BiCheck className="text-xl" /> <span>Iconncredible design</span>
                  </li>
                  <li className="capitalize flex gapx-2 items-center">
                    <BiCheck className="text-xl" />{" "}
                    <span>Icon well organized & SEO optimized friendy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto mt-20">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            <div>
              <h4 className="text-xl font-bold">OUR SKILLS</h4>
              <ul className="pr-5 pt-3">
                <li className="py-2">
                  <div className="relative">
                    <p className="absolute  top-0 z-20 text-neutral flex items-center">
                      <span className="block bg-primary px-2 py-3 rounded-full">99%</span>{" "}
                      <span className=" relative left-5">HTML5 </span>
                    </p>
                    <progress
                      class="progress progress-info w-96 lg:w-full h-5 mt-3"
                      value="99"
                      max="100"
                    ></progress>
                  </div>
                </li>
                <li className="py-2">
                  <div className="relative">
                    <p className="absolute  top-0 z-20 text-neutral flex items-center">
                      <span className="block bg-primary px-2 py-3 rounded-full">92%</span>{" "}
                      <span className=" relative left-5">CSS3</span>
                    </p>
                    <progress
                      class="progress progress-info w-96 lg:w-full h-5 mt-3"
                      value="92"
                      max="100"
                    ></progress>
                  </div>
                </li>
                <li className="py-2">
                  <div className="relative">
                    <p className="absolute  top-0 z-20 text-neutral flex items-center">
                      <span className="block bg-primary px-2 py-3 rounded-full">92%</span>{" "}
                      <span className=" relative left-5">CSS3</span>
                    </p>
                    <progress
                      class="progress progress-info w-96 lg:w-full h-5 mt-3"
                      value="92"
                      max="100"
                    ></progress>
                  </div>
                </li>

                <li className="py-2">
                  <div className="relative">
                    <p className="absolute  top-0 z-20 text-neutral flex items-center">
                      <span className="block bg-primary px-2 py-3 rounded-full">90%</span>{" "}
                      <span className=" relative left-5">Node</span>
                    </p>
                    <progress
                      class="progress progress-info w-96 lg:w-full h-5 mt-3"
                      value="90"
                      max="100"
                    ></progress>
                  </div>
                </li>
                <li className="py-2">
                  <div className="relative">
                    <p className="absolute  top-0 z-20 text-neutral flex items-center">
                      <span className="block bg-primary px-2 py-3 rounded-full">90%</span>{" "}
                      <span className=" relative left-5">MongoDB</span>
                    </p>
                    <progress
                      class="progress progress-info w-96 lg:w-full h-5 mt-3"
                      value="90"
                      max="100"
                    ></progress>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold">OUR EXPERIENCES</h4>
              <p className="uppercase font-bold pt-5">
                FUSCE FRINGILLA PORTTITOR IACULI SED QUAM LIBERO, ADIPISCING SED ERAT ID
              </p>
              <p className="pt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia pariatur quam ad
                fuga amet natus nulla sunt incidunt, id officiis quas dolor hic cupiditate. Rem
                recusandae odio veniam velit quas nihil quaerat beatae!
              </p>
              <p className="pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis recusandae vitae at?
                Accusantium similique ipsum reiciendis dolores ex quasi minima dignissimos alias.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold">OUR WORKS</h4>
              <div className="pt-4 ">
                <ul>
                  <li className="flex gap-3">
                    <span className="text-2xl">1.</span>
                    <div>
                      <span className="font-bold block">LOREM IPSUM DOLOR SIT AMET</span>
                      <span>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, delectus...
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3 pt-5">
                    <span className="text-2xl">2.</span>
                    <div>
                      <span className="font-bold block">LOREM IPSUM DOLOR SIT AMET</span>
                      <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, delectus...
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-3 pt-5">
                    <span className="text-2xl">3.</span>
                    <div>
                      <span className="font-bold block">LOREM IPSUM DOLOR SIT AMET</span>
                      <span>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, delectus...
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Newsletters />
      </main>
      <Footer />
    </>
  );
};

export default About;
