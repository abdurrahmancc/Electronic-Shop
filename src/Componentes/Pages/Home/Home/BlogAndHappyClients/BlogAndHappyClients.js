import React from "react";
import HappyClients from "./HappyClients";
import OurBlog from "./OurBlog";

const BlogAndHappyClients = () => {
  return (
    <section className="container mx-auto mt-10">
      <div className="md:grid md:grid-cols-2 gap-6">
        <div className="max-w-lg mx-auto md:max-w-full">
          <OurBlog></OurBlog>
        </div>
        <div className="max-w-lg mx-auto  md:max-w-full">
          <HappyClients />
        </div>
      </div>
    </section>
  );
};

export default BlogAndHappyClients;
